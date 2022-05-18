import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cart'

import CartList from './CartList'

import classes from './Cart.module.css'

import PrimaryButton from '../UI/PrimaryButton'
import { newOrder, newOrderItem } from '../../api/new_order'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const account = useSelector((state) => state.account)

    const quantityHandler = (item, increment = true) => {
        if (increment) {
            dispatch(cartActions.addItem(item))
        } else {
            dispatch(cartActions.removeItem(item.product_id))
        }
    }

    const placeOrder = async () => {
        const enteredOrder = {
            customer_id: account.account_id,
            total_amount: cartItems.totalAmount,
            shipping_fee: 0,
        }

        try {
            const new_order = await newOrder(enteredOrder)
            console.log(new_order.msg)

            cartItems.items.map(async (item) => {
                const new_order_items = await newOrderItem(
                    new_order.product_id,
                    item
                )
                console.log(new_order_items.msg)
            })
        } catch (error) {
            console.log('Something went wrong. Error: ', error)
        }
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
    })

    return (
        <Fragment>
            <div className={classes.cart}>
                <h1>My Cart</h1>
                <br />
                {cartItems.items.length > 0 && (
                    <CartList
                        items={cartItems.items}
                        onSetQuantity={quantityHandler}
                    />
                )}
                {cartItems.items.length === 0 && (
                    <p style={{ textAlign: 'center' }}>No Items in cart</p>
                )}

                <div>
                    <div className={classes.amount}>
                        <div>
                            <p>Shipping Fee</p>
                            <p>FREE</p>
                        </div>
                        <div>
                            <h3>Total Amount</h3>
                            <h3>{formatter.format(cartItems.totalAmount)}</h3>
                        </div>
                    </div>
                    <PrimaryButton onClick={placeOrder}>
                        Place Order
                    </PrimaryButton>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
