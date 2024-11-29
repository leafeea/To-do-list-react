import React from 'react';
import classes from "./task.module.css";

export const Task = (props) => {
    return (
        <div className={classes.taskElem} {...props}>
            <h2>{props.title}</h2>
            <p>Tag:{props.tag}</p>
            <p>Status:{!props.isComplete ? 'is being carried out' : 'completed' }</p>
        </div>
    );
};
