import React from 'react';
import classes from './ToDoForm.module.css'
import {Input} from "../input/input.jsx";

export const ToDoForm = () => {
    return (
        <form className={classes.toDoForm}>
            <div>
                <Input placeholder='Task name'></Input>
            </div>
            <div>
                <Input placeholder='Tag'></Input>
            </div>
        </form>
    );
};

