<script lang='ts'>
  import 'virtual:windi.css';
  import Overlay from "$components/_common/Overlay.svelte";
  import { page } from '$app/stores';
  import { numDrawersOut, showMobileMenu, windowHeight, hideMenuIcon } from "$stores/main";
  import Header from "$components/Header.svelte";
  import MenuIcon from "$components/MenuIcon.svelte";
  import Drawer from "$src/components/_common/Drawer.svelte";
  import { mainRoutes } from '$src/constants';
  import Logo from '$src/assets/Logo.svelte';
  import BearLogo from '$src/components/BearLogo.svelte';

  const handleShowMobileMenu = () => {
    if ($showMobileMenu) {
      showMobileMenu.set(false)
    } else {
      showMobileMenu.set(true)
    }
  }

</script>

<svelte:head>
  <title>Weird Phishes | Radiohead + Phish = Something Entirely New</title>
  <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script>
  <script src="https://kit.fontawesome.com/2a900224f0.js" crossorigin="anonymous"></script>
  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e2b3a4569acd768a57c148cdf/00deffdd8d32dcfbd972ef52e.js");</script>
</svelte:head>

<svelte:window bind:innerHeight={$windowHeight} />

<Header />

<button on:click={handleShowMobileMenu} class='fixed md:hidden h-17 flex items-center top-0 right-0 {$numDrawersOut > 0 && !$hideMenuIcon ? 'z-2000' : 'z-1000'}'>
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

<div class:removeMarginsAndPadding={$page.path.includes('library')} class:marginsAndPadding={!$page.path.includes('library')} class='min-h-screen pb-12 bg-gray-100 shadow-lg'>
  <slot />
  <div class='{$page.path.includes('shows') ? 'block' : 'hidden'}'>
    <h2>More shows are coming very soon!</h2>
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

<footer class='flex items-center justify-between h-20 bg-white border-t px-4'>
  <span class='text-xs'>COPYRIGHT © 2021  ·  WEIRD PHISHES</span>
  <span class='text-xs'>DESIGNED & BUILT WITH ❤️ BY <a class='font-medium' href='#'>ALEX GLOVER</a></span>
</footer>

<style global>
 h2 {
   @apply font-semibold text-lg;
 }

 .removeMarginsAndPadding {
   @apply m-0 p-0;
 }

 .marginsAndPadding {
   @apply md:mx-20 lg:mx-40 p-4 md:p-8;
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