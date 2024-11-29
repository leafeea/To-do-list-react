import React from 'react';
import classes from './button.module.css'

export const Button = ({children, type, ...props}) => {
    const buttonClass = `${classes.button} ${type ? classes[type] : ''}`;
    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};