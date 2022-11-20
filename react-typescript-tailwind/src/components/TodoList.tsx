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
        return <div key={t.id}
                    className="flex flex-row justify-between gap-4 py-1">
            <button onClick={() => props.toggleComplete(t.id)}>
                {getToggleIcon(true)}
            </button>

            <div className={t.completed ? "line-through text-left w-full" : "text-left w-full"}>{t.desc}</div>

            <button onClick={() => props.deleteTodo(t.id)}>
                <FaTimes className="h-auto hover:text-red-400"/>
            </button>
        </div>;
    }

    return (
        <div className="mt-4 w-full bg-amber-300 p-4 drop-shadow-lg bg-paper-pattern">
            <h2 className="mb-4 text-center text-2xl underline">{props.completed ? "Completed" : "Things to do"}</h2>
            {props.todos.filter(t => t.completed === props.completed).map(t => createRow(t))}
        </div>
    );
}