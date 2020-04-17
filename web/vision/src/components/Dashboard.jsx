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
        
        for(let i = 0; i < commits.data.length; i++) {
            if (commits.data[i].total !== 0) {
                date = new Date(commits.data[i].week * 1000)
                for(let j = 0; j < 7; j++) {
                    date.setDate(date.getDate() + 1);
                    if(commits.data[i].days[j] !== 0) 
                        commitData.push({"day": date.toISOString().slice(0, 10), "value": commits.data[i].days[j]})
                }
            }
        }

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

        issueData = tempIssues.map((item) => {
            let count = 0;
            let curr = item;
            for(let i = 0; i < tempIssues.length; i++) {
                if(tempIssues[i] === item){
                    count++;
                    tempIssues[i] = null;
                }
            }
            if(curr !== null)
                return {"day": curr, "value": count};
        }).filter((item) => item != null);
        
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
