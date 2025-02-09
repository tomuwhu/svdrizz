<script>
    let { data } = $props()
    let { cont } = $state(1)
    let fd = $state({ id: 0, name: "", age: 0 })
</script>

<svelte:head>
    <title>Állatok</title>
</svelte:head>

<h1>Állatok</h1>

{#each data.animals as animal}
    <div class="row">
        <span>{animal.name} is {animal.age} years old</span>
        <button class="ui blue small button" onclick="{() => fd = animal}">Módosít</button>
        <form class="delete">
            <button class="ui red small button" formaction="?/deleteAnimal" formmethod="POST" formenctype="multipart/form-data" name="id" value="{animal.id}">Törlés</button>
        </form>
    </div>
{/each}

{#if cont}
    <button class="ui teal button" onclick="{() => {
        cont = !cont
        fd.id = 0
        fd.name = ""
        fd.age = 0
    }}">Űrlap megnyitása</button>
    <hr>
    <a class ="ui large pink button" target="_blank" href="https://semantic-ui.com/elements/button.html">Semantic UI</a>
{:else}
    <button class="ui blue button" onclick="{() => cont = !cont}">Semantic UI Linkje</button>
    <hr>
    {#if fd.id}
        <h2>{fd.name} módosítása</h2>
    {:else}
        <h2>Új Állat rögzítése</h2>
    {/if}
    <form method="POST">
        <div class="ui divider"></div>
        <div class="ui labeled input">
            <label class="ui blue image label" for="name">Állat neve:</label>
            <input type="text" name="name" value="{fd.name}">
        </div>
        <div class="ui divider"></div>
        <div class="ui labeled input">
            <label class="ui blue image label" for="age">Állat kora:</label>
            <input type="number" name="age" value="{fd.age}">
        </div>
        <div class="ui divider"></div>
        {#if fd.id}
            <input type="hidden" name="id" value="{fd.id}">
            <button class="ui green button" formaction="?/updateAnimal">Módosít</button>
        {:else}
            <button class="ui green button" formaction="?/newAnimal">Rögzít</button>
        {/if}
    </form>
{/if}

<style>
    div span {
        display: inline-block;
        height: 26px;
        width: 300px;
        text-align: right;
    }
    form.delete {
        display: inline-block;
    }
    div.row {
        margin: 10px;
        padding: 5px;
        background-color: rgb(218, 244, 247);
        border-radius: 10px;
    }
</style>