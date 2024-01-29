import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/CoinPage.css'
import ConvertObject from '../functions/ConvertObject'
import List from './Dashboard/List/List'
import CoinInfo from '../components/Coins/CoinInfo/CoinInfo'
import { GetCoinData } from '../functions/GetCoinData'
import { GetCoinPrice } from '../functions/GetCoinPrice'
import LineChart from '../components/Coins/LineChart/LineChart'
import SelectDays from '../components/Coins/LineChart/SelectDays/SelectDays'
import { SettingChartData } from '../functions/SettingChartData'
import TogglePriceType from '../components/Coins/PriceType/PriceType'
function CoinPage() {
    const { id } = useParams()
    const [CoinData, setCoinData] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [days,setdays] = useState(30)
    const [ChartData,setChartData] = useState()
    const [PriceType, setPriceType] = useState('prices');
    useEffect(() => {
        setisLoading(true)
        async function getData(){
            if(id){
                const Coindata = await GetCoinData(id)
                if(Coindata){
                    ConvertObject(setCoinData,Coindata)
                    setisLoading(false)
                }
            }
            setisLoading(false)
        }
            getData()
    }, [])
    useEffect(()=>{
        async function getCoinprice(){
            setisLoading(true)
            if(id){
                const prices = await GetCoinPrice(id,days,PriceType);
                console.log(prices);
                if(prices?.length>0){
                    setisLoading(false)
                 SettingChartData(setChartData,prices)
                }
            }
            setisLoading(false)
        }
        getCoinprice()
    },[])
    
    // async function getData(){
    //     if(id){
    //         const Coindata = await GetCoinData(id)
    //         if(Coindata){
    //             ConvertObject(setCoinData,Coindata)
    //             setisLoading(false)
    //         }
    //     }
    // }
    async function getCoinprice(){
        setisLoading(true)
        if(id){
            const prices = await GetCoinPrice(id,days,PriceType);
            console.log(prices);
            if(prices?.length>0){
                setisLoading(false)
             SettingChartData(setChartData,prices)
            }
        }

    }

    
  const  handleDaysChange = async (event) => {
    setisLoading(true)
    setdays(event.target.value);
    const prices = await GetCoinPrice(id,event.target.value,PriceType);
    if(id){
        console.log(prices);
        if(prices.length>0){
            setisLoading(false)
         SettingChartData(setChartData,prices)
        }
    }
  };
  

  const handleToggleChangePrice = async (event, newType) => {
    setisLoading(true)
      setPriceType(newType);
      console.log(newType)
      if(id){
        const prices = await GetCoinPrice(id,days,newType);
        console.log(prices);
        if(prices?.length>0){

         SettingChartData(setChartData,prices)
         setisLoading(false)
        }
    }
  };
       return( 
       <div>
            {
                isLoading ? <h1>Loading...</h1>
                    : <div className='ListWrepperForInfoCoin'>
                    <div className='listContsinerCoinPage'>
                      <List coin={CoinData} />
                    </div>
                    <div className='graph'>
                        <SelectDays Days={days} handleDaysChange={handleDaysChange}/>
                        <div className='toggle-pricetype-btn'>
                            <TogglePriceType PriceType={PriceType} handleToggleChangePrice={handleToggleChangePrice}/>
                        </div>
                        {ChartData&&<LineChart chartData={ChartData} PriceType={PriceType} multiAxis={false}/>}
                    </div>
                        <CoinInfo Heading={CoinData?.name} desc={CoinData?.desc}/>
                    </div>
            }
            {/* <List coin={CoinData}/> */}
        </div>
    )
}

export default CoinPage
