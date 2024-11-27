import React from 'react';
import {Input} from "../input/input.jsx";

export const ToDoForm = () => {
    return (
        <form>
            <div>
                <Input placeholder = 'Task name'></Input>
            </div>
        </form>
    );
};

