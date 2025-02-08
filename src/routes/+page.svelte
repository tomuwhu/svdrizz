<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Home</h1>

{#each data.animals as animal}
    <p>{animal.name} is {animal.age} years old</p>
{/each}