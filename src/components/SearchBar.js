import React, { useCallback, useState } from 'react';

import { TopBar } from '@shopify/polaris';

const SearchBar = (props) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value) => {
        setSearchValue(value);
        props.setSearchTerm(value);
        setIsSearchActive(value.length > 0);
    }, []);


    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
            showFocusBorder
        />
    );

    return (
        <TopBar
            showNavigationToggle
            //   userMenu={userMenuMarkup}
            searchResultsVisible={isSearchActive}
            searchField={searchFieldMarkup}
            //   searchResults={searchResultsMarkup}
            onSearchResultsDismiss={handleSearchResultsDismiss}
        //   onNavigationToggle={handleNavigationToggle}
        />
    );
}

export default SearchBar;