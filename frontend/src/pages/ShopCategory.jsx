import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Items from '../Components/Items/Items'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt='banner' />
      <div className='shopcategory-indexsort'>
        <p>
          <span>showing 1-12 </span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by
          <img src={dropdown_icon} alt='dropdow' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          console.log(props.category + ' ' + item.category)
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }
          return null
        })}
      </div>
      <div className='shopcategory-loadmore'>Explore more</div>
    </div>
  )
}

export default ShopCategory
