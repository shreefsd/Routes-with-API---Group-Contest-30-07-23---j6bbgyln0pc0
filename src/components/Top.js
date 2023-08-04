import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
    useEffect(() => {
        async function fetchData(){
         let info = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10')
         info = await info.json()
         setCryptoArr(info.data)
      }
      fetchData();
    },[]);
    
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
                {cryptoArr.map((ele,i) => (
                <div className='coin-container'key={i}>
                    <p className='rank-para'>Rank #{ele.rank}</p>
                    <h3 className='coin-symbol'>{ele.name} ({ele.symbol})</h3>
                    <p className='price-para'>Price: {ele.price_usd}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Top;
