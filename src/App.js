import React from 'react'
import './App.css';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';


//page components
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//Router
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
