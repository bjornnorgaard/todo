import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export const App = () => (
    <div className="flex max-w-xs m-auto mt-8 flex-col items-center gap-4">
        <Header/>
        <Input></Input>
        <TodoList></TodoList>
    </div>
);

export default App;