import React from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { TodoList } from "../components/TodoList";

export const Home = () => (
    <div className="flex flex-col gap-4">
        <Header title="Todo App with React"/>
        <Input></Input>
        <TodoList></TodoList>
    </div>
);

