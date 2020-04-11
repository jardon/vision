import React, { Component } from 'react';
import Repository from './Repository'
import Search from './Search'
import axios from 'axios';
import Box from '@material-ui/core/Box';


class Dashboard extends Component {
    state = { 
        data: "No data loaded",
        input: "",
        calendarData: []
     }

    updateInput = (field) => this.setState({input: field});

    getData = async () => {
        let data = [];
        let response = await axios.get('https://api.github.com/repos/' + this.state.input);
        let commits = await axios.get(response.data.url + "/stats/commit_activity");

        for(let i = 0; i < 52; i++) {
            if (commits.data[i].total != 0) {
                let date = new Date(commits.data[i].week * 1000)
                for(let j = 0; j < 7; j++) {
                    date.setDate(date.getDate() + 1);
                    if(commits.data[i].days[j] != 0) 
                        data.push({"day": date.toISOString().slice(0, 10), "value": commits.data[i].days[j]})
                }
            }
        }
        this.setState({data: response.data, calendarData: data});
    };

    render() { 
        return ( 
            <div style={{"height" : "1200px"}}>
                <Box height="100%" width="100%">
                    <Search  search={this.getData.bind(this)} updateInput={this.updateInput.bind(this)}/>
                    <Repository data={this.state.data} calendarData={this.state.calendarData}/>
                </Box>
            </div>
         );
    }
}
 
export default Dashboard;
