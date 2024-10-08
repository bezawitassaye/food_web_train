import React, { useContext } from 'react'
import "./Placeorder.css"
import { storecontext } from "../../conetext/Storecontex"
const Placeorder = () => {
  const { cartitems, food_list, removefromcart,gettotalcartamount } = useContext(storecontext)
 
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className='multi-fields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder=' Street' />
        <div className="multi-fields">
          <input type="text" placeholder=' City' />
          <input type="text" placeholder=' State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder=' Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{gettotalcartamount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
                <b>Total</b>
                <b>{gettotalcartamount()+2}</b>
            </div>
            <button >Proceed To  PAYMENT</button>
          </div>
          
        </div>
      </div>
    </form>
  )
}

export default Placeorder
