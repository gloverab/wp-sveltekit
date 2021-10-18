<script lang='ts'>
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import LockScroll from './LockScroll.svelte';

  export let
    all = false,
    allButHeader = false,
    onClick: () => void,
    duration = 150,
    noShade = false,
    withBlur = false,
    whiteFill = false

  let applyBlur = false

  const handleClick = () => {
    applyBlur = false
    onClick()
  }

  // Apply blur after mount to reduce laggy experience
  // onMount(() => setTimeout(() => applyBlur =  true, duration))
</script>

<LockScroll />
<div
  transition:fade="{{duration, easing: cubicOut}}"
  on:introend="{() => applyBlur = true}"
  on:outrostart="{() => applyBlur = false}"
  class='overlay'
  id='overlay'
  class:whiteFill
  class:withBlur
  class:applyBlur
  class:all
  class:allButHeader
  class:noShade
  on:click={handleClick}
/>

<style>
  .overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
  }

  .overlay.all {
      z-index: 1001;
    }

  .overlay.allButHeader {
    z-index: 999;
  }

  .overlay.whiteFill {
    background-color: white;
  }

  .overlay.noShade {
    background-color: transparent;
  }

  .overlay.withBlur.applyBlur:not(.whiteFill) {
    transition: .1s ease all;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
</style>