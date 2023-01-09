<script lang='ts'>
  import { page } from "$app/stores";

  export let route
  export let libPage = false
</script>

<a target={route.targetBlank ? '_blank' : ''} class='flex relative h-full px-5 items-center {libPage ? 'text-white' : 'text-white'} {!$page.url.pathname.includes(route.href) ? 'hover:text-phish-orange' : ''} group' href={route.href}>
  <span>
    {route.name}
  </span>
  <div
    class:scale-y-100={$page.url.pathname.includes(route.href)}
    class='absolute
      bottom-0
      left-0
      w-full
      {libPage ? 'bg-white' : 'bg-phish-purple'}
      h-1
      transform
      scale-y-0
      duration-200
      origin-bottom
      {!$page.url.pathname.includes(route.href) ? 'group-hover:bg-phish-orange' : ''}
      group-hover:scale-y-100' />
</a>
