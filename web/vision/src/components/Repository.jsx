import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Repository extends Component {

    render() { 


        if (this.props.data == "No data loaded")
            return (  
                <div>
                    <pre>{this.props.data}</pre>
                </div>
            );
        else
            return (
                <div>
                    <span><br></br>Name: {this.props.data.name}<br></br> </span>
                    <span>Id: {this.props.data.id}<br></br> </span>
                    <span>Owner: {this.props.data.owner.login}<br></br> </span>
                </div>
            );
    }
}

export default Repository;

// class Child1 extends Component{
//     childFunction=(e)=>{
//         e.preventDefault();
//         this.props.functionCallFromParent("Hello From Child1");
//     }
//     render(){
//         return(
//             <div>   
//                 <button onClick={this.childFunction.bind(this)}>Click</button>
//             </div>
//         );
//     }
// }
// export default Child1;