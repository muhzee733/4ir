import React from 'react'

const H3 = ({title , className}) => {
  return (
    <div className={`h3 ${className}`}>{title}</div>
  )
}

export default H3