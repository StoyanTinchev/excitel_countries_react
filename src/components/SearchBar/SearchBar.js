import React from 'react'
import './SearchBar.css'

function SearchBar({setSearch}) {
	const debounce = (func, delay) => {
		let debounceTimer
		return function () {
			const context = this
			const args = arguments
			clearTimeout(debounceTimer)
			debounceTimer = setTimeout(() => func.apply(context, args), delay)
		}
	}

	return (
		<div className="searchBar">
			<input
				placeholder="Find a country"
				className="searchBarInput"
				type="text"
				onChange={debounce((e) => setSearch(e.target.value), 500)}
				autoFocus>
			</input>
		</div>
	)
}

export default SearchBar