<script lang="ts">
    import Header from "./Header.svelte";
    import Input from "./Input.svelte";
    import TodoList from "./TodoList.svelte";
    import type {Todo} from "../types/todo";

    let todos: Todo[] = [];

    function handleInput(title) {
        todos = [...todos, {id: Date.now().toString(), completed: false, description: title}];
    }
</script>

<div class="app">
    <main>
        <Header/>
        <Input on:submit={e => handleInput(e.detail)}/>
        {#if todos.filter(t => !t.completed).length > 0}
            <TodoList bind:todos={todos} completed={false}/>
        {:else}
            <p>Create some todos to get started</p>
        {/if}
        {#if todos.filter(t => t.completed).length > 0}
            <TodoList bind:todos={todos} completed={true}/>
        {/if}
    </main>
</div>

<style>
    .app {
        max-width: 30em;
        margin-inline: auto;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>