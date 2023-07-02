<script lang="ts">
    import type {Todo} from "../types/todo";
    import {createEventDispatcher} from "svelte";

    export let todo: Todo

    const dispatch = createEventDispatcher();
    const remove = () => dispatch('remove', todo);
</script>

{#key todo.id}
    <div class="flex items-center justify-between rounded border border-red-200 bg-white">
        <div class="flex gap-2 pl-2">
            <input type="checkbox" bind:checked={todo.completed}>
            <span class:line-through={todo.completed}>{todo.title}</span>
        </div>
        <button class="px-2 py-1 text-red-300 hover:bg-red-300 hover:text-black"
                on:click={() => remove(todo)}>Delete
        </button>
    </div>
{/key}
