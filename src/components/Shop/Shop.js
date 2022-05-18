import React from 'react'
import CategoryProduct from './CategoryProduct'

import classes from './Shop.module.css'
const Shop = () => {
    return (
        <main className={classes.shop}>
            <div className={classes.summary}>
                <h3>Available Milkteas</h3>
                <div className={classes.line}></div>
            </div>
            <CategoryProduct />
        </main>
    )
}

export default Shop
