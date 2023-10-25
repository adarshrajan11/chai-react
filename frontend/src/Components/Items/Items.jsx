import React from 'react'
import './Item.css'
const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          <p>₹{props.new_price}</p>
        </div>
        <div className='item-price-old'>
          <p>₹{props.old_price}</p>
        </div>
      </div>
    </div>
  )
}

export default Items
