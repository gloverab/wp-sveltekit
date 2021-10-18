<script lang='ts'>
  import 'virtual:windi.css';
  import Overlay from "$components/_common/Overlay.svelte";
  import { numDrawersOut, showMobileMenu, windowHeight, hideMenuIcon } from "$stores/main";
  import Header from "$components/Header.svelte";
  import MenuIcon from "$components/MenuIcon.svelte";
  import Drawer from "$src/components/_common/Drawer.svelte";

  const handleShowMobileMenu = () => {
    if ($showMobileMenu) {
      showMobileMenu.set(false)
    } else {
      showMobileMenu.set(true)
    }
  }

</script>

<svelte:window bind:innerHeight={$windowHeight} />

<Header />

<button on:click={handleShowMobileMenu} class='fixed h-17 flex items-center top-0 right-0 {$numDrawersOut > 0 && !$hideMenuIcon ? 'z-2000' : 'z-1000'}'>
  <MenuIcon
    isActive={$showMobileMenu}
  />
</button>

{#if $showMobileMenu}
  <Overlay all onClick={() => showMobileMenu.set(false)} />
  <Drawer />
{/if}