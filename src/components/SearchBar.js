import React from 'react';

const SearchBar = (props) => {

    return (
        <>
            <div className='col col-sm-4 searchBar'>
                <input className='form-control'
                    placeholder="Type to search ..."
                    onChange={(event) => props.setSearchTerm(event.target.value)}></input>
            </div>
        </>
    )
};

export default SearchBar;