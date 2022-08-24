import React, { useState, useEffect } from 'react';
import { getCoins } from '../api/api';
import Navbar from '../Navbar/Navbar';
import CoinSearch from '../CoinSearch/CoinSearch';
import CoinTable from '../CoinTable/CoinTable';

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getCoins().then(json => {
      setCoins(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
}, []);

  return (
      <>
        <Navbar />
        <CoinSearch coins={coins} setSearchResults={setSearchResults} />
        <CoinTable searchResults={searchResults} />
      </>
  );
};

export default HomePage;