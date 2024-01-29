import axios from "axios";
export const GetCoinData = (id)=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    const myData = axios.get(url)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("Error from coin data page",error)
    })
    return myData
}