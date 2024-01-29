import React from 'react'
import '../Grid/Grid.css';
import {motion} from 'framer-motion'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import CurrencyFormatter from '../../../functions/CurrencyFormeter';
import { Link } from 'react-router-dom';
function Grid({ coin, id }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.div key={id} className={`gird-container ${coin.price_change_percentage_24h < 0 ? "redContainer":"GreenContainer"}`}
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,type:'smooth',}}
    >
      <div className="left-flex">
        <img src={coin.image} alt="symbol" className='coin-logo' />
        <div className="name-flex">
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
        <div className="star">
          
        </div>
      </div>
      <div className="price-chip">
        {coin.price_change_percentage_24h > 0 ?
          <div className="percentChip">
            <div className="pchip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trendigUpIcon'>
              <TrendingUpRoundedIcon/>
            </div>
          </div>
          : <div className="percentChip">
            <div className="pchip pchipRed">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trendigdownIcon'>
              <TrendingDownRoundedIcon/>
            </div>
          </div>
          }
          <div>
            <h3 className="curr-price" style={{color:coin.price_change_24h>0?"var(--green)":"var(--red)"}}>
            
            <CurrencyFormatter amount={coin?.current_price}/>
            </h3>
          </div>
          <div className="marketP">
             <p>Total Volume: <CurrencyFormatter amount={coin.total_volume}/></p>
          </div>
          <div className="marketP">
            <p>Market Cap: <CurrencyFormatter amount={coin.market_cap}/></p>
          </div>
      </div>
    </motion.div>
    </Link>
  )
}

export default Grid
