import React from 'react';
import './CoinTable.css';
import Coin from '../Coin/Coin';
import { Link } from 'react-router-dom';
import Coins from '../routes/Coins';


const CoinTable = ({ searchResults }) => {

  return (
    <>
      <table className='coinTable'>
        <thead className='heading'>
          <tr style={{display: 'flex'}}>
              <th className='label'>Coin</th>
              <th className='label'>Name</th>
              <th className='label'>Symbol</th>
              <th className='label'>Price</th>
              <th className='label'>Mkt Cap Rank</th>
              <th className='label'>24hr</th>
              <th className='label'>Mkt Cap</th>
              <th className='label'>Volume</th>
          </tr>
        </thead>
        <tbody>
              {searchResults.map((coin) => {
              return (
                <Link style={{textDecoration: 'none'}} to={`/coin/${coin.id}`} element={<Coins />} key={coin.id}>
              <Coin 
                name = {coin.name} 
                image = {coin.image}
                symbol = {coin.symbol}
                price = {coin.current_price}
                volume = {coin.total_volume}
                priceChange = {coin.price_change_percentage_24h}
                marketCap = {coin.market_cap}
                marketCapRank = {coin.market_cap_rank}
              />
              </Link>
            )
         })}
        </tbody>
      </table>
    </>
  );
};

export default CoinTable;