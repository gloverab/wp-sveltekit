<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    aText: string[];
    onComplete?: () => void;
    timeout?: number;
  }
  let { aText, onComplete, timeout }: Props = $props();

  let destination: HTMLElement | undefined = $state();

  let iSpeed = 50; // time delay of print out
  let iIndex = $state(0); // start printing array at this posision
  let iArrLength = $derived(aText[0].length); // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = $state(0); // initialise text position
  let sContents = $state(""); // initialise contents variable
  let iRow = $state(0); // initialise current row

  let currentRow = $state(0);

  function typewriter() {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);

    if (currentRow === aText?.length - 1 && onComplete) {
      onComplete();
    }

    while (iRow < iIndex) {
      sContents += aText[iRow++] + "<br />";
    }

    if (destination) {
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "";
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
          currentRow++;
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 200);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }
  }

  onMount(() => {
    setTimeout(() => {
      typewriter();
    }, timeout);
  });
</script>

<div class="text-wrapper w-full text-left" bind:this={destination}></div>

<style>
  .text-wrapper {
    font-family: monospace;
  }
</style>
