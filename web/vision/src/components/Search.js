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
