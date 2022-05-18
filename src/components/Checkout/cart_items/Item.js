import React from 'react'

import classes from './Item.module.css'

const Item = (props) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
    })

    return (
        <div className={classes.itemContainer}>
            <div className={classes.item}>
                <div className={classes.col1}>
                    <div className={classes.item__image}></div>
                    <div className={classes.item__content}>
                        <p className="bold">{props.item.name}</p>
                        <p className="caption">
                            {formatter.format(props.item.price)}
                        </p>
                        <div>
                            <p className="caption">
                                Qty: {props.item.quantity}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.col2}></div>
                <div className={classes.col3}>
                    {formatter.format(props.item.price * props.item.quantity)}
                </div>
            </div>
        </div>
    )
}

export default Item
