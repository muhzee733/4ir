import React from 'react'

const H1 = ({title, className , spanTitle , breakpoint}) => {
  return (
    <div>
      <h1 className={`h1 ${className}`}>
        {title}
        {breakpoint && <span >{spanTitle}</span>}
        </h1>
    </div>
  )
}

export default H1