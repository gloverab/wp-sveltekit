<script lang='ts'>
  import { page } from "$app/stores";
  import Logo from "$src/assets/Logo.svelte";
  import { mainRoutes } from "$src/constants";
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
      <a sveltekit:prefetch target={route.targetBlank ? '_blank' : ''} class='flex relative h-full px-5 items-center {libPage ? 'text-white' : 'text-white'} {!$page.url.pathname.includes(route.href) ? 'hover:text-phish-orange' : ''} group' href={route.href}>
        <span>
          {route.name}
        </span>
        <div class:scale-y-100={$page.url.pathname.includes(route.href)} class='absolute bottom-0 left-0 w-full {libPage ? 'bg-white' : 'bg-phish-purple'} h-1 transform scale-y-0 duration-200 origin-bottom {!$page.url.pathname.includes(route.href) ? 'group-hover:bg-phish-orange' : ''} group-hover:scale-y-100' />
      </a>
    {/each}
  </div>
</header>