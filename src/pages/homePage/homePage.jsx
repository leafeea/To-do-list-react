import React, {useContext} from 'react';
import classes from './homePage.module.css'

import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";
import {Task} from "../../components/task/task.jsx";

export const HomePage = () => {

    const [tasks] = useContext(TasksContext);
    const [tags, setTags] = React.useState([]);
    const [filteredTasks, setFilteredTasks] = React.useState(tasks);

    React.useEffect(() => {
        const uniqueTags = [...new Set(tasks.map(task => task.tag))];
        setTags(uniqueTags);
        setFilteredTasks(tasks);
    }, [tasks]);

    const filterByTag = (tag) => {
        if (tag === "") {
            setFilteredTasks(tasks);
        } else {
            const sortedTasks = tasks.filter(task => task.tag === tag);
            setFilteredTasks(sortedTasks);
        }
    };

    return (
        <main>
            <div className={classes.content}>
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
                <div className={classes.toDoListWrapper}>
                    <div className={`${classes.toDoListRow} ${classes.selectRow}`}>
                        <div className={classes.selectRow}>
                            <p>Show tag</p>
                            <select className={classes.selectTag} onChange={(e)=>{filterByTag(e.target.value)}}>
                                <option value="">All tags</option>
                                {tags.map((tag, index) => (
                                    <option key={index} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={`${classes.toDoListRow} ${classes.list}`}>
                        {filteredTasks.map((task, index) => (
                            <Task key={index} id={task.id} title={task.title} tag={task.tag} isComplete={task.isComplete} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};