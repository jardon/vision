import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ResponsiveTreeMap } from '@nivo/treemap';

class Contributors extends Component {
    
    render() { 

        let root = {
            "root": {
              "name": "nivo",
              "color": "hsl(237, 70%, 50%)",
              "children": [
                {
                  "name": "viz",
                  "color": "hsl(136, 70%, 50%)",
                  "children": [
                    {
                      "name": "stack",
                      "color": "hsl(131, 70%, 50%)",
                      "children": [
                        {
                          "name": "chart",
                          "color": "hsl(39, 70%, 50%)",
                          "loc": 82648
                        },
                        {
                          "name": "xAxis",
                          "color": "hsl(180, 70%, 50%)",
                          "loc": 163215
                        },
                        {
                          "name": "yAxis",
                          "color": "hsl(3, 70%, 50%)",
                          "loc": 31409
                        },
                        {
                          "name": "layers",
                          "color": "hsl(165, 70%, 50%)",
                          "loc": 149214
                        }
                      ]
                    },
                    {
                      "name": "pie",
                      "color": "hsl(59, 70%, 50%)",
                      "children": [
                        {
                          "name": "chart",
                          "color": "hsl(355, 70%, 50%)",
                          "children": [
                            {
                              "name": "pie",
                              "color": "hsl(225, 70%, 50%)",
                              "children": [
                                {
                                  "name": "outline",
                                  "color": "hsl(34, 70%, 50%)",
                                  "loc": 78336
                                },
                                {
                                  "name": "slices",
                                  "color": "hsl(53, 70%, 50%)",
                                  "loc": 3743
                                },
                                {
                                  "name": "bbox",
                                  "color": "hsl(1, 70%, 50%)",
                                  "loc": 13340
                                }
                              ]
                            },
                            {
                              "name": "donut",
                              "color": "hsl(73, 70%, 50%)",
                              "loc": 133680
                            },
                            {
                              "name": "gauge",
                              "color": "hsl(201, 70%, 50%)",
                              "loc": 130450
                            }
                          ]
                        },
                        {
                          "name": "legends",
                          "color": "hsl(268, 70%, 50%)",
                          "loc": 99963
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "colors",
                  "color": "hsl(92, 70%, 50%)",
                  "children": [
                    {
                      "name": "rgb",
                      "color": "hsl(121, 70%, 50%)",
                      "loc": 189803
                    },
                    {
                      "name": "hsl",
                      "color": "hsl(290, 70%, 50%)",
                      "loc": 189315
                    }
                  ]
                },
                {
                  "name": "utils",
                  "color": "hsl(121, 70%, 50%)",
                  "children": [
                    {
                      "name": "randomize",
                      "color": "hsl(266, 70%, 50%)",
                      "loc": 155458
                    },
                    {
                      "name": "resetClock",
                      "color": "hsl(216, 70%, 50%)",
                      "loc": 167882
                    },
                    {
                      "name": "noop",
                      "color": "hsl(203, 70%, 50%)",
                      "loc": 112607
                    },
                    {
                      "name": "tick",
                      "color": "hsl(171, 70%, 50%)",
                      "loc": 87543
                    },
                    {
                      "name": "forceGC",
                      "color": "hsl(237, 70%, 50%)",
                      "loc": 166475
                    },
                    {
                      "name": "stackTrace",
                      "color": "hsl(228, 70%, 50%)",
                      "loc": 23230
                    },
                    {
                      "name": "dbg",
                      "color": "hsl(252, 70%, 50%)",
                      "loc": 119919
                    }
                  ]
                },
                {
                  "name": "generators",
                  "color": "hsl(71, 70%, 50%)",
                  "children": [
                    {
                      "name": "address",
                      "color": "hsl(100, 70%, 50%)",
                      "loc": 26596
                    },
                    {
                      "name": "city",
                      "color": "hsl(12, 70%, 50%)",
                      "loc": 16734
                    },
                    {
                      "name": "animal",
                      "color": "hsl(155, 70%, 50%)",
                      "loc": 175631
                    },
                    {
                      "name": "movie",
                      "color": "hsl(314, 70%, 50%)",
                      "loc": 75785
                    },
                    {
                      "name": "user",
                      "color": "hsl(114, 70%, 50%)",
                      "loc": 193957
                    }
                  ]
                },
                {
                  "name": "set",
                  "color": "hsl(303, 70%, 50%)",
                  "children": [
                    {
                      "name": "clone",
                      "color": "hsl(271, 70%, 50%)",
                      "loc": 111852
                    },
                    {
                      "name": "intersect",
                      "color": "hsl(307, 70%, 50%)",
                      "loc": 119836
                    },
                    {
                      "name": "merge",
                      "color": "hsl(102, 70%, 50%)",
                      "loc": 27399
                    },
                    {
                      "name": "reverse",
                      "color": "hsl(202, 70%, 50%)",
                      "loc": 166046
                    },
                    {
                      "name": "toArray",
                      "color": "hsl(205, 70%, 50%)",
                      "loc": 24418
                    },
                    {
                      "name": "toObject",
                      "color": "hsl(103, 70%, 50%)",
                      "loc": 175111
                    },
                    {
                      "name": "fromCSV",
                      "color": "hsl(92, 70%, 50%)",
                      "loc": 173104
                    },
                    {
                      "name": "slice",
                      "color": "hsl(151, 70%, 50%)",
                      "loc": 56956
                    },
                    {
                      "name": "append",
                      "color": "hsl(102, 70%, 50%)",
                      "loc": 88091
                    },
                    {
                      "name": "prepend",
                      "color": "hsl(83, 70%, 50%)",
                      "loc": 61961
                    },
                    {
                      "name": "shuffle",
                      "color": "hsl(113, 70%, 50%)",
                      "loc": 170264
                    },
                    {
                      "name": "pick",
                      "color": "hsl(228, 70%, 50%)",
                      "loc": 197568
                    },
                    {
                      "name": "plouc",
                      "color": "hsl(70, 70%, 50%)",
                      "loc": 21093
                    }
                  ]
                },
                {
                  "name": "text",
                  "color": "hsl(291, 70%, 50%)",
                  "children": [
                    {
                      "name": "trim",
                      "color": "hsl(324, 70%, 50%)",
                      "loc": 74988
                    },
                    {
                      "name": "slugify",
                      "color": "hsl(229, 70%, 50%)",
                      "loc": 138215
                    },
                    {
                      "name": "snakeCase",
                      "color": "hsl(345, 70%, 50%)",
                      "loc": 112522
                    },
                    {
                      "name": "camelCase",
                      "color": "hsl(108, 70%, 50%)",
                      "loc": 69421
                    },
                    {
                      "name": "repeat",
                      "color": "hsl(61, 70%, 50%)",
                      "loc": 196574
                    },
                    {
                      "name": "padLeft",
                      "color": "hsl(352, 70%, 50%)",
                      "loc": 53341
                    },
                    {
                      "name": "padRight",
                      "color": "hsl(321, 70%, 50%)",
                      "loc": 11027
                    },
                    {
                      "name": "sanitize",
                      "color": "hsl(348, 70%, 50%)",
                      "loc": 23790
                    },
                    {
                      "name": "ploucify",
                      "color": "hsl(272, 70%, 50%)",
                      "loc": 59647
                    }
                  ]
                },
                {
                  "name": "misc",
                  "color": "hsl(90, 70%, 50%)",
                  "children": [
                    {
                      "name": "whatever",
                      "color": "hsl(19, 70%, 50%)",
                      "children": [
                        {
                          "name": "hey",
                          "color": "hsl(273, 70%, 50%)",
                          "loc": 165364
                        },
                        {
                          "name": "WTF",
                          "color": "hsl(26, 70%, 50%)",
                          "loc": 168633
                        },
                        {
                          "name": "lol",
                          "color": "hsl(27, 70%, 50%)",
                          "loc": 198337
                        },
                        {
                          "name": "IMHO",
                          "color": "hsl(168, 70%, 50%)",
                          "loc": 180792
                        }
                      ]
                    },
                    {
                      "name": "other",
                      "color": "hsl(23, 70%, 50%)",
                      "loc": 143466
                    },
                    {
                      "name": "crap",
                      "color": "hsl(267, 70%, 50%)",
                      "children": [
                        {
                          "name": "crapA",
                          "color": "hsl(13, 70%, 50%)",
                          "loc": 31726
                        },
                        {
                          "name": "crapB",
                          "color": "hsl(69, 70%, 50%)",
                          "children": [
                            {
                              "name": "crapB1",
                              "color": "hsl(328, 70%, 50%)",
                              "loc": 125712
                            },
                            {
                              "name": "crapB2",
                              "color": "hsl(136, 70%, 50%)",
                              "loc": 2401
                            },
                            {
                              "name": "crapB3",
                              "color": "hsl(37, 70%, 50%)",
                              "loc": 100915
                            },
                            {
                              "name": "crapB4",
                              "color": "hsl(3, 70%, 50%)",
                              "loc": 94682
                            }
                          ]
                        },
                        {
                          "name": "crapC",
                          "color": "hsl(333, 70%, 50%)",
                          "children": [
                            {
                              "name": "crapC1",
                              "color": "hsl(122, 70%, 50%)",
                              "loc": 149028
                            },
                            {
                              "name": "crapC2",
                              "color": "hsl(44, 70%, 50%)",
                              "loc": 145885
                            },
                            {
                              "name": "crapC3",
                              "color": "hsl(86, 70%, 50%)",
                              "loc": 61279
                            },
                            {
                              "name": "crapC4",
                              "color": "hsl(354, 70%, 50%)",
                              "loc": 137905
                            },
                            {
                              "name": "crapC5",
                              "color": "hsl(227, 70%, 50%)",
                              "loc": 93027
                            },
                            {
                              "name": "crapC6",
                              "color": "hsl(238, 70%, 50%)",
                              "loc": 134632
                            },
                            {
                              "name": "crapC7",
                              "color": "hsl(273, 70%, 50%)",
                              "loc": 93320
                            },
                            {
                              "name": "crapC8",
                              "color": "hsl(355, 70%, 50%)",
                              "loc": 44851
                            },
                            {
                              "name": "crapC9",
                              "color": "hsl(281, 70%, 50%)",
                              "loc": 116536
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }

        return ( 
            <Paper elevation={3} style={this.props.style}>
                <Typography variant="h5">Contributors</Typography>
                <div style={{height: 350}}>
                    <ResponsiveTreeMap
                        root={root.root}
                        height={350}
                        identity="name"
                        value="loc"
                        leavesOnly={true}
                        innerPadding={3}
                        outerPadding={3}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        label="loc"
                        labelFormat=".0s"
                        labelSkipSize={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
                        colors={{ scheme: 'purple_blue_green' }}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={11}
                    />
                </div>
            </Paper>
         );
    }
}
 
export default Contributors;