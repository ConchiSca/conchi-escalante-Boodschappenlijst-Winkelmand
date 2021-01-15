// ShoppingCart.js, zelfde dan GroceryList.js

import React from 'react'
import List from './List'


const ShoppingCart = (props) => {
    return (
        <div className='shopping-cart'>
            <h1>Shopping Cart</h1>
            <List list={props.list} />
        </div>
    )
}

export default ShoppingCart

