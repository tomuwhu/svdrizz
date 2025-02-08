<script>
    let { data } = $props()
    let { cont } = $state(0)
</script>

<svelte:head>
    <title>Állatok</title>
</svelte:head>

<h1>Állatok</h1>

{#each data.animals as animal}
    <p>{animal.name} is {animal.age} years old</p>
{/each}

{#if cont}
    <button class="ui teal button" onclick="{() => cont = !cont}">Insert New Animal</button>
    <hr>
    <a class ="ui large pink button" target="_blank" href="https://semantic-ui.com/elements/button.html">Semantic UI</a>
{:else}
    <button class="ui blue button" onclick="{() => cont = !cont}">Get UI Link</button>
    <hr>
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
        <button class="ui blue button">Új állat</button>
    </form>
{/if}