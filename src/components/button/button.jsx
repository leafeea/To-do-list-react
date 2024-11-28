import React from 'react';
import classes from './button.module.css'

export const Button = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};