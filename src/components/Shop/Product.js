import React, { Fragment, useState } from 'react'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cart'
import { openCartActions } from '../../store/slices/openCart'

import classes from './Product.module.css'
const Product = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const vertical = 'top'
    const horizontal = 'center'

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })
    const handleClose = () => {
        setOpen(false)
    }

    const addToCartHandler = () => {
        dispatch(
            cartActions.addItem({
                product_id: props.item.ID.toString(),
                name: props.item.name,
                price: props.item.price,
                quantity: 1,
                image: props.item.image,
            })
        )
        setOpen(true)
    }

    const showCart = () => {
        setOpen(false)
        dispatch(openCartActions.showCart())
    }

    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes['product__image']}>
                    <img src={props.item.image} alt={props.item.name} />
                    <div className={classes['product__button']}>
                        <button onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>

                <div className={classes['product__content']}>
                    <p className="">{props.item.name}</p>
                    <p className="bold">{formatter.format(props.item.price)}</p>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Added to cart"
                autoHideDuration={3000}
                key={vertical + horizontal}
                sx={{ width: '350px' }}
            >
                <Alert
                    style={{
                        background: 'var(--background-color)',
                        width: '100%',
                    }}
                    variant="outlined"
                    severity="success"
                    onClose={handleClose}
                    action={
                        <Button color="inherit" size="small" onClick={showCart}>
                            check it out!
                        </Button>
                    }
                >
                    Added to cart
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

export default Product
