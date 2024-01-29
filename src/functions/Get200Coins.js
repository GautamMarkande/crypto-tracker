import axios from "axios"

function Get200Coins() {
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en';
  const myCoin = axios.get(url)
  .then((response)=>{
     return response.data;
  })
  .catch((error)=>{
   console.log("Error from Get 200 Coins", error)
  })
  return myCoin;
}

export default Get200Coins
