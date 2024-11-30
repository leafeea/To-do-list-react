import React, {useContext} from 'react';
import classes from './homePage.module.css'

import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";
import {Task} from "../../components/task/task.jsx";

export const HomePage = () => {

    const [tasks] = useContext(TasksContext);
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        const uniqueTags = [...new Set(tasks.map(task => task.tag))];
        setTags(uniqueTags);
    }, [tasks]);


    return (
        <main>
            <div className={classes.content}>
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
                <div className={classes.toDoListWrapper}>
                    <div className={`${classes.toDoListRow} ${classes.select}`}>
                        <div className={classes.selectRow}>
                            <p>Show tag</p>
                            <select>
                                <option value="">All tags</option>
                                {tags.map((tag, index) => (
                                    <option key={index} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={`${classes.toDoListRow} ${classes.list}`}>
                        {tasks.map((task, index) => (<Task key={index} id={task.id} title={task.title} tag={task.tag} isComplete={task.isComplete}></Task>))}
                    </div>
                </div>
            </div>
        </main>
    );
};