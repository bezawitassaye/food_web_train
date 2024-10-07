import React, { useState } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'
const Fooditem = ({id,name,price,description,image}) => {
   const [itemCount,setItemcount ] = useState(0)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img src={image} className='food-item-image' alt="" />
            {
              !itemCount ? 
              <img className='add' onClick={()=>setItemcount(prev=>prev+1)} src={assets.add_icon_white} alt=''/>:
              <div className='food-item-counter'>
                 <img onClick={()=>setItemcount(prev=>prev-1)} src={assets.remove_icon_red} alt=''/>
                 <p>{itemCount}</p>
                 <img  onClick={()=>setItemcount(prev=>prev+1)} src={assets.add_icon_green} alt=''/>
              

              </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>

        </div>
      
    </div>
  )
}

export default Fooditem
