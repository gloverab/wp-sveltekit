<script lang='ts'>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onDestroy, onMount } from 'svelte';
  import { numDrawersOut } from '$src/stores/main';

  onMount(() => {
    numDrawersOut.update(n => n + 1)
  })

  onDestroy(() => {
    numDrawersOut.update(n => n - 1)
  })
</script>

<div
  transition:fly={{duration: 300, x: 500, y: 0, opacity: 1, easing: cubicOut }}
  id='mobile-wrapper'
  class='wrapper'>
  <slot />
</div>
  
<style>
  .wrapper {
    @apply shadow-lg;
    background-color: white;
    box-sizing: border-box;
    position: fixed;
    border-radius: 24px 0 0 0;
    width: calc(100vw - 50px);
    height: 100%;
    max-width: 334px;
    right: 0;
    top: 0;
    z-index: 1100;
  }

  @media screen and (max-width: 350px) {
    .wrapper {
      width: 100%;
      left: 0;
      max-width: none;
    }
  }

  @media screen and (min-width: 550px) {
    .wrapper {
      max-width: 473px;
    }
  }
</style>