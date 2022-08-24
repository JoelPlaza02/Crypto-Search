import React from 'react';
import './CoinSearch.css';

const CoinSearch = ({ coins, setSearchResults }) => {
  const handleSearchSubmit = (e) => {
      e.preventDefault();
  }

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(coins)
      
    const filteredCoin = coins.filter(coin => coin.name.includes(e.target.value))

    setSearchResults(filteredCoin)
  }

  return (
    <>
      <form className='CoinInputForm' onSubmit={handleSearchSubmit}>
          <input type='text' className='coinInput' onChange={handleSearchChange}  />
      </form>
    </>
  );
};

export default CoinSearch;