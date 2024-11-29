import React from 'react';
import classes from "./task.module.css";

export const Task = (props) => {
    return (
        <div className={classes.task} {...props}>
            <div className={classes.taskHeader}>
                <h3 className={classes.taskTitle}>{props.title}</h3>
                <span className={classes.taskTag}>{props.tag}</span>
            </div>
            <p
                className={`${classes.taskStatus} ${
                    props.isComplete ? classes.completed : classes.inProgress
                }`}
            >
                {!props.isComplete ? 'is being carried out' : 'completed'}
            </p>
        </div>
    );
};
