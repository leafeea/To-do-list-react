import React, {useContext} from 'react';
import classes from './homePage.module.css'

import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";
import {TasksContext} from "../../App.jsx";
import {Task} from "../../components/task/task.jsx";
import {Button} from "../../components/button/button.jsx";

export const HomePage = () => {

    const [tasks] = useContext(TasksContext);
    const [tags, setTags] = React.useState([]);
    const [filteredTasks, setFilteredTasks] = React.useState(tasks);

    const [activeButton, setActiveButton] = React.useState('inProgress');
    const [activeTag, setActiveTag] = React.useState("");

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        let currentTasks = tasks;

        if(activeTag !== '') currentTasks = tasks.filter(task => task.tag === activeTag);

        if (buttonType === 'inProgress') {
            currentTasks = currentTasks.filter(item => !item.isComplete);
        } else if (buttonType === 'done') {
            currentTasks = currentTasks.filter(item => item.isComplete);
        }

        setFilteredTasks(currentTasks);
    };

    // Устанавливаем уникальные теги и изначальный список задач
    React.useEffect(() => {
        const uniqueTags = [...new Set(tasks.map(task => task.tag))];
        setTags(uniqueTags);
        handleButtonClick(activeButton); // Фильтрация на основе текущей активной кнопки
    }, [tasks]);

    const filterByTag = (tag) => {
        setActiveTag(tag)
        let currentTasks = tasks;

        if (activeButton === 'inProgress') {
            currentTasks = tasks.filter(item => !item.isComplete);
        } else if (activeButton === 'done') {
            currentTasks = tasks.filter(item => item.isComplete);
        }

        if (tag === "") {
            setFilteredTasks(currentTasks); // Показать все задачи в соответствии с выбранным статусом
        } else {
            const sortedTasks = currentTasks.filter(task => task.tag === tag);
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
                        <div className={classes.navigationByType}>
                            <Button
                                type={activeButton === 'inProgress' ? 'active' : 'inactive'}
                                onClick={() => handleButtonClick('inProgress')}
                            >
                                In progress
                            </Button>
                            <Button
                                type={activeButton === 'done' ? 'active' : 'inactive'}
                                onClick={() => handleButtonClick('done')}
                            >
                                Done
                            </Button>
                        </div>
                    </div>
                    <div className={`${classes.toDoListRow} ${classes.list}`}>
                        {filteredTasks.map((task, index) => (
                            <Task key={index} id={task.id} title={task.title} tag={task.tag}
                                  isComplete={task.isComplete}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};