import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import classes from './CartItem.module.css'

const CartItem = (props) => {
    const increment = () => {
        props.onSetQuantity(props.item, true)
    }
    const decrement = () => {
        props.onSetQuantity(props.item, false)
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })

    return (
        <div className={classes['cart-item']}>
            <div className={classes.col1}>
                <div className={classes['img-container']}></div>
                <div>
                    <h4>{props.item.name}</h4>
                    <p>{formatter.format(props.item.price)}</p>
                </div>
            </div>
            <div className={classes.col2}>
                <div className={classes['quantity-control']}>
                    <button
                        className={classes['quantity-button']}
                        onClick={increment}
                    >
                        <AiOutlinePlus />
                    </button>

                    <div className={classes.quantity}>
                        {props.item.quantity}
                    </div>
                    <button
                        className={classes['quantity-button']}
                        onClick={decrement}
                    >
                        <AiOutlineMinus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
