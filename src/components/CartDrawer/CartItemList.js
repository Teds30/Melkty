import React, { Fragment } from 'react'

import { useSelector } from 'react-redux'

import CartItem from './CartItem'

import classes from './CartItemList.module.css'

const CartItemList = () => {
    const cartItems = useSelector((state) => state.cart)

    const hasItem = cartItems.items.length > 0

    return (
        <Fragment>
            {!hasItem && (
                <div className={classes.nocart}>
                    <p className="bold">No Items</p>
                </div>
            )}
            {hasItem && (
                <ul>
                    {cartItems.items.map((item) => (
                        <li key={item.product_id}>
                            <CartItem item={item} />
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    )
}

export default CartItemList
