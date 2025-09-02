<script lang="ts">
  import Wptbm from "$src/components/Wptbm.svelte";
  import dayjs from "dayjs/esm";
  import { onMount, onDestroy } from "svelte";

  let maxHeightNeeded;

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

  const ticketSource = {
    name: "The Venue",
    link: null,
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
    >Weird Phishes Tickets By Mail - The Bends at Middle East in Cambridge, MA -
    November 22, 2025</title
  >
  <meta
    property="’og:image’"
    content="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
  />
</svelte:head>

<div class="bg-black min-h-screen">
  <div class="hidden md:block">
    <div class="w-screen flex">
      <div
        style="max-height: {maxHeightNeeded}px"
        class="w-1/2 min-h-screen overflow-hidden"
      >
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
        <img
          class=""
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
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
        <Wptbm
          {isiOs}
          countDownDate={new Date("Nov 1, 2025 18:00:00").getTime()}
          {showInfo}
          {ticketSource}
          ticketsRemaining={71}
        />
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
      <Wptbm
        {isiOs}
        countDownDate={new Date("Nov 1, 2025 18:00:00").getTime()}
        {showInfo}
        {ticketSource}
        ticketsRemaining={74}
      />
    </div>
    <div class="flex w-full justify-center">
      <div class="p-5 pt-0 bg-black sm:max-w-130 sm:px-0 rounded-xl">
        <img
          class="rounded-xl border-1 border-white"
          src="https://www.dropbox.com/scl/fi/wxri2pc2b8woac27nynrs/example-stub-sm.png?rlkey=8k2ibapg5vkt6ofxjost4f5gx&raw=1"
        />
      </div>
    </div>
  </div>
</div>
