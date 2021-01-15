import React from 'react';
import { TextField } from '@material-ui/core';


const SearchBar = (props) => {

    return (
        <>
            <TextField
                onChange={(event) => props.setSearchTerm(event.target.value)}
            ></TextField>
        </>
    )
};

export default SearchBar;