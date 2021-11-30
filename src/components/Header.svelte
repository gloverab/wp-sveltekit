<script lang='ts'>
import { page } from "$app/stores";
import Logo from "$src/assets/Logo.svelte";
import { mainRoutes } from "$src/constants";
import PublicLibrary from "./PublicLibrary.svelte";


$:libPage = $page.path.includes('library')
</script>

<header class='fixed top-0 flex w-screen overflow-x-scroll scrollbar-hide items-center justify-between h-15 px-4 {libPage ? 'bg-black' : 'bg-white'} shadow-md z-1000'>
  <a class='h-full flex items-center' href='/'>
    {#if libPage}
      <div class='h-3 md:h-7'>
        <PublicLibrary />
      </div>
    {:else}
      <Logo classes='h-full' fill='black' />
    {/if}
  </a>

  <div class='md:flex h-full hidden'>
    {#each mainRoutes as route}
      <a sveltekit:prefetch class='flex relative h-full px-5 items-center {libPage ? 'text-white' : 'text-phish-purple'} hover:text-phish-orange group' href={route.href}>
        <span>
          {route.name}
        </span>
        <div class='absolute bottom-0 left-0 w-full bg-phish-orange h-1 transform scale-y-0 duration-200 origin-bottom group-hover:scale-y-100' />
      </a>
    {/each}
  </div>
</header>