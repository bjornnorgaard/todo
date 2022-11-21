import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const App = () => (
    <div className="m-auto mt-8 flex max-w-xs flex-col items-center">
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
);

export default App;