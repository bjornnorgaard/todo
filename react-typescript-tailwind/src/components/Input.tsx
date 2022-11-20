import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export function Input(p: { onInput: (s: string) => void }) {
    const [desc, setDesc] = useState("");

    function onChange(value: string) {
        setDesc(value);
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        p.onInput(desc);
        setDesc("");
    }

    return (
        <form className="flex gap-2" onSubmit={onSubmit}>
            <input className="w-full p-2 drop-shadow"
                   type="text"
                   placeholder="Walk the dog... "
                   value={desc}
                   onChange={e => onChange(e.target.value)}/>
            <button className="bg-white px-4 drop-shadow hover:text-green-400"
                    onSubmit={() => onSubmit}>
                <FaPlus/>
            </button>
        </form>
    );
}