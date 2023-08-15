import React from 'react'


const CartItem = ({product}) => {
    const {id, name, price, img} = product
  return (
    <div className='cartItem'>
        <img src={img} alt="" />
        <div className="description">
            <p>
                <b>{name}</b>
            </p>
            <p>
                {price}$
            </p>
        </div>
    </div>
  )
}

export default CartItem