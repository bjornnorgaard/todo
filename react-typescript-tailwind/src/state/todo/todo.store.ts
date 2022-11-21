import { proxy } from "valtio";

export interface Todo {
    id: number;
    completed: boolean;
    description: string;
}

export const todoStore = proxy<Todo[]>([]);
