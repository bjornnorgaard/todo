import React, { useState } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Todo } from "./types/Todo";
import { TodoList } from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(desc: string) {
        const uuid = require("uuid");
        setTodos([...todos, {id: uuid.v4(), completed: false, desc: desc}])
    }

    function toggleComplete(id: string) {
        const newTodos: Todo[] = [];
        todos.forEach(t => {
            if (t.id === id) t.completed = !t.completed;
            newTodos.push(t);
        })
        setTodos(newTodos);
    }

    function deleteTodo(id: string) {
        setTodos(todos.filter(t => t.id !== id));
    }

    return (
        <div className="h-screen bg-amber-200 pt-8">
            <div className="flex flex-col items-center gap-4">
                <Header></Header>
                <Input onInput={addTodo}></Input>

                <TodoList todos={todos}
                          deleteTodo={deleteTodo}
                          toggleComplete={toggleComplete}
                          completed={false}></TodoList>

                <TodoList todos={todos}
                          deleteTodo={deleteTodo}
                          toggleComplete={toggleComplete}
                          completed={true}></TodoList>
            </div>
        </div>
    );
}

export default App;