import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ResponsiveTreeMap } from '@nivo/treemap';
import CircularProgress from './Spinner';

class Contributors extends Component {
    
    render() {

      const { contributionData } = this.props.state;

      console.log(contributionData);

      let root = {
        "root": {
          "name": "nivo",
          "color": "hsl(4, 70%, 50%)",
          "children": [
            {
              "name": "viz",
              "color": "hsl(63, 70%, 50%)",
              "children": [
                {
                  "name": "stack",
                  "color": "hsl(126, 70%, 50%)",
                  "children": [
                    {
                      "name": "chart",
                      "color": "hsl(306, 70%, 50%)",
                      "loc": 28247
                    },
                    {
                      "name": "xAxis",
                      "color": "hsl(142, 70%, 50%)",
                      "loc": 22335
                    },
                    {
                      "name": "yAxis",
                      "color": "hsl(328, 70%, 50%)",
                      "loc": 160732
                    },
                    {
                      "name": "layers",
                      "color": "hsl(65, 70%, 50%)",
                      "loc": 71581
                    }
                  ]
                },
                {
                  "name": "pie",
                  "color": "hsl(240, 70%, 50%)",
                  "children": [
                    {
                      "name": "chart",
                      "color": "hsl(2, 70%, 50%)",
                      "children": [
                        {
                          "name": "pie",
                          "color": "hsl(7, 70%, 50%)",
                          "children": [
                            {
                              "name": "outline",
                              "color": "hsl(227, 70%, 50%)",
                              "loc": 130597
                            },
                            {
                              "name": "slices",
                              "color": "hsl(257, 70%, 50%)",
                              "loc": 172860
                            },
                            {
                              "name": "bbox",
                              "color": "hsl(329, 70%, 50%)",
                              "loc": 115843
                            }
                          ]
                        },
                        {
                          "name": "donut",
                          "color": "hsl(268, 70%, 50%)",
                          "loc": 110748
                        },
                        {
                          "name": "gauge",
                          "color": "hsl(101, 70%, 50%)",
                          "loc": 65775
                        }
                      ]
                    },
                    {
                      "name": "legends",
                      "color": "hsl(283, 70%, 50%)",
                      "loc": 18025
                    }
                  ]
                }
              ]
            },
            {
              "name": "colors",
              "color": "hsl(240, 70%, 50%)",
              "children": [
                {
                  "name": "rgb",
                  "color": "hsl(45, 70%, 50%)",
                  "loc": 158034
                },
                {
                  "name": "hsl",
                  "color": "hsl(51, 70%, 50%)",
                  "loc": 118952
                }
              ]
            },
            {
              "name": "utils",
              "color": "hsl(220, 70%, 50%)",
              "children": [
                {
                  "name": "randomize",
                  "color": "hsl(237, 70%, 50%)",
                  "loc": 42429
                },
                {
                  "name": "resetClock",
                  "color": "hsl(210, 70%, 50%)",
                  "loc": 81439
                },
                {
                  "name": "noop",
                  "color": "hsl(298, 70%, 50%)",
                  "loc": 179568
                },
                {
                  "name": "tick",
                  "color": "hsl(231, 70%, 50%)",
                  "loc": 47841
                },
                {
                  "name": "forceGC",
                  "color": "hsl(93, 70%, 50%)",
                  "loc": 127179
                },
                {
                  "name": "stackTrace",
                  "color": "hsl(310, 70%, 50%)",
                  "loc": 149813
                },
                {
                  "name": "dbg",
                  "color": "hsl(202, 70%, 50%)",
                  "loc": 85335
                }
              ]
            },
            {
              "name": "generators",
              "color": "hsl(182, 70%, 50%)",
              "children": [
                {
                  "name": "address",
                  "color": "hsl(330, 70%, 50%)",
                  "loc": 14831
                },
                {
                  "name": "city",
                  "color": "hsl(293, 70%, 50%)",
                  "loc": 35231
                },
                {
                  "name": "animal",
                  "color": "hsl(358, 70%, 50%)",
                  "loc": 65707
                },
                {
                  "name": "movie",
                  "color": "hsl(2, 70%, 50%)",
                  "loc": 165114
                },
                {
                  "name": "user",
                  "color": "hsl(234, 70%, 50%)",
                  "loc": 9718
                }
              ]
            },
            {
              "name": "set",
              "color": "hsl(171, 70%, 50%)",
              "children": [
                {
                  "name": "clone",
                  "color": "hsl(92, 70%, 50%)",
                  "loc": 25950
                },
                {
                  "name": "intersect",
                  "color": "hsl(65, 70%, 50%)",
                  "loc": 49212
                },
                {
                  "name": "merge",
                  "color": "hsl(48, 70%, 50%)",
                  "loc": 37355
                },
                {
                  "name": "reverse",
                  "color": "hsl(72, 70%, 50%)",
                  "loc": 178469
                },
                {
                  "name": "toArray",
                  "color": "hsl(357, 70%, 50%)",
                  "loc": 183751
                },
                {
                  "name": "toObject",
                  "color": "hsl(348, 70%, 50%)",
                  "loc": 119842
                },
                {
                  "name": "fromCSV",
                  "color": "hsl(76, 70%, 50%)",
                  "loc": 192322
                },
                {
                  "name": "slice",
                  "color": "hsl(30, 70%, 50%)",
                  "loc": 130825
                },
                {
                  "name": "append",
                  "color": "hsl(278, 70%, 50%)",
                  "loc": 122038
                },
                {
                  "name": "prepend",
                  "color": "hsl(112, 70%, 50%)",
                  "loc": 158293
                },
                {
                  "name": "shuffle",
                  "color": "hsl(180, 70%, 50%)",
                  "loc": 181810
                },
                {
                  "name": "pick",
                  "color": "hsl(255, 70%, 50%)",
                  "loc": 142391
                },
                {
                  "name": "plouc",
                  "color": "hsl(333, 70%, 50%)",
                  "loc": 108308
                }
              ]
            },
            {
              "name": "text",
              "color": "hsl(342, 70%, 50%)",
              "children": [
                {
                  "name": "trim",
                  "color": "hsl(112, 70%, 50%)",
                  "loc": 110545
                },
                {
                  "name": "slugify",
                  "color": "hsl(350, 70%, 50%)",
                  "loc": 169172
                },
                {
                  "name": "snakeCase",
                  "color": "hsl(76, 70%, 50%)",
                  "loc": 67678
                },
                {
                  "name": "camelCase",
                  "color": "hsl(325, 70%, 50%)",
                  "loc": 184027
                },
                {
                  "name": "repeat",
                  "color": "hsl(326, 70%, 50%)",
                  "loc": 3466
                },
                {
                  "name": "padLeft",
                  "color": "hsl(179, 70%, 50%)",
                  "loc": 20788
                },
                {
                  "name": "padRight",
                  "color": "hsl(336, 70%, 50%)",
                  "loc": 88992
                },
                {
                  "name": "sanitize",
                  "color": "hsl(314, 70%, 50%)",
                  "loc": 31090
                },
                {
                  "name": "ploucify",
                  "color": "hsl(71, 70%, 50%)",
                  "loc": 118709
                }
              ]
            },
            {
              "name": "misc",
              "color": "hsl(85, 70%, 50%)",
              "children": [
                {
                  "name": "whatever",
                  "color": "hsl(134, 70%, 50%)",
                  "children": [
                    {
                      "name": "hey",
                      "color": "hsl(169, 70%, 50%)",
                      "loc": 174629
                    },
                    {
                      "name": "WTF",
                      "color": "hsl(269, 70%, 50%)",
                      "loc": 62318
                    },
                    {
                      "name": "lol",
                      "color": "hsl(132, 70%, 50%)",
                      "loc": 119774
                    },
                    {
                      "name": "IMHO",
                      "color": "hsl(2, 70%, 50%)",
                      "loc": 30664
                    }
                  ]
                },
                {
                  "name": "other",
                  "color": "hsl(66, 70%, 50%)",
                  "loc": 77386
                },
                {
                  "name": "crap",
                  "color": "hsl(306, 70%, 50%)",
                  "children": [
                    {
                      "name": "crapA",
                      "color": "hsl(94, 70%, 50%)",
                      "loc": 76105
                    },
                    {
                      "name": "crapB",
                      "color": "hsl(207, 70%, 50%)",
                      "children": [
                        {
                          "name": "crapB1",
                          "color": "hsl(26, 70%, 50%)",
                          "loc": 151776
                        },
                        {
                          "name": "crapB2",
                          "color": "hsl(65, 70%, 50%)",
                          "loc": 28224
                        },
                        {
                          "name": "crapB3",
                          "color": "hsl(45, 70%, 50%)",
                          "loc": 64247
                        },
                        {
                          "name": "crapB4",
                          "color": "hsl(86, 70%, 50%)",
                          "loc": 84647
                        }
                      ]
                    },
                    {
                      "name": "crapC",
                      "color": "hsl(289, 70%, 50%)",
                      "children": [
                        {
                          "name": "crapC1",
                          "color": "hsl(316, 70%, 50%)",
                          "loc": 89237
                        },
                        {
                          "name": "crapC2",
                          "color": "hsl(230, 70%, 50%)",
                          "loc": 195099
                        },
                        {
                          "name": "crapC3",
                          "color": "hsl(139, 70%, 50%)",
                          "loc": 192408
                        },
                        {
                          "name": "crapC4",
                          "color": "hsl(283, 70%, 50%)",
                          "loc": 71665
                        },
                        {
                          "name": "crapC5",
                          "color": "hsl(162, 70%, 50%)",
                          "loc": 8558
                        },
                        {
                          "name": "crapC6",
                          "color": "hsl(121, 70%, 50%)",
                          "loc": 142023
                        },
                        {
                          "name": "crapC7",
                          "color": "hsl(271, 70%, 50%)",
                          "loc": 153957
                        },
                        {
                          "name": "crapC8",
                          "color": "hsl(37, 70%, 50%)",
                          "loc": 195978
                        },
                        {
                          "name": "crapC9",
                          "color": "hsl(298, 70%, 50%)",
                          "loc": 126028
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