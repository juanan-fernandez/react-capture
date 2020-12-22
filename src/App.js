import React from 'react';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

//animation
import { AnimatePresence } from 'framer-motion';
//page components
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ScrollTop from './components/ScrollTop';



//Router
import { Route, Switch, useLocation } from 'react-router-dom';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<ScrollTop/>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/'>
						<AboutUs />
					</Route>
					<Route exact path='/work'>
						<OurWork />
					</Route>
					<Route path='/work/:id'>
						<MovieDetail />
					</Route>
					<Route path='/contact'>
						<ContactUs />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
