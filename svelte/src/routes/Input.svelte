<script>
    import {createEventDispatcher} from "svelte";

    export let inputValue = "";
    const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        if (!inputValue) return;
        dispatch("submit", inputValue);
        inputValue = "";
    };
</script>

<form on:submit={() => handleSubmit()}>
    <input type="text" autofocus placeholder="Do the dishes" bind:value={inputValue}>
    <button type="submit">➕</button>
</form>

<style>
    form {
        display: flex;
        width: 100%;
        gap: 1rem;
    }

    form > input {
        flex-grow: 1;
        padding: 0.5rem;
        font-size: 1rem;
    }

    form > button {
        width: auto;
        font-size: 1rem;
    }
</style>