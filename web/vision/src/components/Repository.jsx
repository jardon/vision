import React, { Component } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CircularProgress from './Spinner';

class Repository extends Component {

    render() { 
        const { loaded, repoUrl, commitData, issueData, begin, end } = this.props.state;

        if (!loaded) {
            return ( 
            <Paper elevation={3} style={{padding: 20, marginTop: 10, marginBottom: 10, marginRight: 10, marginLeft: 10}} >
                <Typography variant="body1" align='center' >Please search for a repository.</Typography> 
            </Paper>
            );}
        else {
            return (
                <Paper elevation={3} style={this.props.style}>
                    <Typography variant="h5" >Commits</Typography>     
                    <div style={{height: 350}}>               
                        <ResponsiveCalendar
                            data={commitData}
                            // height={350}
                            from={begin.toISOString().slice(0, 10)}
                            to={end.toISOString().slice(0, 10)}
                            emptyColor="#eeeeee"
                            colors={[ '#4791db', '#1976d2', '#115293', '#dc004e' ]}
                            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                            yearSpacing={40}
                            monthBorderColor="#ffffff"
                            dayBorderWidth={2}
                            dayBorderColor="#ffffff"
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'row',
                                    translateY: 36,
                                    itemCount: 4,
                                    itemWidth: 42,
                                    itemHeight: 36,
                                    itemsSpacing: 14,
                                    itemDirection: 'right-to-left'
                                }
                            ]}
                        />
                    </div>
                    <Typography variant="h5" >Issues by Last Update</Typography>
                        {issueData === null && <Typography variant="body1" align='center' style={{marginBottom: 20, marginTop: 20}}>Aggregating issue data...</Typography>}
                        {issueData === null && <div style={{width: "40px", marginLeft: "auto", marginRight: "auto"}}><CircularProgress /></div>}                
                        {issueData != null && <div style={{height: 350}}>
                            <ResponsiveCalendar
                                data={issueData}
                                height={350}
                                from={begin.toISOString().slice(0, 10)}
                                to={end.toISOString().slice(0, 10)}
                                emptyColor="#eeeeee"
                                colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                                yearSpacing={40}
                                monthBorderColor="#ffffff"
                                dayBorderWidth={2}
                                dayBorderColor="#ffffff"
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'row',
                                        translateY: 36,
                                        itemCount: 4,
                                        itemWidth: 42,
                                        itemHeight: 36,
                                        itemsSpacing: 14,
                                        itemDirection: 'right-to-left'
                                    }
                                ]}
                            />
                        </div>
                        }
                    {repoUrl != null && <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Repository on Github</a>}
                </Paper>
            );
        }
    }
}

export default Repository;
