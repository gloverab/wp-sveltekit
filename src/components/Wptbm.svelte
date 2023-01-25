<script lang='ts'>
  export let isiOs

  let venmoText = "Buy Tickets via Venmo"
  let showVenmo = false
  let animateVenmo = false

  const handleClick = (linkType) => {
    fbq('trackCustom', 'WPTBMClick', { type: linkType })

    // const data = {
    //   ok: true
    // }
    // fetch('/api/tickets', {
    //   method: "POST",
    //   body: JSON.stringify(data)
    // })
  }

  const handleDesktopVenmoClick = async () => {
    handleClick('venmo-desktop')
    showVenmo = true
    setTimeout(() => animateVenmo = true)
  }

  const hideVenmo = async () => {
    animateVenmo = false
    setTimeout(() => showVenmo = false, 300)
  }
</script>

<div class='w-full border-1 border-grey-light rounded-xl sm:max-w-130 p-4 sm:p-10'>
  <div class='mb-4'>
    <h3 class='text-white text-2xl font-semibold'>WELCOME TO WPTBM<span class='hidden sm:inline'>&nbsp;| No-fee Tickets</span></h3>
    <h3 class='text-white text-2xl font-semibold uppercase sm:hidden'>No-fee Tickets</h3>
  </div>
  <p class='text-white text-sm mb-2'>Ticket fees suck. And going to the box office ahead of time isn't always convenient.</p>
  <p class='text-white text-sm mb-2'>To combat that, we went down to the box office over at Crystal Ballroom in Somerville, secured some barcodes, and put them onto physical tickets with exclusive artwork for this show only.</p>
  <p class='text-white text-sm mb-2 line-spa'>You can order them exclusively through our webstore or by venmoing us (include your address in the comment) and we'll mail them to you, simple as that.</p>
  <p class='text-white text-sm mb-2 line-spa'>No service fees, no shipping fees, no convenience fees. Plus as an added bonus, you'll have a small keepsake from the show.</p>
  <p class='text-white text-lg font-semibold text'>$20.00/ea + $0.00 Fees</p>
  <p class='text-white font-semibold text'>Only until January 26</p>
  <p class='text-orange-600 text-sm mb-6'>{"14 Remaining"}</p>
  <div class='mb-4'>
    <a on:click={() => handleClick('shopify')} class='purchase-button mb-2 bg-green-600 flex justify-center hover:bg-green-500' href='https://store.weirdphishes.com/products/wptbm-kid-a-at-crystal-ballroom-somerville-ma' target='blank'>
      <span class='text-white'>Buy Tickets via Shopify</span>
    </a>
    <div class='hidden sm:block'>
      <button on:click={handleDesktopVenmoClick} class='w-full purchase-button bg-blue-600 flex justify-center hover:bg-blue-500'>
        <span class='text-white'>{venmoText}</span>
      </button>
    </div>
    <div class='sm:hidden'>
      <a on:click={() => handleClick('venmo-mobile')} class='flex purchase-button bg-blue-600 justify-center hover:bg-blue-500' href='{isiOs ? "venmo://paycharge?txn=pay&recipients=weird-phishes&text=Your%20Address" : "intent://paycharge?txn=pay&recipients=weird-phishes#Intent;package=com.venmo;scheme=venmo;end"}' target='blank'>
        <span class='text-white'>Buy Tickets via Venmo</span>
      </a>
    </div>
    <div class='flex justify-center'>
      <span class='text-white text-xs'>Please remember to include your mailing address</span>
    </div>
  </div>
  <div class='mb-4'>
    <a on:click={() => handleClick('ticketmaster')} class='underline text-blue-800' href='https://www.ticketmaster.com/weird-phishes-somerville-massachusetts-02-03-2023/event/01005D88E2EC56DB' target='blank'>
      Or buy from Ticketmaster⇗
    </a>
  </div>
</div>

{#if showVenmo}
  <div class='w-screen h-screen flex justify-center items-center z-2 fixed top-0 left-0'>
    <div on:click={hideVenmo} class='absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 {animateVenmo ? "opacity-100" : "opacity-0"} duration-300' />

    <div class='relative bg-white p-8 rounded-md max-w-100 transform {animateVenmo ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"} duration-300'>
      <h2 class='text-xl font-semibold'>It looks like you're on Desktop</h2>
      <p class='mb-4'>Scan the QR code below with your phone and Venmo us $20 per ticket (@weird-phishes). Please don't forget to include your mailing address in the note.</p>
      <div class='w-full flex flex-col items-center justify-center'>
        <div class='w-50 h-50'>
          <img src="https://www.dropbox.com/s/b1w402d3kg0mahb/venmo-code.jpeg?raw=1" />
        </div>
        <span>@weird-phishes on Venmo</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .purchase-button {
    @apply flex items-center p-2 rounded-sm;
  }
</style>