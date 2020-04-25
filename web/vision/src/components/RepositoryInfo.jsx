import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class RepositoryInfo extends Component {

    render() { 
        const { repoUrl } = this.props.state;
        const { name, owner, forked, contributors, stars, watchers, forks } = this.props.state.info;

        return ( 
            <Paper elevation={3} style={this.props.style}>
                <Typography variant="h5">Repository Information</Typography>
                <div style={{marginTop: 20, marginBottom: 20}}>
                    <Typography variant="body1">Name: {name}</Typography>
        <Typography variant="body1">Owner: {owner}</Typography>
                    <Typography variant="body1">Stars: {stars.toLocaleString(undefined, { minimumFractionDigits: 0 })}</Typography>
                    <Typography variant="body1">Watchers: {watchers.toLocaleString(undefined, { minimumFractionDigits: 0 })}</Typography>
                    <Typography variant="body1">Forks: {forks.toLocaleString(undefined, { minimumFractionDigits: 0 })}</Typography>
                </div>
                <Divider light />
                {repoUrl != null && 
                    <div style={{marginTop: 20, width: 130, marginLeft: "auto", marginRight: "auto"}}>
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none"}}>
                            <span >View on Github  </span>
                            {/* <img src="media/GitHub-Mark.png"></img> */}
                        </a>
                    </div>}
            </Paper>
         );
    }
}
 
export default RepositoryInfo;