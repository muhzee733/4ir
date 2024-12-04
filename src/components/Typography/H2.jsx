import React from 'react'

const H2 = ({title , className}) => {
  return (
    <h2 className={`h2 ${className}`}>{title}</h2>
  )
}

export default H2