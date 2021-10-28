// import libaries
import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
 } from 'react-router-dom';

// import components
import Nav from './components/Nav';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';

function App() {

  const[user, setUser] = useState(false);

  return (
    <div className='app'>
      <Router>
      <Nav user={user}/> 
      <Header /> 
      <HowItWorks />
      <Mission />
      <AboutUs />
      </Router>
    </div>
  );
}

export default App;
