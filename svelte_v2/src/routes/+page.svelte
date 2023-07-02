<script lang="ts">
    import {todos} from "../stores/todos";
    import type {Todo} from "../types/todo";
    import {flip} from "svelte/animate";
    import {fly} from "svelte/transition";
    import {fade} from "svelte/transition";
    import TodoListItem from "./TodoListItem.svelte";

    let inputValue: string = "";

    todos.subscribe(list => list.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    }));

    function submit() {
        if (!inputValue) return;
        const newTodo: Todo = {id: Date.now(), title: inputValue, completed: false};
        todos.update(currentList => [newTodo, ...currentList]);
        inputValue = "";
    }

    function remove(removeThis: Todo) {
        todos.update(currentList => currentList.filter(todo => todo !== removeThis));
    }
</script>

<div class="flex flex-col items-center">
    <div class="flex w-full max-w-xs flex-col gap-4">

        <h1 class="text-center text-3xl font-bold tracking-wider text-red-400">Svelte Todo App</h1>
        <form class="flex w-full flex-col justify-between" on:submit|preventDefault={() => submit()}>
            <label for="todo" class="text-sm">Add something to your todos</label>
            <div class="flex justify-between gap-4">
                <input id="todo" type="text" placeholder="Walk the dog..." autocomplete="off"
                       class="grow rounded border border-red-200 px-2 py-1" bind:value={inputValue}>
                <button type="submit" class="rounded bg-red-300 px-4 hover:bg-red-400">Save</button>
            </div>
        </form>

        <a href="/other" class="text-center hover:underline">This is a routing example, click me.</a>

        <h2 class="text-xl font-bold tracking-wide text-red-400">Todos</h2>
        {#if !$todos.length}
            <p in:fade>Add some todos to get started...</p>
        {:else}
            <div class="flex flex-col gap-2">
                {#each $todos as todo (todo.id)}
                    <div animate:flip out:fly in:fly>
                        <TodoListItem bind:todo={todo} on:remove={() => remove(todo)}></TodoListItem>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
