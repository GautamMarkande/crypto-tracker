import React from 'react'
import '../Grid/Grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import CurrencyFormatter from '../../../functions/CurrencyFormeter';
import '../List/List.css'
import Tooltip from '@mui/material/Tooltip';
import ConvertIntoKBM from '../../../functions/ConvertIntoKBM';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
function List({ coin, id }) {
    console.log(coin)
    return (
        <Link to={`/coin/${coin?.id}`}>
        <motion.div key={id} className='gird-container-list'
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:50}}
        transition={{duration:0.5,type:'smooth',}}
        >

            <motion.td className="left-flex left-flex-list"
           
            >
                <Tooltip title="Coin logo" placement='bottom-start'>
                    <img src={coin?.image} alt="symbol" className='coin-logo' />
                </Tooltip>
                <Tooltip title="Coin info" placement='bottom-start'>
                    <div className="name-flex list-flex">
                        <p className='coin-symbol'>{coin?.symbol}</p>
                        <p className='coin-name'>{coin?.name}</p>
                    </div>
                </Tooltip>
                <div className="star">
                </div>
            </motion.td>
                {coin?.price_change_percentage_24h > 0 ?
                    <Tooltip title="Percentage Change" placement='bottom-start'>
                        <div className="percentChip">
                            <div className="pchip">
                                {coin?.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className='trendigUpIcon'>
                                <TrendingUpRoundedIcon />
                            </div>
                        </div>
                    </Tooltip>

                    :
                    <Tooltip title="Percentage Change" placement='bottom-start'>
                        <div className="percentChip">
                            <div className="pchip pchipRed">
                                {coin?.price_change_percentage_24h?.toFixed(2)}%
                            </div>
                            <div className='trendigdownIcon'>
                                <TrendingDownRoundedIcon />
                            </div>
                        </div>
                    </Tooltip>
                }
                <td className='curr-price-list'>
                    <Tooltip title="Current Price" placement='bottom-start'>
                        <h3 className="curr-price" style={{ color: coin?.price_change_24h > 0 ? "var(--green)" : "var(--red)" }}>
                            <CurrencyFormatter amount={coin?.current_price} />
                        </h3>
                    </Tooltip>
                </td>

                <td className="marketP marketPList">
                    <Tooltip title="Total Volume" placement='bottom-start'>
                        <p><CurrencyFormatter amount={coin?.total_volume} /></p>
                    </Tooltip>
                </td>

                <td className="marketP-responsive">
                    <Tooltip title="Total Volume" placement='bottom-start'>
                        {/* <p><CurrencyFormatter amount={coin.total_volume} /></p> */}
                        <p><ConvertIntoKBM value={coin?.total_volume}/></p>
                    </Tooltip>
                </td>
                <td className="marketP marketPList">
                    <Tooltip title="Market Cap" placement='bottom-start'>
                        <p><CurrencyFormatter amount={coin?.market_cap} /></p>
                       
                    </Tooltip>
                </td>
                <td className="marketP-responsive">
                    <Tooltip title="Market Cap" placement='bottom-start'>
                        {/* <p><CurrencyFormatter amount={coin.market_cap} /></p> */}
                        <p><ConvertIntoKBM value={coin?.market_cap}/></p>
                    </Tooltip>
                </td>
            
        </motion.div>
        </Link>
    )
}

export default List
