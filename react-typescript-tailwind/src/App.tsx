import React, { useState } from 'react';
import './App.css';
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import { Todo } from "./types/Todo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        {id: "1", desc: "Walk the dog", completed: false},
        {id: "2", desc: "Do the dishes", completed: false},
        {id: "3", desc: "Code a project", completed: true},
        {id: "4", desc: "Cleanup living room", completed: false},
        {id: "5", desc: "Move the furniture", completed: true},
        {id: "6", desc: "Something fun", completed: false},
    ]);

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
        <div className="flex max-w-xs m-auto mt-8 flex-col items-center gap-4">
            <Header/>

            <Input onInput={addTodo}></Input>

            <TodoList todos={todos}
                      deleteTodo={deleteTodo}
                      toggleComplete={toggleComplete}></TodoList>
        </div>
    );
}

export default App;