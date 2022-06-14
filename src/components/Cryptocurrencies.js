import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import '../styles/cryptocurrencies.css'



const Cryptocurrencies = ({simplified}) => {
  const count = (simplified)?10:50
  const {data,isFetching} = useGetCryptosQuery()

  const [cryptoCoins,setCryptoCoins] = useState(data?.data?.coins)
  

  
  return ( 
    <div className="main-container-list">
      {cryptoCoins.map(coin => (

        <Link to={`/cryptocurrencies/${coin.uuid}`} key={coin.id}>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{coin.rank} {coin.name}</h5>
            <img className="card-title" src={coin.iconUrl} alt='titleLogo' style={{width:'20px',height:'20px'}}/>
            <h6 className="card-subtitle mb-2 text-muted">{coin.symbol}</h6>
            <p className="card-text">Price {millify(coin.price)}</p>
            <p className="card-text">Price {millify(coin.marketCap)}</p>
            <p className="card-text">Price {millify(coin.change)}</p>
            
          </div>
        </div>
      </Link>
      )

      )}
      working
    </div>
  );
};

export default Cryptocurrencies;
