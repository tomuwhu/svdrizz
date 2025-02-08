<script>
    let { data } = $props()
    let { cont } = $state(0)
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Home</h1>

{#each data.animals as animal}
    <p>{animal.name} is {animal.age} years old</p>
{/each}

<button class="ui positive basic button" onclick="{() => cont = !cont}">Get UI Link</button>

<hr>

{#if cont}
    <a target="_blank" href="https://semantic-ui.com/elements/button.html">Semantic UI</a>
{:else}
    <form method="POST" action="?/newAnimal">
        <div class="ui labeled input">
            <label class="ui blue image label" for="name">Állat neve:</label>
            <input type="text" name="name">
        </div>
        <div class="ui divider"></div>
        <div class="ui labeled input">
            <label class="ui blue image label" for="age">Állat kora:</label>
            <input type="number" name="age">
        </div>
        <div class="ui divider"></div>
        <button class="ui positive basic button">Új állat</button>
    </form>
{/if}