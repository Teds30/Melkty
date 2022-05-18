import React from 'react'

import { useSelector } from 'react-redux'

import classes from './CartItems.module.css'
import Item from './Item'

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart)

    let items

    if (cartItems.items.length > 0) {
        items = (
            <ul>
                {cartItems.items.map((item) => (
                    <li key={item.product_id}>
                        <Item item={item} />
                    </li>
                ))}
            </ul>
        )
    } else {
        items = <p>No Items in cart</p>
    }
    return (
        <div className={classes.cartitems}>
            <h1>Cart Items</h1>
            {items}
        </div>
    )
}

export default CartItems
