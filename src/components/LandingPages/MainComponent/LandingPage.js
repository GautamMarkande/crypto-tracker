import React from 'react'
import Button from '../../Common/Buttons/Button'
import '../MainComponent/LandingPage.css'
import phoneImg from '../../../assets/phone1.png'
import phoneGradientimg from '../../../assets/Phonegradient .png'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate(null)
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Github",
          text: 'Check out this link!',
          url: `https://github.com/GautamMarkande/crypto-tracker`,
        });
      } else {
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };
  return (
    <div className='HomeContainer'>
      <div className="left_component">
        <motion.h1
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,type:'smooth',}}
            className="track_crypto_heading">Track Crypto
         </motion.h1>
        <motion.h1 className="realtime_heading"
         initial={{opacity:0,y:50}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.5,type:'smooth',}}
          >Real Time.
        </motion.h1>
        <motion.p className="info_text"
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,delay:1,type:'smooth',}}
        >
            Track crypto through public api in real time.Vishit 
            the dashboard to do 
            so
        </motion.p>
        <motion.div className="btn_flex"
        initial={{opacity:0,x:50}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5,delay:1.5,type:'smooth',}}
        >
            <Button text={"Dashboard"} outlined={false}  onClick={()=>navigate('/dashboard')}/>
            <Button text={"Share"} outlined={true} onClick={handleShareClick}/>
        </motion.div>
      </div>
      <div className="phone">
        <motion.img src={phoneImg} alt="phone" className='phoneImg'
        initial={{y:-10}}
        animate={{y:0}}
        transition={{
          type:'smooth',
          repeatType:'mirror',
          duration:2,
          repeat:Infinity
        }}
        />
        <img src={phoneGradientimg} alt="phoneGradientImg" className='phoneGradientImg'/>
      </div>
    </div>
  )
}

export default LandingPage
