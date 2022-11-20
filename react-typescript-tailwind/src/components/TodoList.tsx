import React from "react";
import { FaCheck, FaRegCircle, FaTimes } from "react-icons/fa";
import { Todo } from "../types/Todo";

export function TodoList(props: {
    completed: boolean,
    todos: Todo[],
    deleteTodo: (id: string) => void,
    toggleComplete: (id: string) => void,
}) {
    function getToggleIcon(completed: boolean) {
        if (completed) return (<FaCheck className="h-auto hover:text-green-400"/>);
        return (<FaRegCircle className="h-auto hover:text-blue-400"/>);
    }

    function createRow(t: Todo) {
        return <div className="flex flex-row justify-between gap-4 p-1">
            <button onClick={() => props.toggleComplete(t.id)}>
                {getToggleIcon(true)}
            </button>

            <div>{t.desc}</div>

            <button onClick={() => props.deleteTodo(t.id)}>
                <FaTimes className="h-auto hover:text-red-400"/>
            </button>
        </div>;
    }

    return (
        <div className="bg-white p-4 drop-shadow">
            <h2 className="text-2xl">{props.completed ? "Completed" : "Things to do"}</h2>
            {props.todos.filter(t => t.completed === props.completed).map(t => createRow(t))}
        </div>
    );
}