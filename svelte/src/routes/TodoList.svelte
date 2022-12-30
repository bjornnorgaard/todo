<script lang="ts">
    import type {Todo} from "../types/todo";
    import TodoItem from "./TodoItem.svelte";

    export let completed: boolean;
    export let todos: Todo[] = [];
</script>

<div class="todo-list">
    <h2>{completed ? "Completed" : "Todos"} </h2>

    <div class="list">
        {#each todos.filter(t => t.completed === completed) as todo}
            <TodoItem bind:todo={todo}
                      on:check={() => todo.completed = !todo.completed}
                      on:delete={() => todos = [...todos.filter(t => t.id !== todo.id)]}/>
        {/each}
    </div>
</div>

<style>
    .todo-list {
        width: 100%;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>