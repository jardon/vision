import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class NoRepository extends Component {
    state = {  }
    render() { 
        return ( 
            <Paper elevation={3} style={{padding: 20, marginTop: 10, marginBottom: 10, marginRight: 10, marginLeft: 10}} >
                <Typography variant="h4" align='left' >Welcome to Vision, the Github Activity Analyzer!</Typography> 
                <br></br>
                <Typography variant="body1">
                    With this application, you will be able to search for a Github for repositories and receive valuable information and statistics that will help you understand your repository better.
                    This tool pulls directly from Github's public API to aggregate commit, contributor, and issue data about the repository.  
                    The data is then transformed and displayed using intuitive data visualization tools in order to provide you an easy-to-use and easy-to-understand data visualization application.

                </Typography>
                <br></br>
                <Divider></Divider>
                <br></br>
                <Typography variant="h5">Usage Tutorial</Typography>
                <br></br>
                <Typography variant="body1">
                    To find a Github repository, you will need to input the owner and the repository name in this form "owner/repository".  Here are some popular examples: 
                </Typography>
                <ul>
                    <li>valvesoftware/proton</li>
                    <br></br>
                    <li>ansible/ansible</li>
                    <br></br>
                    <li>pop-os/shell</li>
                    <br></br>
                    <li>lutris/lutris</li>
                    <br></br>
                    <li>aristocratos/bashtop</li>
                </ul>

                <Typography variant="body1">
                    Depending on the amount of data the application needs to aggregate, the loading times will vary.  
                    This is because there are not statistics API's provided by Github to quickly get some of the required data.
                    As a result, the data must be pulled in small pieces, aggregated, and shaped into something useable.
                    This in turn creates a bottleneck due to the relatively slow nature of the REST API calls.
                </Typography>

                <br></br>
                <Typography variant="body1">
                    As a general rule of thumb, the less popular the repository, the more quickly the data aggregation will be completed.  Try searching repositories above!
                </Typography>

            </Paper>
         );
    }
}
 
export default NoRepository;