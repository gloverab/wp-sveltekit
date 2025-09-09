<script lang="ts">
  import ShowItem from "$src/components/ShowItem.svelte";
  import { shows } from "$src/stores/main";
  import { onMount } from "svelte";

  const apiUrl = `https://rest.bandsintown.com/artists/id_14950026/events/?app_id=f6a0be4677f3f583fa0bfa26d9e3525c`;

  let loading = false;

  const getEvents = async () => {
    loading = true;
    try {
      const resp = await fetch(`${apiUrl}&date=upcoming`);
      const data = await resp.json();
      console.log(data);
      shows.set(data);
    } catch (err) {
      console.log(err);
    }
  };

  onMount(() => {
    getEvents();
  });
</script>

<svelte:head>
  <title>Weird Phishes | Radiohead + Phish | Upcoming Shows</title>
</svelte:head>

<div class="h-30 md:h-80 overflow-hidden md:flex items-center hidden mt-6 mb-3">
  <img
    src="https://www.dropbox.com/s/lxhqvnpff72mmc6/wp-lucky-fb-generic.png?raw=1"
  />
</div>

<div class="h-25 md:hidden mb-4 flex-shrink-0">
  <img
    class="h-full"
    alt="circle logo"
    src="https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1"
  />
</div>

<div class="w-full">
  <div class="mb-6">
    <div class="bg-phish-purple w-full h-1" />
    <span class="text-sm uppercase font-light tracking-wider mb-2"
      >Upcoming Shows</span
    >
  </div>
  <div class="bg-white w-full border-1 shadow-sm">
    {#if $shows?.length > 0}
      {#each $shows as show}
        <ShowItem {show} />
      {/each}
    {/if}
  </div>
</div>

<style global>
  .bit-rsvp-container {
    display: none !important;
  }
</style>
