<script lang="ts">
  import BearLogo from "$src/components/BearLogo.svelte";
  import TypewriterText from "$src/components/TypewriterText.svelte";
  import { onMount } from "svelte";

  let destination: HTMLElement | undefined = $state();

  const aText = new Array(
    "We are thankful to have you, and we have some exciting news.",
    "",
    "Truth be told, we couldn't say anything about it until tonight, but since you're here we thought you should be the first to know.",
    "",
    "On Saturday, July 25th, Weird Phishes will be playing a Phish afterparty at SONY HALL in Manhattan. This will be the band's largest headlining performance to date.",
    "",
    "Public tickets go on sale this Monday, but we have secured an early discount link to share with you. It went live at 8:01pm EST. Here is the link:",
    "",
  );
  let showLink = $state(false);
  let showMailingList = $state(false);

  const bText = [
    "One more thing...It's increasingly difficult to get word out about smaller events like this one without paying Zuck for ads or bombarding you at the door like we're doing right now.",
    "",
    "Social media can work, but each of our posts has a ~10-15% chance of reaching you. We'd rather be able to get in touch directly.",
    "",
    "If you enjoy Weird Phishes more than you enjoy doomscrolling, please sign up for our mailing list below. We will never send more than 1 or 2 emails a month. Usually less.",
    "",
  ];
</script>

<main>
  <div class="flex justify-center px-4 pt-4 w-full">
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
      />
      {#if showLink}
        <a
          class="underline"
          target="_blank"
          href="https://www.ticketmaster.com/event/000064B6FB988C5C?brand=sonyhall&CFC_SONYHALL_260725artist"
          >SONY HALL TICKETS →</a
        >
        <TypewriterText
          aText={bText}
          onComplete={() => (showMailingList = true)}
          timeout={150}
        />
      {/if}

      <!-- {#if showMailingList} -->
      <div class="min-w-full {showMailingList ? 'opacity-100' : 'opacity-0'}">
        <script
          async
          src="https://subscribe-forms.beehiiv.com/v3/loader.js"
          data-beehiiv-form="bd3623e1-1a7c-439b-8da7-5d6cd95b9aa3"
        ></script>
      </div>
      <!-- {/if} -->
    </div>
  </div>
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
