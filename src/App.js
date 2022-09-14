import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/details/Details';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Components/details/Details.js" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App;
