import React from 'react'
import '../Buttons/Button.css'
function Button({text,outlined,onClick}) {
  return (
    <div className={outlined?'outlined_btn':'btn'} onClick={()=>onClick()}>
      {text}
    </div>
  )
}

export default Button
