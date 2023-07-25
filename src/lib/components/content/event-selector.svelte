<script lang="ts">
  import { events } from "@lib/store";
  import { push } from "svelte-spa-router";

  function handleEventClick(id: string) {
    push(`/event/${id}`);
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
  div.events {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2ch;
    align-items: center;
    justify-content: center;
  }

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

  @media screen and (max-width: 700px) {
    div.events {
      gap: 1ch;
    }
  }

  @media screen and (min-width: 1600px) {
    p {
      font-size: 3.5rem;
    }

    button {
      font-size: 3.5rem;
    }
  }
</style>
