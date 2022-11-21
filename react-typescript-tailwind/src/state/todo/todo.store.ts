import { proxy } from "valtio";

export interface Todos {
    id: string;
    completed: boolean;
    description: string;
}

export const todoStore = proxy<Todos[]>([]);
