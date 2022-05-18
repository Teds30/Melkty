import React from 'react'

import { useNavigate } from 'react-router-dom'

import classes from './Header.module.css'

const Header = (props) => {
    const navigate = useNavigate()

    const showCartDrawer = () => {
        props.onOpen()
    }

    const navigateToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className={classes.header}>
            <h2 onClick={navigateToCheckout}>MelkTy</h2>
            <ul>
                <li onClick={showCartDrawer}>Cart</li>
            </ul>
        </div>
    )
}

export default Header
