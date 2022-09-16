import './App.css'
import CountriesHome from './components/CountriesHome/CountriesHome'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CountryItem from './components/CountryItem/CountryItem'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CountriesHome/>}/>
				<Route path="/:name" element={<CountryItem/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
