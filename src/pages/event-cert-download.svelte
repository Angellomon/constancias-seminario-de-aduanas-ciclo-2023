<script lang="ts">
  import { CertDownloadContent } from "@lib/components/content";
  import { MainFooter } from "@lib/components/footer";
  import { HeaderCertDownload } from "@lib/components/headers";

  export let params: any = {};

  const id = params.eventId;
  console.log(id);
</script>

<main>
  <HeaderCertDownload />
  <CertDownloadContent />
  <MainFooter />
</main>

<style>
</style>
