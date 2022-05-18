import React from 'react'

import BillingAddress from './billing_address/BillingAddress'
import CartItems from './cart_items/CartItems'

import classes from './Checkout.module.css'

const Checkout = () => {
    return (
        <div className={classes.checkout}>
            <div className={classes.col1}>
                <CartItems />
            </div>
            <div className={classes.col2}>
                <BillingAddress />
            </div>
        </div>
    )
}

export default Checkout
