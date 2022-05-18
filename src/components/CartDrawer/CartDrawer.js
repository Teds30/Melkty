import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { styled, useTheme } from '@mui/material/styles'

import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import PrimaryButton from '../UI/PrimaryButton'

import CartList from './CartItemList'
import classes from './CartDrawer.module.css'
import { cartActions } from '../../store/slices/cart'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}))
const CartDrawer = (props) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const account = useSelector((state) => state.account)
    const theme = useTheme()
    const { open } = props

    const drawerWidth = 400

    const handleDrawerClose = () => {
        props.setClose()
    }

    const orderHandler = () => {
        console.log('Customer ID: ', account.account_id)
        console.log('Items Ordered: ', cartItems.items)
        console.log('Total Amount: ', cartItems.totalAmount)

        const account_id = account.account_id
        const items = cartItems.items
        const total_amount = cartItems.totalAmount

        // todo: dynamic values
        const customer_address = 2
        const shipping_fee = 0
        //

        const submitOrder = async () => {
            const response = await fetch('http://localhost:4000/api/orders', {
                method: 'POST',
                body: JSON.stringify({
                    customer_id: account_id,
                    customer_address,
                    shipping_fee,
                    total_amount,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('There was an error in submitting order!')
            }

            const data = await response.json()

            return data.id
        }

        const orderItem = async (order_id, item) => {
            const response = await fetch(
                'http://localhost:4000/api/orderitems',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        order_id,
                        product_id: item.product_id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        amount: item.amount,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (!response.ok) {
                throw new Error('There was an error in submitting order items!')
            }

            const data = await response.json()

            return data
        }

        const submitOrderItems = async () => {
            const order_id = await submitOrder()

            if (items) {
                items.map(async (item) => {
                    try {
                        await orderItem(order_id, item)
                    } catch (err) {
                        console.log('Something went wrong! Error: ', err)
                    }
                })
            }
        }

        const finishOrder = async () => {
            try {
                await submitOrderItems()
                dispatch(cartActions.clearCart())
            } catch (err) {
                console.log(err)
            }
        }

        finishOrder()
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    backgroundColor: '#eee',
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
                <h4>Cart</h4>
            </DrawerHeader>
            <Divider />
            <div className={classes.container}>
                <div className={classes['cartlist-container']}>
                    <CartList />
                </div>
                <div style={{ padding: '1em' }}>
                    <div className={classes.cartAmount}>
                        <h4>Cart Amount :</h4>
                        <p className="bold">
                            {formatter.format(cartItems.totalAmount)}
                        </p>
                    </div>
                    <PrimaryButton
                        style={{
                            width: '80%',
                        }}
                        onClick={orderHandler}
                    >
                        Order Now
                    </PrimaryButton>
                </div>
            </div>
        </Drawer>
    )
}

export default CartDrawer
