import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext'

const Product = ({ product}) => {
    const {id, name, price, img} = product
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="description">
            <p>
                <b>{name}</b>
            </p>
            <p>
                {price}$
            </p>
        </div>
        <button onClick={() => addToCart(id)} className="addToCartBtn">Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
    </div>   
  )
}

export default Product