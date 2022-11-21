import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const Navigation = () => {
    const routes = [
        {route: "/", label: "Home"},
        {route: "/about", label: "About"},
    ];

    return (
        <nav className="mb-4 w-full bg-red-200 p-2 drop-shadow">
            <ul className="flex justify-between px-8 text-3xl font-bold">
                {routes.map(r => (
                    <li className="drop-shadow hover:text-blue-400 hover:underline">
                        <Link
                            key={r.route}
                            to={r.route}>
                            {r.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

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