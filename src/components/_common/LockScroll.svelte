<script lang='ts'>
  import { browser } from "$app/env";

  import { onDestroy, onMount } from "svelte";
  
  let scrollYState
  let scrollY

  let interval

  const lockBody = () => {
    const body = document.getElementsByTagName('body')[0]
    body.style.position = 'fixed'
    body.style.marginTop = `-${scrollY}px`
    body.style.width = `100vw`
  }

  onMount(() => {
    if (browser) {
      scrollYState = scrollY
      lockBody()
      interval = setInterval(lockBody, 250)
    }
  })

  onDestroy(() => {
    if (browser) {
      clearInterval(interval)
      const body = document.getElementsByTagName('body')[0]
      body.style.position = 'initial'
      body.style.marginTop = `initial`
      body.style.width = `initial`

      window.scrollTo(0, scrollYState)
    }
  })
</script>

<svelte:window bind:scrollY={scrollY} />