import React from 'react';
import classes from "./task.module.css";

export const Task = (props) => {
    return (
        <div className={classes.taskElem} {...props}>
            <h2 className={classes.taskTitle}>{props.title}</h2>
            <p className={classes.taskTag}>Tag: {props.tag}</p>
            <p className={classes.taskStatus}>
                Status: {!props.isComplete ? 'is being carried out' : 'completed'}
            </p>
        </div>
    );
};
