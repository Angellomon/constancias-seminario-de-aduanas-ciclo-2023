<script lang="ts">
  import {} from "svelte/animate";
</script>

<img class="rotate-center" src="/svg/spinner-solid.svg" alt="..." />

<style>
  img {
    height: 1.4rem;
    width: 2rem;

    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(55deg)
      brightness(103%) contrast(103%);

    /* cursor: pointer; */
  }

  @media screen and (min-width: 1600px) {
    img {
      height: 2.8rem;
      width: 4rem;
    }
  }

  .rotate-center {
    -webkit-animation: rotate-center 2s linear infinite both;
    animation: rotate-center 2s linear infinite both;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
