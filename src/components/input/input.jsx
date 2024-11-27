import React from 'react';
import classes from './input.module.css'

export const Input = (props) => {
    return (
        <input className={classes.input} {...props}>

        </input>
    );
};