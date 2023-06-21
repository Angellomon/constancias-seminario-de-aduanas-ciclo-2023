<script lang="ts">
  import Router from "svelte-spa-router";
  import { EventSelectPage } from "@pages";
  import "./app.css";

  const routes = {
    "/": EventSelectPage,
  };
</script>

<Router {routes} />
