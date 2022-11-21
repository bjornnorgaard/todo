import { Todo, todoStore } from "./todo.store";

export class todoService {
    private static readonly api = "http://localhost:8080/todos";
    private static readonly headers = {"Content-Type": "application/json"};
    private static readonly errorMessage = "" +
        "❌ This is likely because the json-server is not started. Try 'npm run server' ✅\n\n";

    static init = () => {
        fetch(this.api)
            .then(res => res.json())
            .then((todos: Todo[]) => todos.forEach(todo => todoService.trackTodo(todo)))
            .catch(() => console.log(this.errorMessage));
    };

    static trackTodo(todo: Todo) {
        if (todoStore.filter(t => t.id === todo.id).length === 0) todoStore.push(todo);
    }

    static addTodo = (desc: string) => {
        const requestBody = {description: desc, completed: false};
        fetch(this.api, {body: JSON.stringify(requestBody), method: "POST", headers: this.headers})
            .then(res => res.json())
            .then((todo: Todo) => todoStore.push(todo));
    };

    static toggleComplete = (id: number) => {
        const index = todoStore.findIndex(t => t.id === id);
        if (index === -1) return;
        let todo = todoStore[index];
        todo.completed = !todo.completed;
        todoStore[index] = todo;

        const body = JSON.stringify(todo);
        fetch(`${this.api}/${todo.id}`, {body: body, method: "PUT", headers: this.headers}).then();
    };

    static deleteTodo = (id: number) => {
        todoStore.splice(todoStore.findIndex(t => t.id === id), 1);
        fetch(`${this.api}/${id}`, {method: "DELETE"}).then()
    };
}

