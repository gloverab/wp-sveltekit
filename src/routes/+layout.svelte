<script lang='ts'>
  import 'virtual:windi.css';
  import BearLogo from '$src/components/BearLogo.svelte';
  import Overlay from "$components/_common/Overlay.svelte";
  import { page } from '$app/stores';
  import { numDrawersOut, showMobileMenu, windowHeight, hideMenuIcon, initialLoad } from "$stores/main";
  import Header from "$components/Header.svelte";
  import MenuIcon from "$components/MenuIcon.svelte";
  import Drawer from "$src/components/_common/Drawer.svelte";
  import { mainRoutes } from '$src/constants';
  import Logo from '$src/assets/Logo.svelte';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  let mounted = false
  let displayContent = false

  const handleShowMobileMenu = () => {
    if ($showMobileMenu) {
      showMobileMenu.set(false)
    } else {
      showMobileMenu.set(true)
    }
  }

  onMount(() => {
    mounted = true
    setTimeout(() => displayContent = true, 500)
    setTimeout(() => initialLoad.set(false), 1500)
  })

</script>

<svelte:head>
  <title>Weird Phishes | Radiohead + Phish = Something Entirely New</title>
  <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script>
  <script src="https://kit.fontawesome.com/2a900224f0.js" crossorigin="anonymous"></script>
</svelte:head>

<svelte:window bind:innerHeight={$windowHeight} />

<Header />

<button on:click={handleShowMobileMenu} class='fixed md:hidden h-15 flex items-center top-0 right-0 {$numDrawersOut > 0 && !$hideMenuIcon ? 'z-2000' : 'z-1000'}'>
  <MenuIcon
    isActive={$showMobileMenu}
  />
</button>

{#if $showMobileMenu}
  <Overlay all onClick={() => showMobileMenu.set(false)} />
  <Drawer>
    <div class='flex flex-col h-full p-8 pt-5.5'>
      <a href='/' class='w-5/6 py-3 mb-6'>
        <Logo />
      </a>
      {#each mainRoutes as route, i}
        <a sveltekit:prefetch on:click={() => showMobileMenu.set(false)} class='flex flex-shrink-0 w-full py-3 {i + 1 !== mainRoutes.length ? 'border-b' : '' } text-xl font-medium items-center text-black' href={route.href}>
          <span>
            {route.name}
          </span>
        </a>
      {/each}
      <div class='w-full h-full flex justify-center items-end'>
        <div class='w-20'>
          <BearLogo />
        </div>
      </div>
    </div>
  </Drawer>
{/if}

<div class='hidden' />


<div class='min-h-[calc(100vh_-_8.75rem)] pb-12 flex justify-center'>
  <div class='duration-150' class:opacity-0={!displayContent} class:opacity-100={displayContent} class:removeMarginsAndPadding={$page.url.pathname.includes('library')} class:marginsAndPadding={!$page.url.pathname.includes('library')}>
    <slot />
    <div class='{$page.url.pathname.includes('shows') ? 'block' : 'hidden'} bg-phish-purple w-full h-1' />
    <span class='{$page.url.pathname.includes('shows') ? 'block' : 'hidden'} text-sm uppercase font-light tracking-wider mb-2'>Upcoming Shows</span>
    <div class='{$page.url.pathname.includes('shows') ? 'block' : 'hidden'} bg-white w-full border-1 shadow-sm p-2.5'>
      <a
        class="bit-widget-initializer"
        data-artist-name="id_14950026"
        data-font="Helvetica"
        data-language="en"
        data-display-details="false"
        data-text-color="#000000"
        data-background-color="#ffffff"
        data-separator-color="#DDDDDD"
        data-popup-background-color="#ffffff"
        data-link-color="#A2A2A2"
        data-link-text-color="#FFFFFF"
      ></a>
    </div>
  </div>
</div>

<footer class='flex items-center justify-between h-20 bg-white border-t px-4'>
  <span class='text-xs'>COPYRIGHT © 2021  ·  WEIRD PHISHES</span>
  <span class='text-xs'>DESIGNED & BUILT WITH ❤️ BY <a class='font-medium' href='#'>ALEX GLOVER</a></span>
</footer>

{#if $initialLoad && mounted}
  <div in:fly={{ y: $windowHeight, duration: 700, opacity: 1, easing: cubicOut }} out:fade={{ duration: 500 }} class='fixed top-0 left-0 z-900 w-screen h-screen flex items-center justify-center bg-white'>
      <div transition:fade={{ duration: 300 }} class='w-30 h-30'>
        <div class='animate-pulse'>
          <BearLogo fill='fill-phish-purple' />
        </div>
      </div>
  </div>
{/if}

<style global>
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  h2 {
    @apply font-semibold text-lg;
  }

  .removeMarginsAndPadding {
    @apply m-0 p-0;
  }

  .marginsAndPadding {
    @apply p-4.5 md:p-0 md:w-187 lg:w-240;
  }

  a.link {
    @apply text-blue-800 underline;
  }

  .btn {
    @apply px-5 py-3 bg-blue-900 text-white rounded-lg;
  }

  .btn.disabled {
    @apply cursor-default opacity-70;
  }
</style>