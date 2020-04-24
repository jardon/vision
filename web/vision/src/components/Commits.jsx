import React, { Component } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

class Commits extends Component {
    
    render() { 
        const { commitData, begin, end } = this.props.state;

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
            </Paper>
         );
    }
}
 
export default Commits;