<script lang="ts">
  import bgSwirl from "$assets/brooklyn-bowl/bg-swirl.svg";
  import skyCircle from "$assets/brooklyn-bowl/01-sky-circle.png?enhanced";
  import centerMosaicBlue from "$assets/brooklyn-bowl/02-center-mosaic-blue.png?enhanced";
  import centerMosaicRed from "$assets/brooklyn-bowl/03-center-mosaic-red.png?enhanced";
  import centerMosaicBlueSm from "$assets/brooklyn-bowl/04-center-mosaic-blue-sm.png?enhanced";
  import leaves1 from "$assets/brooklyn-bowl/05-leaves-1.png?enhanced";
  import leaves2 from "$assets/brooklyn-bowl/06-leaves-2.png?enhanced";
  import bearClutter from "$assets/brooklyn-bowl/07-bear-clutter.png?enhanced";
  import bearHeads from "$assets/brooklyn-bowl/08-bear-heads.png?enhanced";
  import centerDot from "$assets/brooklyn-bowl/09-center-dot.png?enhanced";
  import heroText from "$assets/brooklyn-bowl/hero-text.svg";
  import bowlLogo from "$assets/brooklyn-bowl/bowl-logo.svg";
  import dateSign from "$assets/brooklyn-bowl/date-sign.svg";
  import { onMount } from "svelte";

  let showContent = $state(false);

  const handleClick = () => {
    fbq("trackCustom", "WPTBMClick", { type: "ticketmaster" });
  };

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 150);
  });
</script>

<div class="flex justify-center bg-black">
  <div class="w-full max-w-160">
    <div
      class="w-full min-h-screen max-h-screen bg-cover bg-center flex flex-col justify-start items-center px-2 pt-10 pb-10 bg-black space-y-4 overflow-x-hidden container"
      style="background-image: url({bgSwirl});"
    >
      <enhanced:img
        class="z-1"
        alt="Weird Phishes - A Mashup of Radiohead and Phish"
        src={heroText}
      />
      <div
        class:opacity-100={showContent}
        class:opacity-0={!showContent}
        class="relative w-full flex-shrink-1 flex justify-center items-center -top-6 duration-200"
      >
        <div class="mandala-wrapper">
          <enhanced:img
            alt="sky-circle"
            class="mandala-component"
            src={skyCircle}
          />
          <enhanced:img
            alt="mosaic-blue-lg"
            class="mandala-component mosaic-blue-lg"
            src={centerMosaicBlue}
          />
          <enhanced:img
            alt="mosaic-red"
            class="mandala-component mosaic-red"
            src={centerMosaicRed}
          />
          <enhanced:img
            alt="mosaic-blue-sm"
            class="mandala-component mosaic-blue-sm"
            src={centerMosaicBlueSm}
          />
          <div class="mandala-component leaves">
            <enhanced:img
              alt="leaves-1"
              class="absolute top-0 left-0 w-full h-full"
              src={leaves1}
            />
            <enhanced:img
              alt="leavse-2"
              class="absolute top-0 left-0 w-full h-full"
              src={leaves2}
            />
          </div>
          <enhanced:img
            alt="bear-clutter"
            class="mandala-component bear-clutter"
            src={bearClutter}
          />
          <enhanced:img
            alt="bear-heads"
            class="mandala-component bear-heads"
            src={bearHeads}
          />
          <enhanced:img
            alt="center-dot"
            class="mandala-component center-dot"
            src={centerDot}
          />
        </div>
      </div>
      <div class="w-full relative -top-6">
        <div class="absolute top-0 left-0 w-full date-sign">
          <div
            class="absolute -bottom-14 w-full transform -rotate-0 flex justify-center"
          >
            <div class="w-40">
              <enhanced:img alt="May 29, 2026" src={dateSign} />
            </div>
          </div>
        </div>
        <div class="relative w-full flex justify-center -bottom-4">
          <enhanced:img
            alt="Brooklyn Bowl"
            class="w-3/5 min-w-80 max-w-100 animte float"
            src={bowlLogo}
          />
        </div>
        <a
          href="https://www.ticketmaster.com/weird-phishes-a-mashup-of-radiohead-brooklyn-new-york-05-29-2026/event/0000644AF699E797"
          onclick={handleClick}
          id="ticket-link"
          class:opacity-100={showContent}
          class:opacity-0={!showContent}
          class="block relative w-full h-14 flex justify-center items-center shadow-lg rounded-full border-2 border-white duration-200"
        >
          <p
            class="text-2xl font-semibold uppercase tracking-lg font-phish text-black"
          >
            GET TICKETS NOW →
          </p>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .mandala-wrapper {
    @apply relative w-full max-w-120;
    aspect-ratio: 1/1;
  }

  .mandala-component {
    @apply max-w-none absolute;
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
  }

  .center-dot {
    width: 160%;
    height: 160%;
    left: calc(-30% + 1px);
    top: calc(-30% - 1px);
  }

  #ticket-link {
    background: linear-gradient(to right, #7f6cff, #90e9ff);
  }

  .float {
    animation: float 5s infinite;
  }

  .leaves {
    animation: spin 22s linear reverse infinite;
  }

  .mosaic-blue-lg {
    animation: spin 12s linear reverse infinite;
  }

  .bear-heads {
    animation: spin 30s linear infinite;
  }

  .mosaic-red {
    animation: spin 10s linear infinite;
  }

  .mosaic-blue-sm {
    animation: spin 3s linear reverse infinite;
  }

  .date-sign {
    animation: float 5s reverse infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-15px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
  @-webkit-keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      -webkit-transform: translatey(0px);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      -webkit-transform: translatey(-15px);
      transform: translatey(-15px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      -webkit-transform: translatey(0px);
      transform: translatey(0px);
    }
  }

  .container::-webkit-scrollbar {
    display: none;
  }
</style>
