import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { todoQuery } from "../state/todo/todo.query";

export const TodoDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    if (!id) return (<p>Fuck. Todo ID was invalid!</p>);
    const todo = todoQuery.todo(id);

    return (
        <div className="flex w-full flex-col gap-4 text-center">
            <Header title={"Todo #" + todo.id}></Header>
            <div className="flex justify-between">
                <p className="font-bold">Description</p>
                <p>{todo.description}</p>
            </div>

            <div className="flex justify-between">
                <p className="font-bold">Completed</p>
                <p>{todo.completed ? "Sure thing!" : "Nope"}</p>
            </div>

            <button className="mt-4 bg-amber-200 py-2 text-xl font-bold drop-shadow"
                    onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};