import React, { Fragment } from 'react'

import CartItem from './CartItem'

import classes from './CartList.module.css'

const CartList = (props) => {
    const cart_item = (
        <ul className={classes.list}>
            {' '}
            {props.items.map((item) => {
                return (
                    <li key={item.product_id}>
                        <CartItem
                            item={item}
                            onSetQuantity={props.onSetQuantity}
                        />
                    </li>
                )
            })}
        </ul>
    )

    return (
        <Fragment>
            <div className={classes['cart-items-container']}>{cart_item}</div>
        </Fragment>
    )
}

export default CartList
