import React, { Component } from 'react';
import Repository from './Repository'
import Search from './Search'
import axios from 'axios';
import Box from '@material-ui/core/Box';

class Dashboard extends Component {
    state = { 
        data: "No data loaded",
        input: "",
        commitData: [],
        issueData: null,
     }

    updateInput = (field) => this.setState({input: field});

    getData = async () => {
        this.setState({ issueData: null, data: "No data loaded", commitData: [] });
        const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;
        let auth = {headers: {authorization: "token " + API_KEY}}
        let commitData = [];
        let issueData = [];
        let commits = await axios.get('https://api.github.com/repos/' + this.state.input + "/stats/commit_activity", auth);
        let date;

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

        this.setState({data: "Data loaded", commitData: commitData});

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
        this.setState({issueData : issueData});

    };

    render() { 
        return ( 
            <div style={{"height" : "1200px"}}>
                <Box height="100%" width="100%">
                    <Search  search={this.getData.bind(this)} updateInput={this.updateInput.bind(this)}/>
                    <Repository data={this.state.data} commitData={this.state.commitData} issueData={this.state.issueData}/>
                </Box>
            </div>
         );
    }
}
 
export default Dashboard;
