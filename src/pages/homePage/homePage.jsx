import React, {useContext} from 'react';
import classes from './homePage.module.css'

import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";
import {Task} from "../../components/task/task.jsx";

export const HomePage = () => {

    const [tasks] = useContext(TasksContext);

    return (
        <main>
            <div className={classes.content}>
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
                {tasks.map((task, index) => (<Task key = {index} id={task.id} title = {task.title} tag = {task.tag} isComplete={task.isComplete}></Task>))}

            </div>
        </main>
    );
};