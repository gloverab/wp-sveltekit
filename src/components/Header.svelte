<script lang='ts'>
  import { page } from "$app/stores";
  import Logo from "$src/assets/Logo.svelte";
  import { mainRoutes } from "$src/constants";
  import NavLink from "./NavLink.svelte";
  import PublicLibrary from "./PublicLibrary.svelte";

  $:libPage = $page.url.pathname.includes('library')
</script>

<header class='fixed top-0 flex w-screen items-center justify-between h-15 px-4 {libPage ? 'bg-black' : 'bg-phish-purple'} shadow-md z-1000'>
  <a class='h-full flex items-center' href='/'>
    {#if libPage}
      <div class='h-3 md:h-7'>
        <PublicLibrary />
      </div>
    {:else}
      <Logo classes='h-full max-w-60' fill='fill-white' />
    {/if}
  </a>

  <div class='md:flex h-full hidden'>
    {#each mainRoutes as route}
      <NavLink
        {route}
        {libPage}
      />
    {/each}
  </div>
</header>