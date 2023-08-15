import React, { useContext } from 'react'
import {PRODUCTS} from '../shop/products'
import {ShopContext} from '../../context/ShopContext'
import CartItem from './CartItem'


const Cart = () => {
  const { cartItems} = useContext(ShopContext)

  return (
    <div className='cart'>
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className="cart__items">
        {PRODUCTS.map((product => {
          if(cartItems[product.id] !== 0) {
            return <CartItem product={product}/>
          }
        }))}
      </div>
    </div>
  )
}

export default Cart