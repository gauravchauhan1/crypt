import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
const Home = ({className}) => {
  const {data,isFetching} = useGetCryptosQuery()
  console.log()
  const globalStats = data?.data?.stats
  return ( 
  <>
    {
      !isFetching && (
        <div className={className} >
    
    Total crypto currency  {millify(globalStats.total)}
    <br/>

    Total market cap {millify(globalStats.totalMarketCap)}
    <br/>
    Total volume {millify(globalStats.total24hVolume)}
    <br/>
    Total coins {millify(globalStats.totalCoins)}
    <br/>
    Total Markets {millify(globalStats.totalMarkets)}
    <br/>
    Total Exchanges {millify(globalStats.totalExchanges)}

    <div>
      <h1>top 10 cryptoCoins</h1>
      <Cryptocurrencies simplified={true}/>
    </div>

</div>
      )
    }
    
  </>
    
  );
};

export default Home;
