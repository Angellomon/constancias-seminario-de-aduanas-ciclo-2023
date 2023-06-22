<script>
  import { ChevronRight } from "../img";
</script>

<section>
  <h2>Correo Electrónico</h2>

  <label for="email">
    <input name="email" type="email" />
    <ChevronRight />
  </label>

  <div class="message">
    <p class="first">
      Ingresa el correo electrónico con el cual te registraste
    </p>
    <p class="second">al Seminario Interactivo de Aduanas 2023</p>
  </div>
</section>

<style>
  section {
    height: 60vh;

    padding-top: 2vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  div.message {
    margin-top: 5vh;
    /* margin-bottom: 5vh; */
    /* text-justify: inter-character; */
    text-align: justify;
    vertical-align: middle;

    width: 60vw;
  }

  p {
    margin: 0;
    height: 1.2rem;

    /* width: 100%; */
  }

  p::after {
    content: "";
    display: inline-block;
    width: 100%;
  }

  p.second {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    p {
      height: 2.2rem;
    }

    div.message {
      width: 70vw;
    }
  }
  @media screen and (max-width: 375px) {
    p {
      height: 3rem;
    }
  }
</style>
