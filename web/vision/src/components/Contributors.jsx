import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ResponsiveTreeMap } from '@nivo/treemap';
import CircularProgress from './Spinner';

class Contributors extends Component {
    
    render() {

      const { contributionData } = this.props.state;

        return ( 
            <Paper elevation={3} style={this.props.style}>
                <Typography variant="h5">Contributors</Typography>
                {this.props.state.contributionData === null && <div style={{width: "40px", marginLeft: "auto", marginRight: "auto", marginTop: 30}}><CircularProgress /></div>}
                {this.props.state.contributionData === null && <Typography variant="body1" align='center' style={{marginBottom: 20, marginTop: 20}}>Calling all volunteers...</Typography>}
                {this.props.state.contributionData !== null && <div style={{height: 350}}>
                    <ResponsiveTreeMap
                        root={contributionData.root}
                        height={350}
                        identity="name"
                        value="loc"
                        leavesOnly={true}
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="name"
                        labelSkipSize={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
                        colors={{ scheme: 'set2' }}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                    />
                </div>}
            </Paper>
         );
    }
}
 
export default Contributors;