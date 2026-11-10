<script lang="ts">
  import bearDonut from "$assets/bear-donut-grad-white.png";
  import psw from "$assets/psw.webp";
  import { onMount } from "svelte";
  import bgSwirl from "$assets/brooklyn-bowl/bg-swirl.svg";
  import Logo from "$src/assets/Logo.svelte";
  import MailchimpForm from "$src/components/MailchimpForm.svelte";
  import Modal from "$src/components/Modal.svelte";

  let windowW = $state(0);
  let windowH = $state(0);

  let showMailer = $state(false);

  const handleClickTickets = () => {
    fbq("track", "Lead");
  };

  const handleClickMailer = () => {
    fbq("track", "Lead");
    showMailer = true;
  };

  const handleScroll = (e) => {
    console.log(e);
  };
</script>

<svelte:window
  onscroll={handleScroll}
  bind:innerWidth={windowW}
  bind:innerHeight={windowH}
/>

<main>
  <div
    class="fixed top-0 left-0 w-full min-h-screen max-h-screen bg-cover bg-center flex flex-col justify-start items-center px-2 pt-4 pb-10 bg-black space-y-4 overflow-x-hidden"
    style="background-image: url({bgSwirl});"
  >
    <div class="space-y-1">
      <Logo classes="fill-white" />
      <h4 class="text-center text-white">
        Radiohead + Phish = Something Entirely New
      </h4>
      <div class="flex justify-center">
        <img class="w-2/3" src={bearDonut} />
      </div>
    </div>
    <img class="w-30" src={psw} />
    <h1 class="text-white text-xl font-phish font-medium text-center">
      Weird Phishes will make their Washington DC debut on December 12th, 2026
      at Pearl Street Warehouse. We hope you'll join us for the most unique
      night of music you'll see all year.
    </h1>
    <hr class="bg-gray-200" />
    <a
      class="bg-phish-orange"
      href="https://www.unionstagepresents.com/shows/weird-phishes-12-dec"
      onclick={handleClickTickets}
    >
      <span>Get Your Tickets Now →</span>
    </a>
    <p class="text-white text-sm">or</p>
    <button onclick={handleClickMailer} class="bg-phish-purple">
      <span>Sign Mailing List</span>
    </button>
    <p class="text-white text-xs text-center">
      Thanks for clicking on our ad. We hate running ads, and hope you'll
      consider signing up for our Mailing List so we can stop funneling money
      into social media companies and focus more on making music.
    </p>
  </div>
  {#if showMailer}
    <Modal classes="max-w-140" show={true} onHide={() => (showMailer = false)}>
      <script
        async
        src="https://subscribe-forms.beehiiv.com/v3/loader.js"
        data-beehiiv-form="decb43de-f68d-4f48-a19f-aecef2ff034a"
      ></script>
    </Modal>
  {/if}
</main>

<style>
  button,
  a {
    @apply rounded-lg px-4 py-2;
  }

  button,
  a span {
    @apply text-white text-xl uppercase font-semibold tracking-wider;
  }
</style>
