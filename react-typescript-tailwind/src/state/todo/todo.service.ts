import { todoStore } from "./todo.store";

export class todoService {
    static addTodo = (desc: string) => {
        const uuid = require("uuid");
        const id = uuid.v4();
        todoStore.push({id: id, description: desc, completed: false,})
    };

    static toggleComplete = (id: string) => {
        const index = todoStore.findIndex(t => t.id === id);
        todoStore[index].completed = !todoStore[index].completed;
    };

    static deleteTodo = (id: string) => {
        todoStore.splice(todoStore.findIndex(t => t.id === id), 1);
    };
}

