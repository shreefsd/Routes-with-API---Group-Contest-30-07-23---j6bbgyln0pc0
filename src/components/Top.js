import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
    useEffect(() => {
        fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10')
        .then((resp) => resp.json)
        .then((data) => {
            setCryptoArr(data.data);
        })
        .catch((error) => {
        console.error(error);
      });
    },[]);

    if (!cryptoArr || cryptoArr.length === 0) {
        return <div className='top-container'>Loading...</div>;
    }
    
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
                {cryptoArr.map((ele) => (
                <div className='coin-container'>
                    <p className='rank-para'>Rank #{ele.rank}</p>
                    <h3 className='coin-symbol'>{ele.name} ({ele.symbol})</h3>
                    <p className='price-para'>Price: {ele.price_usd}</p>
                </div>
                ))};
            </div>
        </div>
    )
}

export default Top;
