import React from 'react';
import classes from "./task.module.css";
import {Button} from "../button/button.jsx";
import {TasksContext} from "../../App.jsx";

export const Task = ({id, title, tag, isComplete}) => {
    const [tasks, setTasks] = React.useContext(TasksContext);

    const deleteTask = ()=>{
        const newArray = tasks.filter(item => item.id !== id);
        setTasks(newArray);
    }

    const changeStatus = ()=>{
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, isComplete: !task.isComplete } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className={classes.task}>
            <div className={classes.taskHeader}>
                <h3 className={classes.taskTitle}>{title}</h3>
                <span className={classes.taskTag}>{tag}</span>
            </div>
            <p
                className={`${classes.taskStatus} ${
                    isComplete ? classes.completed : classes.inProgress
                }`}
            >
                {!isComplete ? 'in progress' : 'done'}
            </p>
            <div className={classes.taskBottom}>
                <Button type='delete' onClick = {deleteTask}>Delete</Button>
                {isComplete ? <Button onClick = {changeStatus}>Mark as in progress</Button> : <Button onClick = {changeStatus}>Mark as done</Button>}
            </div>
        </div>
    );
};
