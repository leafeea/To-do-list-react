import React, {useContext} from 'react';
import './homePage.css'
import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";

export const HomePage = () => {

    const [tasks, setTasks] = useContext(TasksContext);

    return (
        <main>
            <div className="content">
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
                {tasks.map((task, index) => (<div key={index}><p>{task.title}</p> <p>{task.tag}</p></div>))}
            </div>
        </main>
    );
};