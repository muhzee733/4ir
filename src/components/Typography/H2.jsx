import React from 'react'

const H2 = ({title , className}) => {
  return (
    <div className={`h2 ${className}`}>{title}</div>
  )
}

export default H2