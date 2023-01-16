<script lang='ts'>
  import Wptbm from "$src/components/Wptbm.svelte";
  import { onMount, onDestroy } from "svelte";

  let maxHeightNeeded

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
      <div style="max-height: {maxHeightNeeded}px" class='w-1/2 min-h-screen overflow-hidden'>
        <img class='' src='https://www.dropbox.com/s/i82wqiw2ijhlhwe/ticket-group-7-sm.png?raw=1' />
      </div>

      <div bind:clientHeight={maxHeightNeeded} class='flex-1 flex flex-col items-center pt-15 md:p-15 relative min-w-150'>
        <div class='mb-12'>
          <h1 class='text-white font-display text-8xl uppercase text-center leading-3'>Weird Phishes</h1>
          <h1 class='text-white font-display text-7xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
        </div>
        <Wptbm {isiOs} />
      </div>
    </div>
  </div>

  <div style="background-image: url('https://www.dropbox.com/s/i82wqiw2ijhlhwe/ticket-group-7-sm.png?raw=1')" class='bg-cover block sm:hidden'>
    <div class='relative p-5 z-1 bg-black bg-opacity-90'>
      <div class='mb-4'>
        <h1 class='text-white font-display text-6xl uppercase text-center leading-3'>Weird Phishes</h1>
        <h1 class='text-white font-display text-4xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
      </div>
      <Wptbm {isiOs} />
    </div>
    <img class='' src='https://www.dropbox.com/s/44ydhtr1mmzputj/ticketstub-mock-1-sm.png?raw=1' />
  </div>
</div>

