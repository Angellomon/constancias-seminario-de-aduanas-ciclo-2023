<script lang="ts">
  import { CertDownloadContent } from "@lib/components/content";
  import { MainFooter } from "@lib/components/footer";
  import { HeaderCertDownload } from "@lib/components/headers";

  export let params: any = {};

  const eventId = params.eventId;
  console.log(eventId);
</script>

<main>
  <HeaderCertDownload />
  <CertDownloadContent {eventId} />
  <MainFooter />
</main>

<style>
</style>
