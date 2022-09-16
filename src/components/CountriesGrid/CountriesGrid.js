import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CountriesGrid.css'
import BootstrapSpinner from '../BootstrapSpinner/BootstrapSpinner'


function CountriesGrid({countries, setCountries, loading}) {
	const navigateToCountry = useNavigate()
	const [timer, setTimer] = useState()

	const sortCountries = (e) => {
		return setCountries([...countries.sort((a, b) => {
			return a[e].localeCompare(b[e])
		})])
	}

	const onCountryMouseDown = (event, countryName) => {
		const divLoader = document.createElement('div')
		divLoader.className += 'loader'

		// if (event.currentTarget.nodeName === 'DIV') {
		// 	event.currentTarget.appendChild(divLoader)
		// }
		// else {
		// 	event.currentTarget.appendChild(divLoader)
		// }
		event.currentTarget.appendChild(divLoader)

		setTimer(setTimeout(() => {
			navigateToCountry(`${countryName}`)
		}, 2 * 1000))
	}

	const onCountryMouseUp = (event) => {
		const loader = document.getElementsByClassName('loader').item(0)

		if (loader) {
			event.currentTarget.removeChild(loader)
			clearTimeout(timer)
		}
	}

	return (
		loading ?
			<BootstrapSpinner/>
			:
			<div className="countriesList">
				<div className="countriesListHeader">
					<span onClick={() => sortCountries('name')}>Name</span>
					<span onClick={() => sortCountries('capitalName')}>Capital</span>
				</div>
				{
					countries.length !== 0 ?
						countries?.map((country) => (
							<div
								className="country"
								key={country.name}
								onMouseDown={(event) => onCountryMouseDown(event, country.name)}
								onMouseUp={(event) => onCountryMouseUp(event)}>

								<div className="countriesGrid">
									<span>{country.name}</span>
									<span>{!country.capitalName ? '-' : country.capitalName}</span>
								</div>
							</div>
						)) :
						<span>No countries found</span>
				}
			</div>
	)
}

export default CountriesGrid