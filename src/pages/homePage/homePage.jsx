import React, {useContext} from 'react';
import './homePage.css'
import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";
import {Task} from "../../components/task/task.jsx";

export const HomePage = () => {

    const [tasks] = useContext(TasksContext);

    return (
        <main>
            <div className="content">
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
                {tasks.map((task, index) => (<Task key = {index} title = {task.title} tag = {task.tag}></Task>))}
            </div>
        </main>
    );
};