<script lang="ts">
  export let absolute = false;
</script>

<img src="/img/logo_light.png" class:absolute alt="logo" />

<style>
  img {
    height: 40vh;
    width: 40vh;
  }

  img.absolute {
    position: absolute;
    top: 5%;
    z-index: 10;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 25vh;
      width: 25vh;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: 23vh;
      width: 23vh;
    }

    img.absolute {
      top: 20%;
    }
  }
</style>
