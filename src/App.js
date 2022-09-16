import './App.css'
import CountriesHome from './components/CountriesHome/CountriesHome'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CountryItem from './components/CountryItem/CountryItem'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:name" element={<CountryItem/>}/>
				<Route path="/*" element={<CountriesHome />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
