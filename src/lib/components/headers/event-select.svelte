<script lang="ts">
  import { MainLogoTransparent } from "@components/img";
</script>

<header>
  <div class="wrapper">
    <MainLogoTransparent />

    <div class="title">
      <h1>CONSTANCIAS</h1>
    </div>
  </div>
</header>

<style>
  header {
    height: 40vh;

    padding: 15px;
    padding-bottom: 20px;
  }

  div.wrapper {
    border: 4px solid white;
    border-radius: 20px;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  div.title {
    height: 15vh;

    background-color: white;
    background-image: var(--main-gradient);
    border-radius: 10vh;

    padding: 2vh 5vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    div.title {
      height: 10vh;
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    div.wrapper {
      flex-direction: column;
    }

    div.title {
      height: 8vh;
      padding: 1vh 3vw;
    }
  }

  @media screen and (max-width: 375px) {
    h1 {
      font-size: 2rem;
    }

    div.title {
      height: 8vh;
      padding: 1vh 3vw;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    div.wrapper {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1600px) {
    h1 {
      font-size: 5.5rem;
    }
  }
</style>
