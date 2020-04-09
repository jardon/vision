import React, { Component } from 'react';
import Repository from './Repository'
import Search from './Search'
import axios from 'axios';


class Dashboard extends Component {
    state = { 
        data: "No data loaded",
        input: ""
     }

    updateInput = (field) => this.setState({input: field});

    getData = async (textField) => {
        this.setState({input: textField});
        let response = await axios.get('https://api.github.com/repos/' + this.state.input);
        this.setState({data: response.data});
    };

    render() { 
        return ( 
            <React.Fragment>
                <Search  search={this.getData.bind(this)} updateInput={this.updateInput.bind(this)}/>
                <Repository data={this.state.data}/>
            </React.Fragment>
         );
    }
}
 
export default Dashboard;

// class Parent extends Component{
//     parentFunction=(data_from_child)=>{
//         console.log(data_from_child);
//     }
    
//     render(){
//         return(
//             <div>      
//                 <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
//             </div>
//         );
//     }
// }
// export default Parent;