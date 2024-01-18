import React from 'react'

function Grid({coin,id}) {
  return (
    <div key={id}>
      {
        coin.name
      }
    </div>
  )
}

export default Grid
