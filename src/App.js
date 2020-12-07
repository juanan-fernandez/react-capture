import React from 'react'
import './App.css';
import GlobalStyle from './components/GlobalStyle'

//page components
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <AboutUs />
    </div>
  );
}

export default App;
