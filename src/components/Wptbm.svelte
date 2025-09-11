<script lang="ts">
  import dayjs from "dayjs/esm";
  import { onMount } from "svelte";
  import BearLogo from "$src/components/BearLogo.svelte";

  export let isiOs;
  export let countDownDate;
  export let hideTicketmaster = false;
  export let ticketSource: { name: string; link: string };
  export let showInfo: {
    date: any;
    venue: string;
    city: string;
    state: string;
    doorTime: string;
    showTime: string;
    titleHTML: string;
    price: number;
    shopifyLink: string;
  };
  export let ticketsRemaining: number;
  export let remainingLastUpdatedAt: string | number;

  let venmoText = "Buy Tickets via Venmo";
  let showVenmo = false;
  let animateVenmo = false;
  let showSoldOut = false;
  let animateSoldOut = false;
  let x;

  const initialDistance = countDownDate - new Date().getTime();

  let expired = initialDistance <= 0;

  const handleDesktopVenmoClick = async () => {
    handleClick("venmo-desktop");
    showVenmo = true;
    setTimeout(() => (animateVenmo = true));
  };

  const hideVenmo = async () => {
    animateVenmo = false;
    setTimeout(() => (showVenmo = false), 300);
  };

  const displaySoldOut = async () => {
    showSoldOut = true;
    setTimeout(() => (animateSoldOut = true));
  };

  const hideSoldOut = async () => {
    animateSoldOut = false;
    setTimeout(() => (showSoldOut = false), 300);
  };

  const handleClick = (linkType) => {
    fbq("trackCustom", "WPTBMClick", { type: linkType });
  };

  const humanizeTime = (distance) => {
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    return hours + "h " + minutes + "m " + seconds + "s ";
  };

  let timeRemaining = humanizeTime(initialDistance);

  const updateCountdown = () => {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    timeRemaining = humanizeTime(distance);

    if (distance < 0) {
      clearInterval(x);
      timeRemaining = "EXPIRED";
      expired = true;
    }
  };

  const convertToCurrency = (value: number) => {
    return (Math.round(value * 100) / 100).toFixed(2);
  };

  onMount(() => {
    if (ticketsRemaining === 0) {
      displaySoldOut();
    }
  });

  x = setInterval(updateCountdown, 1000);
</script>

<div class="flex w-full justify-center">
  <div
    class="w-full border-1 border-grey-light rounded-xl sm:max-w-130 p-4 sm:p-10"
  >
    <div class="mb-4 text-white">
      <h3 class="text-2xl font-semibold">
        WELCOME TO WPTBM<span class="hidden sm:inline"
          >&nbsp;| No-fee Tickets</span
        >
      </h3>
      <h3 class="text-2xl font-semibold uppercase sm:hidden">No-fee Tickets</h3>
      {@html showInfo.titleHTML}
      <p class="text-white text-base mb-2 text-indigo-200">
        It's been far too long since we played Boston, and even longer since we
        debuted a new album's worth of arrangements.
      </p>
      <p class="text-white text-base mb-2 text-indigo-200">
        We're tackling "The Bends" for a full album reimagination. As with our
        other special album performances, we will be completely rearranging it,
        mashing it up with Phish, jamming it out, and performing the whole album
        front to back.
      </p>
      <p class="text-gray-100 font-semibold">
        {showInfo.date.format("ddd, MMMM DD, YYYY")} - {showInfo.city}, {showInfo.state}
      </p>
      <p class="text-gray-100 font-semibold">{showInfo.venue}</p>
      <p class="text-gray-100 font-semibold">Doors: 8pm // Music until late</p>
    </div>
    <p class="text-white text-sm mb-2">
      Ticket fees suck. And going to the box office ahead of time isn't always
      convenient.
    </p>
    <p class="text-white text-sm mb-2">
      To combat that, we went down to the box office over at {showInfo.venue} in
      {showInfo.city}, secured some barcodes, and put them onto
      <span class="text-yellow-300"
        >physical tickets with exclusive artwork</span
      > for this show only.
    </p>
    <p class="text-white text-sm mb-2 line-spa">
      You can order them exclusively through our <strong>webstore</strong> or by
      <strong>venmoing</strong> us (include your address in the comment) and we'll
      mail them to you, simple as that.
    </p>
    <p class="text-white text-sm mb-2 line-spa">
      No service fees, no convenience fees. Plus as an added bonus, you'll have
      a small keepsake from the show.
    </p>
    <p class="text-white text-lg font-semibold text">
      Presale: ${convertToCurrency(showInfo.price)}/ea + $1.00 Shipped
    </p>
    <!-- <p class='text-red-600 font-semibold text'>Ending Tonight (11/9) at 6:00pm</p> -->
    {#if expired || ticketsRemaining === 0}
      <p class="text-red-600 mb-6">
        WPTBM tickets are sold out. Please purchase your tickets from the link
        below.
      </p>
      <a
        on:click={() => handleClick("ticketmaster")}
        class="purchase-button mb-2 bg-blue-600 flex justify-center hover:bg-green-500"
        href={ticketSource.link}
        target="blank"
      >
        <span class="text-white">Buy Tickets From The Venue</span>
      </a>
    {:else}
      <div class="mb-6">
        <p class="text-sm text-white">Presale ends October 1st, 2025</p>
        <p class="text-sm text-white">Limited to 75</p>
        <p
          class="{ticketsRemaining > 50
            ? 'text-green-500'
            : ticketsRemaining > 10
            ? 'text-orange-500'
            : 'text-red-400'} text-lg leading-5"
        >
          {ticketsRemaining} Remaining
          <span class="text-gray-400 text-sm"
            >as of {dayjs(remainingLastUpdatedAt).format(
              "MM/DD/YYYY @ h:mm a"
            )}</span
          >
        </p>
      </div>
    {/if}

    {#if !expired && ticketsRemaining > 0}
      <div class="mb-4">
        <a
          on:click={() => handleClick("shopify")}
          class="purchase-button mb-2 bg-green-600 flex justify-center hover:bg-green-500"
          href={showInfo.shopifyLink}
          target="blank"
        >
          <span class="text-white">Buy Tickets via Shopify</span>
        </a>
        <div class="hidden sm:block">
          <button
            on:click={handleDesktopVenmoClick}
            class="w-full purchase-button bg-blue-600 flex justify-center hover:bg-blue-500"
          >
            <span class="text-white">{venmoText}</span>
          </button>
        </div>
        <div class="sm:hidden">
          <a
            on:click={() => handleClick("venmo-mobile")}
            class="flex purchase-button bg-blue-600 justify-center hover:bg-blue-500"
            href={isiOs
              ? "venmo://paycharge?txn=pay&recipients=weird-phishes&text=Your%20Address"
              : "intent://paycharge?txn=pay&recipients=weird-phishes#Intent;package=com.venmo;scheme=venmo;end"}
            target="blank"
          >
            <span class="text-white">Buy Tickets via Venmo</span>
          </a>
        </div>
        <div class="flex justify-center">
          <span class="text-white text-xs"
            >Please remember to include your mailing address</span
          >
        </div>
      </div>
      {#if !hideTicketmaster && ticketSource?.link}
        <div class="mb-4">
          <a
            on:click={() => handleClick("ticketmaster")}
            class="underline text-blue-800"
            href={ticketSource.link}
            target="blank"
          >
            Or buy from {ticketSource.name}
          </a>
        </div>
      {/if}
      <p class="text-white text-sm mb-2 line-spa">
        Your tickets will be shipped to you 2-3 weeks before the show.
      </p>
      <p class="text-white text-sm mb-2 line-spa">
        If you have any questions, please reach out at: <a
          class="underline font-semibold"
          href="emailto:weirdphishesmusic@gmail.com"
          >weirdphishesmusic@gmail.com</a
        >
      </p>
    {/if}
  </div>
</div>

{#if showVenmo}
  <div
    class="w-screen h-screen flex justify-center items-center z-2 fixed top-0 left-0"
  >
    <div
      on:click={hideVenmo}
      class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 {animateVenmo
        ? 'opacity-100'
        : 'opacity-0'} duration-300"
    />

    <div
      class="relative bg-white p-8 rounded-md max-w-100 transform {animateVenmo
        ? 'translate-y-0 opacity-100'
        : 'translate-y-7 opacity-0'} duration-300"
    >
      <h2 class="text-xl font-semibold">It looks like you're on Desktop</h2>
      <p class="mb-1">
        Scan the QR code below with your phone and Venmo us ${showInfo.price} per
        ticket (+ $1 shipping) (@weird-phishes).
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

{#if showSoldOut}
  <div
    class="w-screen h-screen flex justify-center items-center z-2 fixed top-0 left-0"
  >
    <div
      on:click={hideSoldOut}
      class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 {animateSoldOut
        ? 'opacity-100'
        : 'opacity-0'} duration-300"
    />

    <div
      class="relative bg-white p-4 rounded-md max-w-100 transform {animateSoldOut
        ? 'translate-y-0 opacity-100'
        : 'translate-y-7 opacity-0'} duration-300 space-y-1"
    >
      <div class="flex justify-center">
        <div class="w-15">
          <BearLogo />
        </div>
      </div>
      <h2 class="text-xl font-semibold">
        By-Mail Tickets are sold out. Digital Tickets are still available.
      </h2>
      <p>
        We are sold out of WPTBM exclusive tickets for this event, but don't
        worry!
      </p>
      <p>
        You're still able to buy tickets from {showInfo.venue}' website. Visit
        the link below and buy yours today before they're all gone.
      </p>
      <div class="flex justify-center pt-2">
        <a
          class="py-2 px-4 bg-phish-orange hover:bg-phish-purple text-white uppercase font-phish tracking-wide"
          href={ticketSource.link}
          target="_blank"
          rel="noreferrer">Buy Tickets Now</a
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .purchase-button {
    @apply flex items-center p-2 rounded-sm;
  }
</style>
