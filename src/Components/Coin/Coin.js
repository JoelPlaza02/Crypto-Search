import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, marketCapRank }) => {

  return (
      <>
      <div className='container'>
      <tr className='coinRow'>
      <td data-label='Coin'><img src={image} alt='crypto coin' className='coinImage'></img></td>
      <td className='name' data-label='Name'>{name}</td>
      <td className='symbol' data-label='Symbol'>{symbol.toUpperCase()}</td>
      <td data-label='Price'>{price.toLocaleString()}</td>
      <td data-label='Market Cap Rank'>{marketCapRank}</td>
      {
          (priceChange < 0) ? 
          (<td data-label='Price Change Percentage' className='loss'>{priceChange.toFixed(2)}%</td>) :
          (<td data-label='Price Change Percentage' className='gain'>+{priceChange.toFixed(2)}%</td>)
      }
      <td data-label='Market Cap' className='marketCap'>{marketCap.toLocaleString()}</td>
      <td data-label='Volume' className='volume'>{volume.toLocaleString()}</td>
      </tr>
      </div>
      </>
  );
};

export default Coin;