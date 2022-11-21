import { proxy } from "valtio";

export interface Todos {
    id: string;
    completed: boolean;
    description: string;
}

const initialState: Todos[] = [
    {id: "1", description: "Walk the dog", completed: false},
    {id: "2", description: "Do the dishes", completed: false},
    {id: "3", description: "Code a project", completed: true},
    {id: "4", description: "Cleanup living room", completed: false},
    {id: "5", description: "Move the furniture", completed: true},
    {id: "6", description: "Something fun", completed: false},
];

export const todoStore = proxy<Todos[]>(initialState);
