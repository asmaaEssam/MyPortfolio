import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
