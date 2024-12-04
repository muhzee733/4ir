import React from 'react'

const H1 = ({title, className}) => {
  return (
    <h1 className={`h1 ${className}`}>{title}</h1>
  )
}

export default H1