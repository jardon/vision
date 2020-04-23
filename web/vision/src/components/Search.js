import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = props => {
    return ( 
    <form noValidate autoComplete="off">
        <TextField id="filled-basic" label="Search Repositories" variant="filled" onChange={(e) => props.updateInput(e.target.value)}/>
        <Button variant="contained" color="primary" onClick={() => props.search()}>Search</Button>
    </form>
    // <form onSubmit={() => props.search()}>
    //     <InputBase
    //         placeholder="Search Repositories…"
    //         onChange={(e) => props.updateInput(e.target.value)}
    //     />
    //     <IconButton>
    //         <SearchIcon type="submit"  />
    //     </IconButton>
    // </form>
        );
};
 
export default Search;
