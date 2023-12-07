<script lang='ts'>
  import { onMount } from "svelte";

  const totalCount = 5
  let active = 0

  onMount(() => {
    setInterval(() => {
      if (active + 1 === totalCount) {
        active = 0
      } else {
        active = active + 1
      }
    }, 8000)
  })
</script>

<div class='h-full overflow-hidden flex'>
  <div class='h-full flex' style="transform:translateX(-{active * 100}%);transition:0.3s ease all;">
    <div class='h-full w-full flex-shrink-0 flex flex-col justify-between items-end'>
      <div />
      <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"Weird Phishes successfully fuses the work of the groundbreaking experimental indie band Radiohead with the music of Phish."</p>
      <p class='text-phish-orange underline uppercase'><a class='' href='https://jambands.com/news/2019/03/15/new-band-weird-phishes-will-blend-phish-with-radiohead/' target='blank'>-Relix/JamBands.com</a></p>
    </div>
    <div class='h-full w-full flex-shrink-0 flex flex-col justify-between items-end'>
      <div />
      <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"While the hybrid cover band thing has been done before, the way Weird Phishes combines their two sources of inspiration is both imaginative and principled."<p>
      <p class='text-phish-orange underline uppercase'><a class='' href='https://liveforlivemusic.com/news/weird-phishes-video/' target='blank'>-Live For Live Music</a></p>
    </div>
    <div class='h-full w-full flex-shrink-0 flex flex-col justify-between items-end'>
      <div />
      <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"Saw these guys in Chicago pre-pandemic, and yes, it's everything you dream of if you're a Radiohead & Phish fan...amazing."<p>
      <p class='text-phish-orange underline'><a class='' href='https://forum.phish.net/forum/show/1379217940' target='blank'>-@Charlie_Dont_Surf</a></p>
    </div>
    <div class='h-full w-full flex-shrink-0 flex flex-col justify-between items-end'>
      <div />
      <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"I was in awe from the first note. Weird Phishes is talent, creativity, bravery, and a whole lot of fun mixed into a tight package..."<p>
      <p class='text-phish-orange underline uppercase'><a class='' href='https://livemusicnewsandreview.com/2019/07/weird-phishes/' target='blank'>-Live Music News & Review</a></p>
    </div>
    <div class='h-full w-full flex-shrink-0 flex flex-col justify-between items-end'>
      <div />
      <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"Caught these guys after Fenway 2019 night 1. Was skeptical going in but blown the hell away going out."<p>
      <p class='text-phish-orange underline'><a class='' href='https://forum.phish.net/forum/show/1379217940' target='blank'>-@bl002e</a></p>
    </div>
  </div>
</div>

<style>
  .active {
    @apply translate-x-full;
  }
</style>