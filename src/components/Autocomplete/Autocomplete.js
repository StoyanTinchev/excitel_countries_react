import React, {useState} from 'react'
import {getCountriesWithSearch} from '../../services/CountriesService'
import SearchBar from '../SearchBar/SearchBar'
import BootstrapSpinner from '../BootstrapSpinner/BootstrapSpinner'
import CountryItem from '../CountryItem/CountryItem'
import './Autocomplete.css'

function Autocomplete() {
	const [countries, setCountries] = useState([])
	const [loading, setLoading] = useState(false)
	const [showSuggestions, setShowSuggestions] = useState(false)
	const [selectedCountry, setSelectedCountry] = useState(null)

	const setSearch = (search) => {
		if (search === '') {
			setShowSuggestions(false)
			return
		}
		getCountriesWithSearch(search, setCountries, setLoading)
		setShowSuggestions(true)
	}

	return (
		<div>
			<SearchBar setSearch={setSearch}/>
			{
				loading ?
					<BootstrapSpinner/>
					:
					showSuggestions ?
						countries?.map((country, index) => (
							index < 9 ?
								<div
									className="countriesSuggestions"
									key={country.name}
									onClick={() => {
										setSelectedCountry(country)
										setShowSuggestions(false)
									}
									}>
									<span>{country.name}</span>
								</div>
								: <></>
						))
						:
						selectedCountry ?
							<CountryItem
								name={selectedCountry.name}
								capitalName={selectedCountry.capitalName}
								population={selectedCountry.population}
								region={selectedCountry.region}
								subregion={selectedCountry.subregion}
								code={selectedCountry.code}
								flag={selectedCountry.flag}
								latLng={selectedCountry.latLng}/>
							:
							<></>
			}
		</div>
	)
}

export default Autocomplete