import React, { useCallback, useEffect, useState } from 'react'
import SelectCoin from '../../components/Coins/LineChart/SelectCoins/SelectCoin'
import Get200Coins from '../../functions/Get200Coins'
import SelectDays from '../../components/Coins/LineChart/SelectDays/SelectDays'
import '../Compare/Compare.css'
import { GetCoinPrice } from '../../functions/GetCoinPrice'
import { GetCoinData } from '../../functions/GetCoinData'
import ConvertObject from '../../functions/ConvertObject'
import List from '../Dashboard/List/List'
import CoinInfo from '../../components/Coins/CoinInfo/CoinInfo'
import { SettingChartData } from '../../functions/SettingChartData'
import LineChart from '../../components/Coins/LineChart/LineChart'
function Compare() {
    const [Crypto1, setCrypto1] = useState("bitcoin")
    const [Crypto2, setCrypto2] = useState("ethereum")
    const [PriceType, setPriceType] = useState('prices')
    // const [Allcoins, setAllcoins] = useState([])
    const [coin1Data, setcoin1Data] = useState()
    const [coin2Data, setcoin2Data] = useState()
    const [ChartData, setChartData] = useState({})
    const [days, setdays] = useState(30)
    const [isLoading, setisLoading] = useState(true)

    // useEffect(() => {
    //     (async function getCoin() {
    //         const coins = await Get200Coins();
    //         if (coins) {
    //             setisLoading(false)
    //             console.log("true", coins)
    //             setAllcoins(coins)
    //         }
    //     })()
    // }, [])

    // async function getCoin() {
    //     const coins = await Get200Coins();
    //     if (coins) {
    //         setisLoading(false)
    //         console.log("true", coins)
    //         setAllcoins(coins)
    //     }
    // }

    // useEffect(() => {
    //     setisLoading(true)
    //     (async function getIntialData() {
    //         const price1Data = await GetCoinData(Crypto1)
    //         const price2Data = await GetCoinData(Crypto2)
    //         const price1 = await GetCoinPrice(Crypto1, days, "prices")
    //         const price2 = await GetCoinPrice(Crypto2, days, "prices")
    //         price1Data && ConvertObject(setcoin1Data, price1Data)
    //         price2Data && ConvertObject(setcoin2Data, price2Data)
    //         console.log(coin1Data)
    //         console.log(coin2Data)
    //         console.log(price1)
    //         console.log(price2)
    //         if (price1?.length > 0 && price2?.length > 0) {
    //             SettingChartData(setChartData, price1, price2)
    //         }
    //         setisLoading(false)
    //     })()
    // }, [])

    // async function getIntialData() {
    //     const price1Data = await GetCoinData(Crypto1)
    //     const price2Data = await GetCoinData(Crypto2)
    //     price1Data && ConvertObject(setcoin1Data, price1Data)
    //     price2Data && ConvertObject(setcoin2Data, price2Data)
    //     console.log(coin1Data)
    //     console.log(coin2Data)
    //     const price1 = await GetCoinPrice(Crypto1, days, "prices")
    //     const price2 = await GetCoinPrice(Crypto2, days, "prices")
    //     console.log(price1)
    //     console.log(price2)
    //     if (price1?.length > 0 && price2?.length > 0) {
    //         SettingChartData(setChartData, price1, price2)
    //     }
    //     setisLoading(false)
    // }
    useEffect(() => {
        getData()
    }, [])
   
    
  
   async function getData() {
    setisLoading(true);
    const data1 = await GetCoinData(Crypto1);
    if (data1) {
        const data2 = await GetCoinData(Crypto2)
        ConvertObject(setcoin1Data, data1)
        if (data2) {
            ConvertObject(setcoin2Data, data2);
            const price1 = await GetCoinPrice(Crypto1, days, PriceType)
            const price2 = await GetCoinPrice(Crypto2, days, PriceType)
            SettingChartData(setChartData, price1, price2)
            console.log(ChartData);
            console.log(price1)
            console.log(price2)
            setisLoading(false)
        }
    }
}
    const handleChangeCrypto = async (event, isCrypto1) => {
        setisLoading(true)
        if (isCrypto1) {
            setCrypto1(event.target.value)
            console.log(event.target.value)
            const price1Data = await GetCoinData(event.target.value)
            if (price1Data) {
                ConvertObject(setcoin1Data, price1Data)
                setisLoading(false)
            }
            // const price1 = await GetCoinPrice(event.target.value, days, PriceType)
            // const price2 = await GetCoinPrice(Crypto2, days, PriceType)
            // if(price1?.length>0&&price2?.length>0){
            //     SettingChartData(setChartData, price1, price2)
            // }
        } else {
            setCrypto2(event.target.value)
            console.log(event.target.value)
            const price2Data = await GetCoinData(event.target.value)
            if (price2Data) {
                ConvertObject(setcoin2Data, price2Data)
                setisLoading(false)
            }
            // const price2 = await GetCoinPrice(event.target.value, days, PriceType)
            // const price1 = await GetCoinPrice(Crypto1, days, PriceType)
            // if(price1?.length>0&&price2?.length>0){
            //     SettingChartData(setChartData, price1, price2)
            // }
        }
        const price2 = await GetCoinPrice(Crypto2, days, PriceType)
        const price1 = await GetCoinPrice(Crypto1, days, PriceType)
        if(price1?.length>0&&price2?.length>0){
            SettingChartData(setChartData, price1, price2)
        }
    }
    const handleDaysChange = async (event) => {
        setdays(event.target.value);
        if (Crypto1 && Crypto2) {
            const prices1 = await GetCoinPrice(Crypto1, days, PriceType);
            const prices2 = await GetCoinPrice(Crypto2, days, PriceType);
            console.log(prices1, prices2);
            if (prices1?.length > 0 && prices2?.length > 0) {
                SettingChartData(setChartData, prices1, prices2)
            }
        }
    };
    return (
        <div className='ComparePageContainer'>
            <div className="selectBoxesContainer">
                {<SelectCoin handleChangeCrypto={handleChangeCrypto} Crypto1={Crypto1} Crypto2={Crypto2} />}
                {/* {Allcoins && <SelectCoin Allcoins={Allcoins}  handleChangeCrypto={handleChangeCrypto} isCrypto1={false} />} */}
                <SelectDays Days={days} handleDaysChange={handleDaysChange} noP={true} />
            </div>
            <div className='listContsinerCoinPage'>
                <List coin={coin1Data} />
            </div>
            <div className='listContsinerCoinPage'>
                <List coin={coin2Data} />
            </div>
            { <LineChart ChartData={ChartData} PriceType={PriceType} multiAxis={true} />}
            <CoinInfo Heading={coin1Data?.name} desc={coin1Data?.desc} />
            <CoinInfo Heading={coin2Data?.name} desc={coin2Data?.desc} />

        </div >
    )
}

export default Compare
