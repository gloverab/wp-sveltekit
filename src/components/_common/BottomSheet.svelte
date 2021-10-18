<script lang='ts'>
  import { onDestroy, onMount } from 'svelte';
  import { cubicIn } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { hideMenuIcon, windowHeight } from '$stores/main';
  import Overlay from './Overlay.svelte';
  import LockScroll from './LockScroll.svelte';

  export let bottomButtons = []
  export let onHideSheet: () => void

  let scrollableElement
  let triggerAnimate = false

  const onClose = (() => {
    onHideSheet()
  })

  onMount(() => {
    document?.body?.classList?.add('noscroll')
    setTimeout(() => triggerAnimate = true, 0)
    hideMenuIcon.set(true)
  })

  onDestroy(() => {
    document?.body?.classList?.remove('noscroll')
    hideMenuIcon.set(false)
  })

  $: styleString = `transform: translate3d(0,${triggerAnimate ? `0px` : 'calc(100% - 24px)'},0)`
</script>

<LockScroll />

<Overlay
  all
  duration={200}
  onClick={onClose}
/>
<div
  bind:this={scrollableElement}
  id='scrollable-bottom-sheet'
  class='flex flex-col pt-4.5 {bottomButtons.length === 0 ? 'pb-4.5' : 'pb-20'}'
  style={styleString}
  out:fly={{ y: $windowHeight, duration: 200, opacity: 1, easing: cubicIn }}
>
  <div class='scrollable-content'>
    <slot></slot>
  </div>

  <div class='absolute bottom-0 w-full h-20 flex items-center px-4 space-x-2'>
    {#if bottomButtons.length > 0}
      {#each bottomButtons as button}
        <button
          disabled={button.disabled}
          on:click={button.onClick}
          class='
            {button.type === 'secondary' ? 'bg-white' : 'bg-indigo-800'}
            {button.type === 'secondary' ? 'text-indigo-800' : 'text-white'}
            {button.type === 'secondary' ? 'border-2 border-indigo-800' : 'text-white'}
            w-full
            h-12
            rounded-full
          '
        >
          {button.text}
        </button>
      {/each}
    {/if}
  </div>
</div>

<style>
  #scrollable-bottom-sheet {
    position: fixed;
    height: calc(100% - 24px);
    width: 100%;
    bottom: 0;
    background-color: white;
    border-radius: 24px 24px 0 0;
    z-index: 1201;
    transform: translate3d(0,0,0);
    transform: translate3d(0, 100%, 0);
    transition: .2s ease all;
  }

  #scrollable-bottom-sheet.show {
    transform: translate3d(0, 0, 0);
  }

  h5 {
    text-align: center;
  }

  #close-btn {
    position: absolute;
    padding: 25px;
    top: 0;
    right: 0;
  }

  .bottom-content {
    padding: 18px 18px 0 18px;
  }

  .scrollable-content {
    padding: 0 18px;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>