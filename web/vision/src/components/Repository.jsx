import React, { Component } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'

class Repository extends Component {

    date = new Date(1574553600 * 1000);
    date2 = new Date(1574553600 * 1000);

    render() { 

        if (this.props.data == "No data loaded") {
            this.date2.setDate(this.date2.getDate() + 1);
            return (  
                <div>
                    <pre>{this.props.data}</pre>
                </div>
            );}
        else
            return (
                <React.Fragment>
                    <span><br></br>{this.props.data.owner.login}/{this.props.data.name}<br></br> </span>
                    <span>Id: {this.props.data.id}<br></br> </span>
                    <h1>Commits</h1>
                     <ResponsiveCalendar
                        data={this.props.calendarData}
                        from="2019-04-10"
                        to={new Date().toISOString().slice(0, 10)}
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
                    {/*<h1>Issues</h1>
                    <ResponsiveCalendar
                        data={this.data}
                        from="2019-04-10"
                        to={new Date().toISOString().slice(0, 10)}
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
                    /> */}
                </React.Fragment>
            );
    }
}

export default Repository;
