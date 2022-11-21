import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { todoService } from "../state/todo/todo.service";

export const Input = () => {
    const [desc, setDesc] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDesc("");
        todoService.addTodo(desc)
    };

    return (
        <form className="flex gap-2 w-full" onSubmit={onSubmit}>
            <input className="w-full p-2 drop-shadow"
                   type="text"
                   placeholder="Walk the dog... "
                   value={desc}
                   onChange={e => setDesc(e.target.value)}/>
            <button className="px-4 drop-shadow hover:text-green-400"
                    onSubmit={() => onSubmit}>
                <FaPlus/>
            </button>
        </form>
    );
};