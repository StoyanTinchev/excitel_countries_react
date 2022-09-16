import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getCountryByName} from '../../services/CountriesService'
import BootstrapSpinner from '../BootstrapSpinner/BootstrapSpinner'
import './CountryItem.css'

function CountryItem(
	{
		name,
		capitalName,
		population,
		region,
		subregion,
		code,
		flag,
	}) {

	const paramCountryName = useParams()
	const [country, setCountry] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (name === undefined || name.isEmpty) {
			getCountryByName(paramCountryName.name ?? '', setCountry, setLoading)
		}
	}, [])

	return (
		loading ? <BootstrapSpinner/> :
			<div className="countryInfoLayout">
				<img src={flag ?? country.flag} alt="Not found"></img>
				<div className="countryInfo">
					<span><strong>Name: </strong>{name ?? country.name}</span>

					<span><strong>Capital: </strong>{capitalName ?? country.capitalName}</span>

					<span><strong>Population: </strong>{population ?? country.population}</span>

					<span><strong>Region: </strong>{region ?? country.region}</span>

					<span><strong>Sub-region: </strong>{subregion ?? country.subregion}</span>

					<span><strong>Code: </strong>{code ?? country.code}</span>
				</div>
			</div>
	)
}

export default CountryItem