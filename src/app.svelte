<script lang="ts">
  import Router from "svelte-spa-router";
  import { EventCertDownloadPage, EventSelectPage } from "@pages";
  import "./app.css";

  const routes = {
    "/": EventSelectPage,
    "/event/:eventId": EventCertDownloadPage,
  };
</script>

<Router {routes} />
