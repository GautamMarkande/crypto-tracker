import React, { useEffect, useState } from 'react'
import '../Dashboard/Dashboard.css'
import TabComponent from './TabComponent'
import axios from 'axios'
import Search from '../../components/Search/Search'
import PaginationControlled from '../../components/Common/Pagination/PaginationControlled'
function Dashboard() {
  const [coins,setcoins] = useState([])
  const [search,setsearch] = useState('')
  const [filterCoin,setfilterCoin]=useState([])
  const [paginatedCoin,setpaginatedCoin] = useState([])
  const [page, setPage] = useState(1);
  const handlePageNumFunc = (event, value) => {
    setPage(value);
    let firstIndex = (value-1)*10;
    let lastIndex = firstIndex + 10;
    const OnePageData = coins.slice(firstIndex,lastIndex);
    setpaginatedCoin(OnePageData)
  };
  useEffect(()=>{
     var filterData = coins;
     filterData = coins.filter((coin)=>(
      coin.name.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join(""))||(coin.symbol.toLowerCase().split(" ").join("").includes(search.toLowerCase().split(" ").join("")))
     ))
     setfilterCoin(filterData)
  },[coins, search])
  useEffect(()=>{
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en'
      axios.get(url)
      .then((response)=>{
        console.log(response)
        setcoins(response.data)
        setfilterCoin(response.data)
        const OnePageData = response.data.slice(0,10);
        setpaginatedCoin(OnePageData)
        console.log(coins)
      })
     .catch(Error=>{
      console.log(Error)
     })
  },[])
  return (
    <div>
      <Search search={search} setsearch={setsearch}/>
      <TabComponent coins={!search?paginatedCoin:filterCoin}/>
      {!search&&<PaginationControlled totNumOfpages={parseInt(coins.length/10)} handleChange={handlePageNumFunc} page={page}/>}
    </div>
  )
}

export default Dashboard
