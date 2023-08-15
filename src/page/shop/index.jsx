import React from 'react'
import Product from './Product'
import { PRODUCTS } from './products'
import './Shop.scss'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop__title'>
            <h1>Pluxas Shop</h1>
        </div>
        <div className="shop__products">
            {PRODUCTS.map(product => {
                return (
                    <Product product={product}/>
                )
            })}
        </div>
    </div>
  )
}

export default Shop