import React, {useEffect, useState} from 'react'
import {getCountries, getCountriesWithSearch} from '../../services/CountriesService'
import SearchBar from '../SearchBar/SearchBar'
import CountriesGrid from '../CountriesGrid/CountriesGrid'
import './CountriesHome.css'
import Pager from '../Pager/Pager'

function CountriesHome() {
	const [countries, setCountries] = useState([])
	const [pagerCountries, setPagerCountries] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getCountries(setCountries, setLoading)
	}, [])

	const setSearch = (search) => {
		if (search === '') {
			getCountries(setCountries, setLoading)
			return
		}
		getCountriesWithSearch(search, setCountries, setLoading)
	}

	return (
		<div className="countriesHome">

			<SearchBar setSearch={setSearch}/>

			<CountriesGrid
				countries={pagerCountries}
				setCountries={setPagerCountries}
				loading={loading}/>

			<Pager
				initialCountries={countries}
				setCountries={setPagerCountries}
			/>
		</div>
	)
}

export default CountriesHome