<script lang='ts'>
  import BearLogo from '$src/components/BearLogo.svelte';
  import * as posters from '$src/constants'
  import { windowHeight } from '$src/stores/main';
  import { onMount } from 'svelte';
  import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  let hideLoading = false
  let showSpinner = false

  onMount(() => {
    setTimeout(() => showSpinner = true, 500)
    setTimeout(() => hideLoading = true, 2000)
  })
</script>

<svelte:head>
  <title>Weird Phishes Public Library</title>
</svelte:head>

<div out:fly={{ y: $windowHeight, duration: 400, opacity: 1 }} class='flex bg-gray-500 min-h-screen p-3 space-x-3 {!hideLoading ? 'opacity-0' : 'opacity-100'}'>
  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.aeronaut1.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.soundcheck1Fb.img} />
    </div>
    
    <div class='lib-item'>
      <img src={posters.newburyportLp.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.haze2021.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.fallPoster.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.firstShow.img} />
    </div>
  </div>

  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.genericFb.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.fallPosterAlt.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.babys1.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.inRainbows.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.nubluClub.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.luckyStrike4up.img} />
    </div>
  </div>

  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.aeronaut1Alt.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.opus2021.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.babysCancelled.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.ehaze1.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.cruise.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.bowery.img} />
    </div>
  </div>
</div>

{#if !hideLoading}
  <div in:fly={{ y: $windowHeight, duration: 700, opacity: 1, easing: cubicOut }} out:fade={{ duration: 500 }} class='fixed top-0 left-0 z-900 w-screen h-screen flex items-center justify-center bg-gray-900'>
      <div transition:fade={{ duration: 300 }} class='w-30 h-30'>
        <div class='animate-pulse'>
          <BearLogo fill='white' />
        </div>
      </div>
  </div>
{/if}

<style>
  .lib-item {
    @apply opacity-90 hover:opacity-100;
  }
</style>