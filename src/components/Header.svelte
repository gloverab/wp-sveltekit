<script lang='ts'>
import { page } from "$app/stores";
import Logo from "$src/assets/Logo.svelte";
import { mainRoutes } from "$src/constants";
import PublicLibrary from "./PublicLibrary.svelte";


$:libPage = $page.path.includes('library')
</script>

<header class='fixed top-0 flex w-screen overflow-x-scroll scrollbar-hide items-center justify-between {libPage ? 'h-15' : 'h-17'} px-4 {libPage ? 'bg-black' : 'bg-white'} shadow-md z-1000'>
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
      <a sveltekit:prefetch class='flex h-full px-5 items-center {libPage ? 'text-white' : 'text-black'}' href={route.href}>
        <span>
          {route.name}
        </span>
      </a>
    {/each}
  </div>
</header>