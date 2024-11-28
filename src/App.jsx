import {createContext, useState} from 'react'
import {Header} from './components/header.jsx'
import {HomePage} from "./pages/homePage/homePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

export const TasksContext = createContext();

function App() {
    const [linkList, setLinkList] = useState([
        {'label': 'Home', 'link': ''},
        {'label': 'Git-link', 'link': 'github'},])
    const [tasks, setTasks] = useState([]);


  return (
      <TasksContext.Provider value={[tasks, setTasks]}>
          <BrowserRouter>
              <Header linksList={linkList}></Header>
              <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/github'></Route>
              </Routes>
          </BrowserRouter>
      </TasksContext.Provider>
  )
}

export default App
