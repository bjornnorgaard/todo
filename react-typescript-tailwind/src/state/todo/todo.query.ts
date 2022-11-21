import { useSnapshot } from "valtio";
import { todoStore } from "./todo.store";

export class todoQuery {
    static todos = () => useSnapshot(todoStore)
}
