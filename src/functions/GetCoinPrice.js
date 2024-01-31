import axios from "axios";
export const GetCoinPrice=(id,days,PriceType)=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily&precision=2`;
    const myData = axios.get(url,{crossDomain:true})
    .then((response)=>{
        return response.data[PriceType];
    })
    .catch((Error)=>{
        console.log("error from Get info price",Error);
    })
    return myData;
}