<script lang="ts">
  interface Props {
    date: string;
    price: string;
    topText: string;
    additionalText?: string;
  }

  let { date, price, topText, additionalText }: Props = $props();

  let showVenmo = $state(false);
  let animateVenmo = $state(false);

  const handleClick = (linkType: string) => {
    fbq("trackCustom", "WPTBMClick", { type: linkType });
  };

  const hideVenmo = () => {
    animateVenmo = false;
    setTimeout(() => (showVenmo = false), 300);
  };

  const handleDesktopVenmoClick = async () => {
    handleClick("venmo-desktop");
    showVenmo = true;
    setTimeout(() => (animateVenmo = true));
  };
</script>

<div class="flex-1 font-phish">
  <div style="background-color: #E4DCCF;" class="w-full px-4 rounded-t-lg">
    <h3 class="text-center">{topText}</h3>
  </div>
  <div class="bg-gray-800 space-y-2 p-2">
    <div>
      <p style="color: #E4DCCF;" class="text-center font-semibold">
        {date} | {price}
      </p>
      <p style="color: #E4DCCF;" class="text-center">10:30pm - Late</p>
      {#if additionalText}
        <p style="color: #E4DCCF;" class="text-center text-sm px-4 mb-2">
          {additionalText}
        </p>
      {/if}
      <p style="color: #E4DCCF;" class="text-center text-sm">
        Buy Tickets Via:
      </p>
    </div>
    <div class="flex px-4 space-x-2 justify-center">
      <button
        onclick={handleDesktopVenmoClick}
        class="purchase-button bg-blue-600 flex justify-center hover:bg-blue-500 flex-1"
      >
        <span class="text-white">Venmo</span>
      </button>
      <a
        onclick={() => handleClick("shopify")}
        class="purchase-button bg-green-600 flex justify-center hover:bg-green-500 flex-1"
        href=""
        target="blank"
      >
        <span class="text-white">Shopify</span>
      </a>
    </div>
  </div>
</div>

{#if showVenmo}
  <div
    class="w-screen h-screen flex justify-center items-center z-2 fixed top-0 left-0"
  >
    <div
      onclick={hideVenmo}
      class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 {animateVenmo
        ? 'opacity-100'
        : 'opacity-0'} duration-300"
    ></div>

    <div
      class="relative bg-white p-8 rounded-md max-w-100 transform {animateVenmo
        ? 'translate-y-0 opacity-100'
        : 'translate-y-7 opacity-0'} duration-300"
    >
      <h2 class="text-xl font-semibold">It looks like you're on Desktop</h2>
      <p class="mb-1">
        Scan the QR code below with your phone and Venmo us {price} per ticket (@weird-phishes).
      </p>
      <p class="mb-4 font-semibold">
        Please don't forget to include your mailing address in the note.
      </p>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="w-50 h-50">
          <img
            src="https://www.dropbox.com/s/b1w402d3kg0mahb/venmo-code.jpeg?raw=1"
          />
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
