<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<img
  src="/svg/chevron-right-solid.svg"
  alt=">"
  on:click={handleClick}
  on:keydown={() => {}}
/>

<style>
  img {
    height: 1.4rem;
    width: 2rem;

    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(55deg)
      brightness(103%) contrast(103%);

    cursor: pointer;
  }
</style>
