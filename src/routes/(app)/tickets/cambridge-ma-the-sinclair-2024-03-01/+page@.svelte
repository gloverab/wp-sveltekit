<script lang='ts'>
  import Wptbm from "$src/components/Wptbm.svelte";
  import dayjs from "dayjs/esm";
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

  const images = {
    single: 'https://www.dropbox.com/scl/fi/sipjxruta8s6zr0cbixcd/stub-single-min.png?rlkey=yc4wj11qqebaa48wr1abpno6c&raw=1',
    group: 'https://www.dropbox.com/scl/fi/vc4ojh7wszwg3nc6ki4qt/stub-group-min.png?rlkey=s8yz7nuupy8qk8dvt7eij96ky&raw=1'
  }

  const showInfo = {
    date: dayjs('2024-03-01'),
    venue: 'The Sinclair',
    city: 'Cambridge',
    state: 'MA',
    doorTime: '7pm',
    showTime: '8pm',
    titleHTML: `<h3 class='font-medium mb-2'>Weird Phishes Freeform Set <strong>opening for Prince/Bowie</strong> at <strong>The Sinclair</strong></h3>`,
    price: 20
  }

  const ticketSource = {
    name: "AXS",
    link: 'https://www.axs.com/events/516368/prince-bowie-tickets?skin=sinclair'
  }

  const ticketsRemaining = 99
</script>

<svelte:head>
  <title>Weird Phishes Tickets By Mail - Prince/Bowie and Weird Phishes at The Sinclair in Cambridge, MA</title>
  <meta property=’og:image’ content={images.single}/>
</svelte:head>

<div class='bg-black min-h-screen'>
  <div class='hidden md:block'>
    <div class='w-screen flex'>
      <div style="max-height: {maxHeightNeeded}px" class='w-1/2 min-h-screen overflow-hidden'>
        <img class='' src={images.group} />
      </div>

      <div bind:clientHeight={maxHeightNeeded} class='flex-1 flex flex-col items-center pt-15 md:p-15 relative min-w-150'>
        <div class='mb-12'>
          <h1 class='text-white font-display text-8xl uppercase text-center leading-3'>Weird Phishes</h1>
          <h1 class='text-white font-display text-7xl uppercase text-center tracking-5px'>Tickets By Mail</h1>
        </div>
        <Wptbm
          {isiOs}
          countDownDate={new Date("Feb 19, 2024 18:00:00").getTime()}
          {ticketSource}
          {showInfo}
          {ticketsRemaining}
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
        countDownDate={new Date("Feb 20, 2024 18:00:00").getTime()}
        {ticketSource}
        {showInfo}
        {ticketsRemaining}
      />
    </div>
    <div class='flex w-full justify-center'>
      <div class='p-5 pt-0 bg-black sm:max-w-130 sm:px-0'>
        <img class='' src={images.single} />
      </div>
    </div>
  </div>
</div>

