import React from 'react';
import './homePage.css'
import {ToDoForm} from "../../components/ToDoForm/ToDoForm.jsx";

export const HomePage = () => {
    return (
        <main>
            <div className="content">
                <h2 style={{textAlign:'center'}}>Welcome!</h2>
                <ToDoForm></ToDoForm>
            </div>
        </main>
    );
};