import React, { Component } from 'react';
import RepositoryInfo from './RepositoryInfo';
import Search from './Search'
import axios from 'axios';
// import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
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
        
        info: {
            name: "repoName",
            owner: "ownerName",
            forked: "forkedAddress",
            contributors: "numberOfContributors"
        }
    }

    updateInput = input => this.setState({input});

    getData = async () => {
        this.setState({ issueData: null, loaded: false, commitData: [], repoUrl: null, begin: null, end: null });
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}}
        let commitData = [];
        let issueData = [];
        let date;
        let end = new Date();
        let begin = new Date();
        begin.setFullYear(end.getFullYear() - 1);


        let repoData = await axios.get('https://api.github.com/repos/' + this.state.input, auth);

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

        this.setState({loaded: true, commitData, repoUrl: repoData.data.html_url, begin, end});

        date = new Date();
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
        
        console.log("Done loading data");
        this.setState({issueData});

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
                    <Contributors state={this.state} style={style}></Contributors>
                    <Commits state={this.state} style={style}></Commits>
                    <Issues state={this.state} style={style}></Issues>
                </React.Fragment>}
            </React.Fragment>
         );
    }
}
 
export default Dashboard;
