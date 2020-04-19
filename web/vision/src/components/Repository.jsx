import React, { Component } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'

class Repository extends Component {

    render() { 
        let end = new Date();
        let begin = new Date();
        begin.setFullYear(end.getFullYear() - 1);

        if (this.props.data === "No data loaded") {
            return (  
                <div>
                    <pre>{this.props.data}</pre>
                </div>
            );}
        else {
            return (
                <React.Fragment>
                    <h1>Commits</h1>
                    <ResponsiveCalendar
                        data={this.props.commitData}
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
                    <h1>Issues</h1>
                    {this.props.issueData === null && <h3>Issue Data Loading...</h3>}
                    {this.props.issueData != null && <ResponsiveCalendar
                            data={this.props.issueData}
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
                        />}
                </React.Fragment>
            );
        }
    }
}

export default Repository;
