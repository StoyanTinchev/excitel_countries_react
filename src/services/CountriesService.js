import axios from 'axios'

export async function getCountries(setCountries, setLoading) {
	setLoading(true)
	try {
		setCountries((await axios
			.get(`/countries`)).data)
		setLoading(false)
	} catch (error) {
		console.log(error)
		window.alert(`When loading countries, an error occurred: ${error}`)
		setLoading(false)
	}
}

export async function getCountriesWithSearch(countryName, setCountries, setLoading) {
	setLoading(true)
	try {
		setCountries((await axios
			.get(`/countries/${countryName}`)).data)

		setLoading(false)
	} catch (error) {
		console.log(error)
		window.alert(`When searching for a country, an error occurred: ${error}`)
		setLoading(false)
	}
}

export async function getCountryByName(countryName, setCountry, setLoading) {
	setLoading(true)
	try {
		const countries = (await axios
			.get(`/countries/${(countryName)}`)).data

		const country = countries.find(country => country.name === countryName)

		if (!country) {
			window.alert(`Country not found`)
			setLoading(false)
			return
		}
		setCountry(country)
		setLoading(false)
	} catch (error) {
		console.log(error)
		window.alert(`Country not found`)
		setLoading(false)
	}
}
