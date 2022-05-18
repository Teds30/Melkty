import React from 'react'

import classes from './BillingAddress.module.css'

const BillingAddress = () => {
    return (
        <div className={classes.billing}>
            <div>Billing Address</div>
            <div>
                <p>John Doe</p>
                <p>Prieto Street , Balud Del Sur</p>
            </div>
        </div>
    )
}

export default BillingAddress
