import React, { useEffect, useState } from 'react'
import '../Dashboard/Dashboard.css'
import TabComponent from './TabComponent'
import axios from 'axios'
import Grid from './Grid/Grid'
function Dashboard() {
  const [coins,setcoins] = useState([])
  useEffect(()=>{
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en'
      axios.get(url)
      .then((response)=>{
        console.log(response)
        setcoins(response.data)
        console.log(coins)
      })
     .catch(Error=>{
      // console.log(Error)
     })
  },[])
  return (
    <div>
      <TabComponent coins={coins}/>
    </div>
  )
}

export default Dashboard
