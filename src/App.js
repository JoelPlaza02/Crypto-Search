import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Coins from './Components/routes/Coins';


function App() {

  return ( 
    <>
    <Routes>
      <Route exact path="/" element={<HomePage />} render={"https://joelplaza02.github.io/Crypto-Search/"} />
      <Route path="/coin" element={<Coins />}>
          <Route path=":coinId" element={<Coins />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;