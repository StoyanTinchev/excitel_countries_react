import React from 'react';
import './SearchBar.css';

function SearchBar({setSearch}) {
    return (
        <div className='searchBar'>
            <input
                placeholder='Find a country'
                className='searchBarInput'
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                autoFocus>
            </input>
        </div>
    );
}

export default SearchBar;