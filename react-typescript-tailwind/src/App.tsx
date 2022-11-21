import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { TodoDetails } from "./pages/TodoDetails";
import { todoService } from "./state/todo/todo.service";

export const App = () => {
    todoService.init();

    return (
        <div>
            <Navigation/>
            <div className="m-auto mt-8 flex max-w-xs flex-col items-center">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/todo/:id" element={<TodoDetails/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;