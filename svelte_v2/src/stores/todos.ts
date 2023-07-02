import {writable} from "svelte/store";
import type {Todo} from "../types/todo";
import {loadObject, saveObject} from "./helpers";

const key = "todos";
export let todos = writable<Todo[]>(loadObject(key, []));
todos.subscribe(list => saveObject(key, list))
