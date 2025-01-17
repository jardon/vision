import React, { Component } from 'react';
import RepositoryInfo from './RepositoryInfo';
import PrimarySearchAppBar from './Search'
import axios from 'axios';
import NoRepository from './NoRepository';
import Contributors from './Contributors';
import Commits from './Commits';
import Issues from './Issues';

const style = {
    minHeight: 30, 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    marginRight: 10, 
    marginLeft: 10, 
    height: "100%"
}


class Dashboard extends Component {
    state = { 
        loaded: false,
        input: "",
        commitData: [],
        issueData: null,
        repoUrl: null,
        begin: null,
        end: null,
        contributionData: null,
        
        info: {
            name: "repoName",
            owner: "ownerName",
            stars: 0,
            watchers: 0,
            forks: 0
        }
    }

    updateInput = input => this.setState({input});

    getCommitGraphData = async () => {
        let date;
        let commitData = [];
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}};
        let commits = await axios.get('https://api.github.com/repos/' + this.state.input + "/stats/commit_activity", auth);
        commits.data.map((item) => {
            if (item.total !== 0) {
                date = new Date(item.week * 1000)
                item.days.map((day) => { 
                    date.setDate(date.getDate() + 1);
                    if(day !== 0) 
                        commitData.push({"day": date.toISOString().slice(0, 10), "value": day});
                });
            }
        });

        this.setState({ commitData });
    }

    getIssueGraphData = async () => {
        let issueData = [];
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}};
        let date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        let issues = await axios.get('https://api.github.com/repos/' + this.state.input + '/issues?since=' + date.toISOString() + '&per_page=100', auth);

        let totalIssues = issues.data;        
        let page = 1;

        if(issues.headers.link !== undefined) {
            while(issues.headers.link.includes('rel="next"')) {
                issues = await axios.get('https://api.github.com/repos/' + this.state.input + '/issues?since=' + date.toISOString() + '&per_page=100&page=' + ++page, auth);
                totalIssues = totalIssues.concat(issues.data);
            }
        }

        totalIssues = totalIssues.map((issue) => new Date(issue.updated_at).toISOString().slice(0, 10));

        totalIssues.map((item) => {
            let count = 0;
            let curr = item;
            totalIssues.map((date) => {
                if(date === item) {
                    count++;
                    date = null;
                }
            });
                if(curr != null)
                    issueData.push({"day": curr, "value": count});
        });        
        
        this.setState({issueData});
    }

    getContributorGraphData = async () => {
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}};
        let page = 1;
        let end = new Date();
        let begin = new Date();
        begin.setFullYear(end.getFullYear() - 1);
        let contributors = await axios.get("https://api.github.com/repos/" + this.state.input + "/contributors?per_page=100", auth);

        let totalContributors = contributors.data;

        if(contributors.headers.link !== undefined) {
            while(contributors.headers.link.includes('rel="next"')) {
                contributors = await axios.get('https://api.github.com/repos/' + this.state.input + '/contributors?&per_page=100&page=' + ++page, auth);
                totalContributors = totalContributors.concat(contributors.data);
            }
        }

        let usernames = totalContributors.map((item) => item.login);

        let commits = await axios.get("https://api.github.com/repos/" + this.state.input + "/commits?per_page=100", auth);

        let totalCommits = commits.data;
        page = 1;

        if(commits.headers.link !== undefined) {
            while(commits.headers.link.includes('rel="next"')) {
                commits = await axios.get('https://api.github.com/repos/' + this.state.input + '/commits?&per_page=100&page=' + ++page + '&since=' + begin.toISOString(), auth);
                totalCommits = totalCommits.concat(commits.data);
            }
        }

        let contributionData = usernames.map((name) => 
            { 
                return {
                "name": name,
                "loc": totalCommits.filter((item) => name === (item.committer.login)).length
            }}
        );

        contributionData = {"root": {
            "name": "nivo",
            "color": "hsl(4, 70%, 50%)",
            "children": contributionData }}

        this.setState({ contributionData })
    }

    getData = async (e) => {
        e.preventDefault();
        this.setState({ issueData: null, loaded: false, commitData: [], repoUrl: null, begin: null, end: null, contributionData: null });
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}}
        let end = new Date();
        let begin = new Date();
        begin.setFullYear(end.getFullYear() - 1);


        let repoData = await axios.get('https://api.github.com/repos/' + this.state.input, auth);


        this.getCommitGraphData()

        this.setState({loaded: true, repoUrl: repoData.data.html_url, begin, end, 
            info: { 
                    name: repoData.data.name,
                    owner: repoData.data.owner.login,
                    forked: repoData.data.fork,
                    stars: repoData.data.watchers,
                    watchers: repoData.data.subscribers_count,
                    forks: repoData.data.forks
            }
        });

        this.getContributorGraphData();
        this.getIssueGraphData();

    };

    render() { 
        return ( 
            <React.Fragment>
                <PrimarySearchAppBar input={this.updateInput} submit={this.getData} ></PrimarySearchAppBar>
                
                {!this.state.loaded && <NoRepository></NoRepository>}

                {this.state.loaded && 
                <React.Fragment>
                    <RepositoryInfo state={this.state} style={style}></RepositoryInfo>
                    <Commits state={this.state} style={style}></Commits>
                    <Contributors state={this.state} style={style}></Contributors>
                    <Issues state={this.state} style={style}></Issues>
                </React.Fragment>}
            </React.Fragment>
         );
    }
}
 
export default Dashboard;
