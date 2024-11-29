import React, {useContext, useState, useEffect} from 'react';
import classes from './ToDoForm.module.css'
import {Input} from "../input/input.jsx";
import {Button} from "../button/button.jsx";
import {TasksContext} from "../../App.jsx";

export const ToDoForm = () => {
    const [tasks, setTasks] = useContext(TasksContext);
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');

    function createTask(e){
        e.preventDefault();
        if(isExistingTask(title,tag)) return;
        const newTask = {
            id: Date.now(),
            title: title,
            tag: tag,
            isComplete: false
        }

        setTasks([...tasks, newTask]);

        function isExistingTask(title,tag){
            return tasks.some((task) =>
                task.title.trim().toLowerCase() === title.trim().toLowerCase() &&
                task.tag.trim().toLowerCase() === tag.trim().toLowerCase()
            );
        }
    }

    return (
        <form className={classes.toDoForm}>
            <div className={classes.toDoFormElem}>
                <Input value = {title} onChange = {(e)=> setTitle(e.target.value)} placeholder='Task name'></Input>
            </div>
            <div className={classes.toDoFormElem}>
                <Input value = {tag} onChange = {(e)=> setTag(e.target.value)} placeholder='Tag'></Input>
            </div>
            <div className={classes.toDoFormElem}>
                <Button onClick = {(e)=> createTask(e)}>Apply</Button>
            </div>
        </form>
    );
};

