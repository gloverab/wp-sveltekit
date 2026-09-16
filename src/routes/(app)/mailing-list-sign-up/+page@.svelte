<script lang="ts">
  import { page } from "$app/state";
  import BearLogo from "$src/components/BearLogo.svelte";
  import TypewriterText from "$src/components/TypewriterText.svelte";
  import { onMount } from "svelte";

  let showMailingList = $state(false);
  let hasCompletedPreviously = $state(false);

  let speed = $state(35);
  let lineSpeed = $state(200);

  const aText = new Array(
    "We are happy to be here, and thankful you decided to spend your evening with us. We have a quick favor to ask.",
    "",
    "It's increasingly difficult to get word out about smaller events like this one without paying Zuck for ads or spooling lines into the void of social media.",
    "",
    "Socials can work, but the reality is that each of our posts has a ~10-15% chance of reaching you. We'd much rather be able to get in touch directly.",
    "",
    "If you enjoy Weird Phishes more than you enjoy doomscrolling, please sign up for our mailing list below. We will never send more than 1 or 2 emails a month. Usually less.",
    "",
    "Have a great show.",
  );

  const handleComplete = () => {
    showMailingList = true;
    localStorage.setItem("has-completed-bkbowl-animation", "true");
  };

  const handleClickSkip = () => {
    speed = 0;
    lineSpeed = 0;
    hasCompletedPreviously = false;
  };

  onMount(() => {
    const lsHasCompleted =
      localStorage.getItem("has-completed-bkbowl-animation") === "true";
    if (lsHasCompleted) {
      hasCompletedPreviously = true;
    }
  });

  let venueName = $derived.by(() => {
    if (page?.url?.searchParams?.has("venue")) {
      return page.url.searchParams.get("venue");
    } else {
      return "the Show";
    }
  });
</script>

<svelte:head>
  <title>In-Person Mailing List Sign Up</title>
  <meta property="og:title" content="In-Person Mailing List Sign Up" />
</svelte:head>

<main>
  <div class="flex justify-center px-4 pt-4 w-full pb-40">
    <div class="flex flex-col items-center w-full space-y-3">
      <div class="w-12">
        <BearLogo />
      </div>
      <div class="typewriter max-w-full">
        <p>Welcome to {venueName}</p>
      </div>
      <!-- <span class="cursor">|</span> -->
      <TypewriterText
        {aText}
        onComplete={handleComplete}
        timeout={2000}
        {speed}
        {lineSpeed}
      />

      <div class="min-w-full {showMailingList ? 'opacity-100' : 'opacity-0'}">
        <script
          async
          src="https://subscribe-forms.beehiiv.com/v3/loader.js"
          data-beehiiv-form="bd3623e1-1a7c-439b-8da7-5d6cd95b9aa3"
        ></script>
      </div>
    </div>
  </div>
  {#if hasCompletedPreviously}
    <div class="fixed top-4 right-4">
      <button class="bg-black text-white px-4 py-2" onclick={handleClickSkip}>
        <p>Skip Animation</p>
      </button>
    </div>
  {/if}
</main>

<style>
  .typewriter p {
    @apply border-r-1 border-phish-orange;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation:
      typing 2.5s steps(30, end),
      blink-caret 0.5s step-end infinite;
  }

  .text-wrapper {
    font-family: monospace;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
</style>
