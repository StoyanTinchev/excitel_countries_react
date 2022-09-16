import React from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CountriesGrid.css'
import BootstrapSpinner from '../BootstrapSpinner/BootstrapSpinner'


function CountriesGrid({countries, setCountries, loading}) {
	const navigateToCountry = useNavigate()

	const sortCountries = (e) => {
		return setCountries([...countries.sort((a, b) => {
			return a[e].localeCompare(b[e])
		})])
	}

	return (
		loading ?
				<BootstrapSpinner />
			: <section className="countriesList">
				<div className="countriesListHeader">
					<span onClick={() => sortCountries('name')}>Name</span>
					<span onClick={() => sortCountries('capitalName')}>Capital</span>
				</div>
				{
					countries?.map((country) => (
						<div
							key={country.name}
							className="country"
							onClick={() => navigateToCountry(country.name)}
							>

							<span>{country.name}</span>
							<span>{country.capitalName}</span>

						</div>
					))
				}
			</section>
	)
}

export default CountriesGrid