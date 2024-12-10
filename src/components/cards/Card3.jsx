import React from 'react'

const Card3 = ({ items, key, className }) => {
  return (
    <div className={`card3 customborder ${className}`} key={key}>
          <div class="card3-body">
            <h5 className='car3-h5'>{items?.title}</h5>
            <p>{items.description}</p>
          </div>
        </div>
  )
}

export default Card3