<script lang="ts">
  import { params } from "svelte-spa-router";

  const id = $params.eventId;
  console.log(id);
</script>
