import React from 'react'

const Para = ({title , className}) => {
  return (
    <div className={`p ${className}`}>{title}</div>
  )
}

export default Para