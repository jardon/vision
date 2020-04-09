import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

class Search extends Component {

    render() { 
        return ( 
        <form noValidate autoComplete="off">
            <TextField id="filled-basic" label="Search Repositories" variant="filled" onChange={(e) => this.props.updateInput(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={() => this.props.search()}>Search</Button>
        </form>
         );
    }
}
 
export default Search;

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