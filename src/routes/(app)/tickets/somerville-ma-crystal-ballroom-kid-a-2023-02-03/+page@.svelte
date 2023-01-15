<script lang='ts'>
  import Wptbm from "$src/components/Wptbm.svelte";
import { onMount, onDestroy } from "svelte";

  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
  let isiOs

  onMount(() => {
    if (window) {
      isiOs = iOS()
      document.body.classList.remove('pt-15')
    }
  })
</script>

<div class='bg-black min-h-screen'>
  <div class='hidden sm:block'>
    <div class='w-screen flex'>
      <div class='max-h-full w-1/2'>
        <img class='' src='https://www.dropbox.com/s/i82wqiw2ijhlhwe/ticket-group-7-sm.png?raw=1' />
      </div>

      <div class='flex-1 flex flex-col items-center p-15 relative min-w-150'>
        <div class='mb-12'>
          <!-- <h1 class='text-white text-center uppercase tracking-widest'>Welcome to</h1> -->
          <h1 class='text-white font-display text-8xl uppercase text-center leading-3'>Weird Phishes</h1>
          <h1 class='text-white font-display text-7xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
        </div>
        <Wptbm {isiOs} />
      </div>
    </div>
  </div>

  <div class='block sm:hidden'>
    <div class='p-5'>
      <div class='mb-4'>
        <!-- <h1 class='text-white text-center uppercase tracking-widest'>Welcome to</h1> -->
        <h1 class='text-white font-display text-6xl uppercase text-center leading-3'>Weird Phishes</h1>
        <h1 class='text-white font-display text-4xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
      </div>
      <Wptbm {isiOs} />
    </div>
  </div>
</div>

