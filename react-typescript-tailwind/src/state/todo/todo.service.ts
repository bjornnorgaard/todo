import { Todos, todoStore } from "./todo.store";

export class todoService {

    static addTodo = (desc: string) => {
        if (desc === "oij") {
            todoService.addTestData();
            return;
        }

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

    private static addTestData() {
        const initialState: Todos[] = [
            {id: "1", description: "Walk the dog", completed: false},
            {id: "2", description: "Do the dishes", completed: false},
            {id: "3", description: "Code a project", completed: true},
            {id: "4", description: "Cleanup living room", completed: false},
            {id: "5", description: "Move the furniture", completed: true},
            {id: "6", description: "Something fun", completed: false},
        ];
        initialState.forEach(t => todoStore.push(t));
    }
}

