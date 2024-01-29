import React, { useState } from 'react'
import './CoinInfo.css'
function CoinInfo({Heading, desc}) {
  const ShortDesc= desc?.slice(0,300) + " <span style='color:var(--grey)'>Read More...</span>"
  const LongDesc= desc + " <span style='color:var(--grey)'>...Read Less</span>"
  const [Flag,setFlag] = useState(false)
  return (
    <div className='CoinInfoContainer'>
      <h1 className='coinInfo_name'>{Heading}</h1>
      {
      desc?.length>300?(<p className='CoinInfo-desc'
      onClick={()=>setFlag(!Flag)}
      dangerouslySetInnerHTML={{__html:Flag?LongDesc:ShortDesc}}
      ></p>)
      :
      (<p className='CoinInfo-desc'
      dangerouslySetInnerHTML={{__html:desc}}
      ></p>)
      }
    </div>
  )
}

export default CoinInfo
