import { snapshot, useSnapshot } from "valtio";
import { todoStore } from "./todo.store";

export class todoQuery {
    static todos = () => useSnapshot(todoStore)
    static todo = (id: string) => snapshot(todoStore).filter(t => t.id === id)[0];
}
