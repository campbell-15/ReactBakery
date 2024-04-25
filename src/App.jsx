import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextParallaxContentExample from './Components/HomePage/HomePage'
import AboutPage from './Components/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TextParallaxContentExample />} />
        <Route path='/about-us' element={<AboutPage/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
