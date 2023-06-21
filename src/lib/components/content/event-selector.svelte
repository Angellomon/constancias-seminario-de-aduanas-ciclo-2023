<script lang="ts">
  import { events } from "../../store";

  function handleEventClick(id: string) {
    console.log(id);
  }
</script>

<section>
  <div class="wrapper">
    <p>INDICA A QUÉ <b>EDICIÓN</b> ASISTISTE:</p>

    <div class="events">
      {#each $events as event}
        <button on:click={() => handleEventClick(event.id)}>{event.name}</button
        >
      {/each}
    </div>
  </div>
</section>

<style>
  div.wrapper {
    min-height: 35vh;
    height: 100%;

    border-width: 10px;
    border-style: solid;
    border-image: var(--main-gradient);
    border-image-slice: 60 30;
    border-left: none;
    border-right: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 5vh;
  }

  p {
    font-size: 1.8rem;
    text-align: center;

    margin: 1rem;
  }

  button {
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  /* button:first-of-type {
    margin-top: 0;
  } */
</style>
