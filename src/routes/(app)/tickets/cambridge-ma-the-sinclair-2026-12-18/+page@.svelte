<script lang="ts">
  import Wptbm from "$src/components/Wptbm.svelte";
  import dayjs from "dayjs/esm";
  import { onMount, onDestroy } from "svelte";

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
  let isiOs;

  const stubSrc =
    "https://www.dropbox.com/scl/fi/p2a2nvpwjy8l3w0b4dzt7/sinclair-ticketstub.png?rlkey=pacfkn6cxi1ilskmkuonrakib&raw=1";

  const showInfo = {
    date: dayjs("2026-12-18"),
    venue: "The Sinclair",
    city: "Cambridge",
    state: "MA",
    doorTime: "7pm",
    showTime: "8pm",
    titleHTML: `<h3 class='font-medium mb-2'><strong>Radiohead</strong> through the lens of <strong>Phish</strong></h3>`,
    shopifyLink:
      "https://store.weirdphishes.com/products/wptbm-weird-phishes-the-sinclair-cambridge-ma-12-18-2026",
    price: 20,
  };

  const ticketSource = {
    name: "AXS",
    link: "https://www.axs.com/events/1502899/weird-phishes-tickets?skin=sinclair",
  };

  const wptbmProps = {
    isiOs,
    countDownDate: new Date("Nov 13, 2026 18:00:00").getTime(),
    showInfo,
    ticketSource,
    ticketsRemaining: 67,
    remainingLastUpdatedAt: new Date("Oct 16, 2026 09:32:00").getTime(),
  };

  onMount(() => {
    if (window) {
      isiOs = iOS();
      document.body.classList.remove("pt-15");
    }
  });
</script>

<svelte:head>
  <title
    >Weird Phishes Tickets By Mail - Radiohead + Phish @ The Sinclair in
    Cambridge, MA - December 18, 2026</title
  >
  <meta property="’og:image’" content={stubSrc} />
</svelte:head>

<div class="bg-black min-h-screen">
  <div class="hidden md:block">
    <div class="w-screen flex">
      <div
        style="max-height: {maxHeightNeeded}px"
        class="w-1/2 min-h-screen overflow-hidden"
      >
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
        <img alt="stub" class="" src={stubSrc} />
      </div>

      <div
        bind:clientHeight={maxHeightNeeded}
        class="flex-1 flex flex-col items-center pt-15 md:p-15 relative min-w-150"
      >
        <div class="mb-12">
          <h1
            class="text-white font-display text-8xl uppercase text-center leading-3"
          >
            Weird Phishes
          </h1>
          <h1
            class="text-white font-display text-7xl uppercase text-center tracking-5px"
          >
            Tickets By Mail
          </h1>
        </div>
        <Wptbm {...wptbmProps} />
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
          Tickets By Mail
        </h1>
      </div>
      <Wptbm {...wptbmProps} />
    </div>
    <div class="flex w-full justify-center">
      <div class="p-5 pt-0 bg-black sm:max-w-130 sm:px-0 rounded-xl">
        <img class="rounded-xl border-1 border-white" src={stubSrc} />
      </div>
    </div>
  </div>
</div>
