<script lang="ts">
  import { logosSources } from "@lib/store";
</script>

<footer>
  {#each $logosSources as logoSrc}
    <img src={logoSrc.file} alt={logoSrc.name.toUpperCase()} />
  {/each}
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    background-color: white;
  }

  img {
    height: 15vh;
  }
</style>
