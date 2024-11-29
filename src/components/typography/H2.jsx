import React from 'react'

const H2 = ({ title, spantitle, breakpoint }) => {
  return (
    <h2 className="customh2">
      {breakpoint && <span style={{ color: '#FFCE00' }}>{spantitle}</span>}
      {title}
    </h2>
  )
}

export default H2