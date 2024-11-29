import React from 'react'

const H1 = ({ title, spantitle, breakpoint }) => {
  return (
    <h1 className="customh1">
      {breakpoint && <span style={{color:'#FFCE00'}}>{spantitle}</span>}
      {breakpoint && <br />}
      {title}
    </h1>
  )
}

export default H1