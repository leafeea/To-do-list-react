import { useState } from 'react'
import {Header} from './components/header.jsx'
import {HomePage} from "./pages/homePage/homePage.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

function App() {
    const [linkList, setLinkList] = useState([
        {'label': 'Home', 'link': ''},
        {'label': 'Git-link', 'link': 'git'},])
    const [tasks, setTasks] = useState([]);


  return (
    <BrowserRouter>
        <Header linksList={linkList}></Header>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/git'></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
