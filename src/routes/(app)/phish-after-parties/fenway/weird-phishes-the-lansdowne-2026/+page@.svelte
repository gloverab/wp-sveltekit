<script lang="ts">
  import Wptbm from "$src/components/Wptbm.svelte";
  import dayjs from "dayjs/esm";
  import fenwayImage from "$assets/fenway-ticketpage.png";
  import { onMount, onDestroy } from "svelte";
  import DateButton from "$src/components/DateButton.svelte";

  let maxHeightNeeded = $state();

  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  let isiOs = $state();

  const showInfo = {
    date: dayjs("2025-11-22"),
    venue: "The Middle East Downstairs",
    city: "Cambridge",
    state: "MA",
    doorTime: "8pm",
    showTime: "9pm",
    titleHTML: `<h3 class='font-medium mb-2'>Performing<strong> Radiohead's "The Bends"</strong> in the style of <strong>Phish</strong></h3>`,
    shopifyLink:
      "https://store.weirdphishes.com/products/wptbm-the-bends-at-middle-east-downstairs-cambridge-ma",
    price: 20,
  };

  onMount(() => {
    if (window) {
      isiOs = iOS();
      document.body.classList.remove("pt-15");
    }
  });
</script>

<svelte:head>
  <title>Weird Phishes Tickets - Fenway Afterparties at The Lansdowne</title>
  <meta
    property="’og:image’"
    content="https://www.dropbox.com/scl/fi/dn92ybxjlfdow99tx3ol4/single-ticketstub-xs-compressed.png?rlkey=kcgpqcwgh81fbgt3fsj565vtx&raw=1"
  />
</svelte:head>

<div class="bg-black min-h-screen overflow-x-clip">
  <div class="hidden md:block">
    <div class="w-screen flex">
      <div
        style="max-height: {maxHeightNeeded}px"
        class="w-1/2 min-h-screen overflow-hidden"
      >
        <img class="" src={fenwayImage} />
      </div>

      <div
        bind:clientHeight={maxHeightNeeded}
        class="flex-1 flex flex-col items-center pt-15 md:p-15 relative min-w-150 space-y-4"
      >
        <div>
          <h1
            style="color: #E4DCCF;"
            class="text-white font-display text-8xl uppercase text-center leading-3 mb-4"
          >
            Weird Phishes
          </h1>
          <h1
            style="color: #E4DCCF;"
            class="text-white font-display text-6xl uppercase text-center tracking-2px leading-8"
          >
            Fenway Afterparties
          </h1>
        </div>
        <div class="space-y-2">
          <p style="color: #E4DCCF;" class="font-phish">
            If you live in the area you might recognize <strong
              >The Lansdowne Pub/Bill's Bar</strong
            >
            as the place you got a drink before going to the House of Blues, or that
            spot you sang with a karaoke band in your 20s. On
            <strong>July 31</strong>
            and <strong>August 1</strong> we're transforming it into an afterparty
            mecca for two unforgettable performances from Weird Phishes.
          </p>
          <p style="color: #E4DCCF;" class="font-phish">
            This spot is as local as it gets. As a band from Boston, we're
            thrilled to be playing at a spot that's so steeped in Lansdowne St.
            lore and just steps away from the most historic baseball stadium in
            the country.
          </p>
          <div class="border-1 border-white rounded-lg p-4 space-y-2">
            <p style="color: #E4DCCF;" class="font-semibold tracking-2px">
              IMPORTANT INFO
            </p>
            <p style="color: #E4DCCF;" class="font-phish">
              This is one of the go-to walk-in spots outside Fenway, so it will
              likely fill up very quickly.
            </p>
            <p style="color: #E4DCCF;" class="font-phish">
              Bill's Bar traditionally does not do presales, but we don't want
              any of our fans to get shut out of the show, so they're graciously
              allowing us to do a presale of our own. <strong
                >Buy your tickets directly through us so you have a guaranteed
                spot at the show and don't have to wait in line.</strong
              >
            </p>
          </div>
          <p style="color: #E4DCCF;" class="font-phish">
            We couldn't just sit back and let Eggy have all the fun - especially
            in our hometown.
          </p>
        </div>
        <div class="mb-4 w-full">
          <div class="flex w-full space-x-4 mb-4">
            <DateButton
              topText="Night 1 | 7/31"
              date="July 31, 2026"
              price="$20.00/ea"
            />
            <DateButton
              topText="Night 2 | 8/1"
              date="August 1, 2026"
              price="$20.00/ea"
            />
          </div>
          <div class="flex w-full">
            <DateButton
              topText="Two Night Pass | 7/31 + 8/1"
              date="July 31 + August 1, 2026"
              additionalText="Enjoy two completely different nights for the price of one and a half."
              price="$30.00/ea"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-cover block md:hidden">
    <div class="relative p-5 z-1 bg-black bg-opacity-90">
      <div class="mb-2">
        <h1
          class="text-white font-display text-6xl uppercase text-center leading-3"
        >
          Weird Phishes
        </h1>
        <h1
          class="text-white font-display text-4xl uppercase text-center tracking-5px"
        >
          Fenway Afterparties
        </h1>
      </div>
      <Wptbm
        {isiOs}
        countDownDate={new Date("Nov 9, 2023 18:00:00").getTime()}
        {showInfo}
      />
    </div>
    <div class="flex w-full justify-center">
      <div class="p-5 pt-0 bg-black sm:max-w-130 sm:px-0">
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/dn92ybxjlfdow99tx3ol4/single-ticketstub-xs-compressed.png?rlkey=kcgpqcwgh81fbgt3fsj565vtx&raw=1"
        />
      </div>
    </div>
  </div>
</div>
