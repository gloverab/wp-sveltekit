<script lang='ts'>
  import VideoSmall from "$src/components/VideoSmall.svelte";
import { videos } from "$src/constants";



</script>

<div>
    <div class='bg-phish-purple w-full h-1' />
    <span class='text-sm uppercase font-light tracking-wider mb-2'>Featured Videos</span>
    
    <div class='flex flex-col space-y-4'>
      <div class='space-y-2 bg-white w-full shadow-sm p-2.5 flex flex-col'>
        {#each videos as video, index}
          <VideoSmall {video} />
          {#if index < videos.length - 1}
            <hr class='bg-grey-200' />
          {/if}
        {/each}
      </div>
      <!-- <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
        <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Thank you Safe and Soundz Festival!</h1>
        <p class='text-sm text-phish-grey-light'>We had an incredible time with friends new and old at the inaugural Safe n Soundz festival. Thank you all for sharing your time with us. It was incredible to bring Weird Phishes to a mountaintop, play music, and hang out with what we feel like is a brand new part of our family. We can't wait to see you all again. And an incredibly special thank you to George Adler and everyone at Shepherd Productions. We couldn't have asked for a better return to playing live music.</p>
      </div> -->
    </div>
  </div>