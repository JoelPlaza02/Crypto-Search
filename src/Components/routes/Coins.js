import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';

import './Coins.css';

const Coins = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])


  return (
    <>
    <Link style={{ textDecoration: 'none' }} to="/" element={<HomePage />}>
       <Navbar />
       </Link>
        <div className='coinContainer'>
            <div className='content'>
                <h1>{coin.name}</h1>
            </div>
            <div className='content'>
                <div className='rank'>
                    <span className='rankBtn'>Rank # {coin.market_cap_rank}</span>
                </div>
                <div className='info'>
                    <div className='coinHeading'>
                        {coin.image ? <img src={coin.image.small} alt='' className='detailImg' /> : null}
                        <p>{coin.name}</p>
                        {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                        
                    </div>
                    <div className='coinPrice'>
                        {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                    </div>
                </div>
            </div>

            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th className='time'>1h</th>
                            <th className='time'>24h</th>
                            <th className='time'>7d</th>
                            <th className='time'>14d</th>
                            <th className='time'>30d</th>
                            <th className='time'>1yr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='content'>
                <div className='stats'>
                    <div className='left'>
                        <div className='row'>
                            <h4>24 Hour Low</h4>
                            {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                        </div>
                        <div className='row'>
                            <h4>24 Hour High</h4>
                            {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                           
                        </div>
                    </div>
                    <div className='right'>
                        <div className='row'>
                            <h4>Market Cap</h4>
                            {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                        </div>
                        <div className='row'>
                            <h4>Circulating Supply</h4>
                            {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                        </div>

                    </div>
                </div>
            </div>

            <div className='content'>
                <div className='about'>
                    <h3>About</h3>
                    <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                    </p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Coins;