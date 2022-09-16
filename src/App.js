import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import CountryItem from './components/CountryItem/CountryItem'
import Autocomplete from './components/Autocomplete/Autocomplete'
import CountriesHome from './components/CountriesHome/CountriesHome'

function App() {
	return (<BrowserRouter>
			<Routes>
				<Route path="/country" element={<CountriesHome/>}/>
				<Route path="/country/:name" element={<CountryItem/>}/>
				<Route path="/autocomplete" element={<Autocomplete/>}/>
				<Route path="*" element={<Navigate to='/country'/>}/>
			</Routes>
		</BrowserRouter>)
}

export default App
