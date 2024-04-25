import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextParallaxContentExample from './Components/HomePage/HomePage'
import AboutPage from './Components/AboutPage/AboutPage';
import MenuPage from './Components/MenuPage/MenuPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TextParallaxContentExample />} />
        <Route path='/about-us' element={<AboutPage/>} />
        <Route path='/menu-page' element={<MenuPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
