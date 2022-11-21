import React from "react";
import { FaCheck, FaRegCircle, FaTimes } from "react-icons/fa";
import { todoQuery } from "../state/todo/todo.query";
import { todoService } from "../state/todo/todo.service";

export const TodoList = () => {
    const todos = todoQuery.todos();

    return (
        <div className="mt-4 w-full bg-amber-300 p-4 drop-shadow-lg bg-paper-pattern">
            <h2 className="mb-4 text-center text-2xl underline">Things to do</h2>
            {todos.map(t =>
                <div key={t.id}
                     className="flex flex-row justify-between gap-4 py-1">
                    <button onClick={() => todoService.toggleComplete(t.id)}>
                        {t.completed
                            ? <FaCheck className="h-auto hover:text-green-400"/>
                            : <FaRegCircle className="h-auto hover:text-blue-400"/>}
                    </button>

                    <div className={t.completed ? "line-through text-left w-full" : "text-left w-full"}>
                        {t.description}
                    </div>

                    <button onClick={() => todoService.deleteTodo(t.id)}>
                        <FaTimes className="h-auto hover:text-red-400"/>
                    </button>
                </div>
            )}
        </div>
    );
};