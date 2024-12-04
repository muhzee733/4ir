import React from 'react'

const H1 = ({title, className}) => {
  return (
    <div className={`h1 ${className}`}>{title}</div>
  )
}

export default H1