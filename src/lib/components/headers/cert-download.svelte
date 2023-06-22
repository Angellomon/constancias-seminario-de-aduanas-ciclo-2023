<script>
  import { MainLogoTransparent } from "../img";
</script>

<header>
  <div class="wrapper">
    <MainLogoTransparent absolute />

    <div class="title">
      <h1>CONSTANCIAS</h1>
    </div>

    <div class="border" />
  </div>
</header>

<style>
  header {
    height: 50vh;

    padding: 15px;
    padding-bottom: 20px;

    position: relative;
  }

  h1 {
    margin: 0;
  }

  div.border {
    position: absolute;
    top: 5;
    left: 5;
    right: 5;
    bottom: 5;
    z-index: 0;

    width: 95%;
    height: 85%;

    border: 4px solid white;
    border-radius: 20px;
  }

  div.title {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;

    /* margin-top: -5vh; */
    width: 100%;
    height: 20vh;

    background-color: var(--main-green-solid);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
  }

  @media screen and (min-width: 1600px) {
    h1 {
      font-size: 5rem;
    }
  }
</style>
