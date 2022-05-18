import React, { Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { openCartActions } from '../../store/slices/openCart'

import Header from './Header'
import CartDrawer from '../CartDrawer/CartDrawer'

const Layout = (props) => {
    const dispatch = useDispatch()
    const openCart = useSelector((state) => state.openCart)

    const isCartDrawerOpen = openCart.isOpen

    const openCartDrawerHandler = () => {
        dispatch(openCartActions.showCart())
    }
    const closeCartDrawerHandler = () => {
        dispatch(openCartActions.hideCart())
    }

    return (
        <Fragment>
            <Header onOpen={openCartDrawerHandler} />
            <CartDrawer
                open={isCartDrawerOpen}
                setClose={closeCartDrawerHandler}
            />
            {props.children}
        </Fragment>
    )
}

export default Layout
