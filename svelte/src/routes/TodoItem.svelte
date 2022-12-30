<script lang="ts">
    import type {Todo} from "../types/todo";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let todo: Todo;
</script>

<div class="item">
    <input type="checkbox" bind:checked={todo.completed} on:click={() => dispatch("check")}>
    <span class={todo.completed ? "crossed" : ""}>{todo.description}</span>
    <button on:click={() => dispatch("delete")}>❌</button>
</div>

<style>
    .item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 1rem;
    }

    span {
        width: 100%;
    }

    .crossed {
        text-decoration: line-through;
    }
</style>