<script lang="ts">
  import { email, emailStatus } from "@lib/store";
  import { ChevronRight } from "../img";
  import { downloadCertificate } from "@lib/utils";
  import Spinner from "../img/spinner.svelte";

  export let eventId: string;

  async function handleEmailSubmit() {
    await downloadCertificate($email, eventId);
  }
</script>

<section>
  <h2>Correo Electrónico</h2>

  <label for="email">
    <input bind:value={$email} name="email" type="email" />
    {#if $emailStatus.isLoading}
      <Spinner />
    {:else}
      <ChevronRight on:click={handleEmailSubmit} />
    {/if}
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

    /* padding-top: 2vh; */

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

  @media screen and (min-width: 1024px) {
    div.message {
      width: 40vw;
    }
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

  @media screen and (min-width: 1600px) {
    h2 {
      font-size: 3rem;
    }

    input {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
      height: 2.5rem;
    }

    p.second {
      font-size: 3rem;
      height: 2.5rem;
    }

    div.message {
      width: 60vw;
    }
  }
</style>
