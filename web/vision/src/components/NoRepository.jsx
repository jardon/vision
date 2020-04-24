import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class NoRepository extends Component {
    state = {  }
    render() { 
        return ( 
            <Paper elevation={3} style={{padding: 20, marginTop: 10, marginBottom: 10, marginRight: 10, marginLeft: 10}} >
                <Typography variant="body1" align='center' >Please search for a repository.</Typography> 
            </Paper>
         );
    }
}
 
export default NoRepository;