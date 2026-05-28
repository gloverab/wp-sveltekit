<script lang="ts">
  import BearLogo from "$src/components/BearLogo.svelte";
  import TypewriterText from "$src/components/TypewriterText.svelte";
  import dayjs from "dayjs/esm";
  import { onMount } from "svelte";

  let showLink = $state(false);
  let showMailingList = $state(false);
  let hasCompletedPreviously = $state(false);

  let speed = $state(50);
  let lineSpeed = $state(200);

  const wentOrGoes = dayjs().isBefore(dayjs("2026-05-29T20:00:00-04:00"))
    ? "goes"
    : "went";

  const aText = new Array(
    "We are thankful to have you, and we have some exciting news that we weren't allowed to share until tonight. Since you're here, we thought you should be the first to know.",
    "",
    "On Saturday, JULY 25th, Weird Phishes will play a Phish afterparty at SONY HALL in Manhattan. This will be the largest venue the band has ever headlined.",
    "",
    `The show won't be announced until Monday, but we have an early discount link to share with everyone here. The link ${wentOrGoes} live at 8:01pm EST tonight:`,
    "",
  );

  const bText = [
    "One more thing...It's increasingly difficult to get word out about smaller events like this one without paying Zuck for ads or bombarding you at the door like we're doing right now.",
    "",
    "Social media can work, but each of our posts has a ~10-15% chance of reaching you. We'd rather be able to get in touch directly.",
    "",
    "If you enjoy Weird Phishes more than you enjoy doomscrolling, please sign up for our mailing list below. We will never send more than 1 or 2 emails a month. Usually less.",
    "",
    "Have a great show.",
    "",
  ];

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
</script>

<main>
  <div class="flex justify-center px-4 pt-4 w-full pb-40">
    <div class="flex flex-col items-center w-full space-y-3">
      <div class="w-12">
        <BearLogo />
      </div>
      <div class="typewriter max-w-full">
        <p>Welcome to Brooklyn Bowl.</p>
      </div>
      <!-- <span class="cursor">|</span> -->
      <TypewriterText
        {aText}
        onComplete={() => (showLink = true)}
        timeout={2500}
        {speed}
        {lineSpeed}
      />
      {#if showLink}
        <a
          class="underline"
          disabled={wentOrGoes === "goes"}
          target="_blank"
          href="https://www.ticketmaster.com/event/000064B6FB988C5C?brand=sonyhall&CFC_SONYHALL_260725artist"
          >SONY HALL TICKETS {wentOrGoes === "goes"
            ? "(Live at 8:01pm)"
            : "→"}</a
        >
        <TypewriterText
          aText={bText}
          onComplete={handleComplete}
          timeout={150}
          {speed}
          {lineSpeed}
        />
      {/if}

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
