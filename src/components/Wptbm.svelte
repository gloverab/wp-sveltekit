<script lang='ts'>
  export let isiOs
</script>

<div class='w-full border-1 border-grey-light rounded-xl sm:max-w-130 p-4 sm:p-10'>
  <div class='mb-4'>
    <h3 class='text-white text-2xl font-semibold uppercase'>Welcome to W-PTBM<span class='hidden sm:inline'>&nbsp;| No-fee Tickets</span></h3>
    <h3 class='text-white text-2xl font-semibold uppercase sm:hidden'>No-fee Tickets</h3>
  </div>
  <p class='text-white text-sm mb-2'>Ticket fees suck. And going to the box office ahead of time isn't always convenient.</p>
  <p class='text-white text-sm mb-2'>So we've gone down to the box office over at Crystal Ballroom in Somerville, secured some barcodes, and put them onto physical tickets with exclusive artwork for this show only.</p>
  <p class='text-white text-sm mb-2 line-spa'>You can order them exclusively through our webstore or by venmoing us $20.00/per ticket (include your address in the comment) and we'll mail them to you, simple as that.<br>No service fees, no shipping fees, no convenience fees - just the way music should be. Plus as an added bonus, you'll have a small keepsake of the time you spent enjoying music with like-minded folks.</p>
  <p class='text-white font-semibold text'>$20.00/ea + $0.00 fees</p>
  <p class='text-white font-semibold text'>Only until January 24</p>
  <p class='text-green-600 text-sm mb-6'>{"<100 Remaining"}</p>
  <div class='mb-4'>
    <a class='purchase-button mb-2 bg-green-600 flex justify-center hover:bg-green-500' href='https://40625f.myshopify.com/products/wptbm-kid-a-at-crystal-ballroom-somerville-ma' target='blank'>
      <span class='text-white'>Buy Tickets via Shopify</span>
    </a>
    <a class='purchase-button bg-blue-600 flex justify-center hover:bg-blue-500' href='{isiOs ? "venmo://paycharge?txn=pay&recipients=weird-phishes&text=Your%20Address" : "intent://paycharge?txn=pay&recipients=weird-phishes#Intent;package=com.venmo;scheme=venmo;end"}' target='blank'>
      <span class='text-white'>Buy Tickets via Venmo</span>
    </a>
    <div class='flex justify-center'>
      <span class='text-white text-xs'>Please remember to include your mailing address</span>
    </div>
  </div>
  <div class='mb-4'>
    <a class='underline text-blue-800' href='https://www.ticketmaster.com/weird-phishes-somerville-massachusetts-02-03-2023/event/01005D88E2EC56DB' target='blank'>
      Or buy from Ticketmaster⇗
    </a>
  </div>
</div>

<style>
  .purchase-button {
    @apply flex items-center p-2 rounded-sm;
  }
</style>