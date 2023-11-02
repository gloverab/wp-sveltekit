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

<svelte:head>
  <title>Weird Phishes Tickets By Mail - In Rainbows at Middle East in Cambridge, MA</title>
  <meta property=’og:image’ content='https://www.dropbox.com/scl/fi/dn92ybxjlfdow99tx3ol4/single-ticketstub-xs-compressed.png?rlkey=kcgpqcwgh81fbgt3fsj565vtx&raw=1'/>
</svelte:head>

<div class='bg-black min-h-screen'>
  <div class='hidden md:block'>
    <div class='w-screen flex'>
      <div style="max-height: {maxHeightNeeded}px" class='w-1/2 min-h-screen overflow-hidden'>
        <img class='' src='https://www.dropbox.com/scl/fi/oah95wl60273jp5ceqa26/4-stubs-compressed.png?rlkey=ytcun5y2hqrg062pp7aroe7hw&raw=1' />
      </div>

      <div bind:clientHeight={maxHeightNeeded} class='flex-1 flex flex-col items-center pt-15 md:p-15 relative min-w-150'>
        <div class='mb-12'>
          <h1 class='text-white font-display text-8xl uppercase text-center leading-3'>Weird Phishes</h1>
          <h1 class='text-white font-display text-7xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
        </div>
        <Wptbm
          {isiOs}
          countDownDate={new Date("Nov 5, 2023 18:00:00").getTime()}
        />
      </div>
    </div>
  </div>

  <div class='bg-cover block md:hidden'>
    <div class='relative p-5 z-1 bg-black bg-opacity-90'>
      <div class='mb-2'>
        <h1 class='text-white font-display text-6xl uppercase text-center leading-3'>Weird Phishes</h1>
        <h1 class='text-white font-display text-4xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
      </div>
      <Wptbm
        {isiOs}
        countDownDate={new Date("Nov 5, 2023 18:00:00").getTime()}
      />
    </div>
    <div class='flex w-full justify-center'>
      <div class='p-5 pt-0 bg-black sm:max-w-130 sm:px-0'>
        <img class='' src='https://www.dropbox.com/scl/fi/dn92ybxjlfdow99tx3ol4/single-ticketstub-xs-compressed.png?rlkey=kcgpqcwgh81fbgt3fsj565vtx&raw=1' />
      </div>
    </div>
  </div>
</div>

