import React from 'react'
import { cartActions } from '../../store/slices/cart'
import { useDispatch } from 'react-redux'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import classes from './CartItem.module.css'

const CartItem = (props) => {
    const dispatch = useDispatch()
    const { item } = props

    const addItem = () => {
        dispatch(cartActions.addItem(item))
    }
    const removeItem = () => {
        dispatch(cartActions.removeItem(item.product_id))
    }

    return (
        <div className={classes['container']}>
            <div className={classes.col1}>
                <div className={classes.imgContainer}>
                    <img src={item.image} alt="prod_img" />
                </div>
                <div className={classes.infoContainer}>
                    <p className="bold">{item.name}</p>
                    <p className="caption ">PHP {item.price}.00</p>
                    <div className={classes['quantity-container']}>
                        <button
                            className={classes['quantity-control']}
                            onClick={removeItem}
                        >
                            <AiOutlineMinus />
                        </button>
                        <div className={classes.quantity}>
                            <p className="caption">{item.quantity}</p>
                        </div>
                        <button
                            className={classes['quantity-control']}
                            onClick={addItem}
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
