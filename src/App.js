import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './pages/Hero'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='' element={<Hero />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
