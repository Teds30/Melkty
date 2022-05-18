import React from 'react'

import classes from './PrimaryButton.module.css'

const PrimaryButton = (props) => {
    return (
        <button
            className={classes.primarybutton}
            onClick={props.onClick}
            type={props.type}
        >
            {props.children}
        </button>
    )
}

export default PrimaryButton
