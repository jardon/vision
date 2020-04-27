import React, { Component } from 'react';
import RepositoryInfo from './RepositoryInfo';
import Search from './Search'
import axios from 'axios';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

        let tempIssues = issues.data;
        let totalIssues;        
        let page = 1;

        while(issues.headers.link.includes('rel="next"')) {
            issues = await axios.get('https://api.github.com/repos/' + this.state.input + '/issues?since=' + date.toISOString() + '&per_page=100&page=' + ++page, auth);
            totalIssues = tempIssues.concat(issues.data);
            tempIssues = totalIssues;
        }

        tempIssues = [];
        tempIssues = totalIssues.map((issue) => new Date(issue.updated_at).toISOString().slice(0, 10));

        tempIssues.map((item) => {
            let count = 0;
            let curr = item;
            tempIssues.map((date) => {
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

        let tempContributors = contributors.data;
        let totalContributors;

        while(contributors.headers.link.includes('rel="next"')) {
            contributors = await axios.get('https://api.github.com/repos/' + this.state.input + '/contributors?&per_page=100&page=' + ++page, auth);
            totalContributors = tempContributors.concat(contributors.data);
            tempContributors = totalContributors;
        }

        let usernames = totalContributors.map((item) => item.login);

        let commits = await axios.get("https://api.github.com/repos/" + this.state.input + "/commits?per_page=100", auth);

        let tempCommits = commits.data;
        let totalCommits;
        page = 1;

        while(commits.headers.link.includes('rel="next"')) {
            commits = await axios.get('https://api.github.com/repos/' + this.state.input + '/commits?&per_page=100&page=' + ++page + '&since=' + begin.toISOString(), auth);
            totalCommits = tempCommits.concat(commits.data);
            tempCommits = totalCommits;
        }

        let contributionData = usernames.map((name) => 
            { 
                return {
                "name": name,
                "loc": tempCommits.filter((item) => name === (item.committer.login)).length
            }}
        );

        contributionData = {"root": {
            "name": "nivo",
            "color": "hsl(4, 70%, 50%)",
            "children": contributionData }}

        this.setState({ contributionData })
    }

    getData = async () => {
        this.setState({ issueData: null, loaded: false, commitData: [], repoUrl: null, begin: null, end: null });
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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                        Vision
                        </Typography>
                        <Search  search={this.getData.bind(this)} updateInput={this.updateInput.bind(this)}/>                      
                    </Toolbar>
                </AppBar>
                
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
