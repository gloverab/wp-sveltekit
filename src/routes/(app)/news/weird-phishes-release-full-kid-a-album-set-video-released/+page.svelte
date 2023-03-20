<script lang='ts'>
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import viewport from '$src/actions/userViewportAction';
  import dayjs from 'dayjs/esm';
  import { onDestroy, onMount } from "svelte";

  const videoUrl = "https://www.youtube.com/embed/mKZR-2hKfic"

  let videoWrapperW
  let youtubeVideo
  let showButton = true
  let oneMinuteTimeout
  let fiveMinuteTimeout

  const handleVideoPlayClick = () => {
    fbq('trackCustom', 'videoClick')
  }

  const handleOneMinute = () => {
    fbq('trackCustom', 'oneMinuteAfterVideoPlay')
  }

  const handleFiveMinutes = () => {
    fbq('trackCustom', 'fiveMinutesAfterVideoPlay')
  }

  const handleOverlayClick = () => {
    showButton = false
    const symbol = youtubeVideo.src.indexOf("?") > -1 ? "&" : "?";
    youtubeVideo.src += symbol + "autoplay=1"
    handleVideoPlayClick()
    oneMinuteTimeout = setTimeout(handleOneMinute, 60000)
    fiveMinuteTimeout = setTimeout(handleFiveMinutes, 300000)
  }

  onDestroy(() => {
    clearTimeout(oneMinuteTimeout)
    clearTimeout(fiveMinuteTimeout)
  })

</script>

<window on:mousedown={() => console.log('click!')} />

<div class='my-3 md:my-6'>
  <div class='h-25 md:w-57.5 md:h-53 mb-8 flex-shrink-0'>
    <img class='h-full' src='https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1' />
  </div>
  <div class='bg-phish-purple w-full h-1' />
  <span class='text-sm uppercase font-light tracking-wider mb-2'>News</span>
</div>
<div class='mb-6'>
  <span class='text-xs font-thin uppercase'>{dayjs('3/20/2023').format('MMM DD, YYYY')}</span>
  <h1 class='text-4xl font-semibold'>Watch Now: Weird Phishes Releases Full Video Of The "Kid A" Album Set in its Entirety</h1>
</div>
<div class='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
  <div class='flex-1'>
    <div class='flex-0 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
      <div class='text-phish-grey-light mb-2 space-y-1'>
        <p>We are excited to share the full video of our "Kid A" album set performance. The performance took place on February 3rd, 2023 at Crystal Balloom in Somerville, MA on the coldest recorded night in the last ten years. Despite the cold weather, nearly 300 folks came out, danced all night, and filled the room with warmth.</p>
        <p>Watch it now:</p>
      </div>
      <div use:viewport class='w-full' bind:clientWidth={videoWrapperW}>
        <div
          style="height:{videoWrapperW / 1.7777777}px;"
          class='w-full h-131.75 relative border-1 border-black'>
          <iframe bind:this={youtubeVideo} style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
          {#if showButton}
            <button class='block absolute top-0 left-0 w-full h-full' on:click={handleOverlayClick} />
          {/if}
        </div>
      </div>
      <div class='text-phish-grey-light mb-4 space-y-1'>
        <p>The full set was videoed and multitrack recorded, and has been professionally mixed/mastered. This marks the first full set that the band has released publicly. You can watch the video of "Kid A" in its entirety above, and find a recap of the both sets below.</p>
      </div>
      <div>
        
        <div class='bg-white w-full text-sm'>
          <p class='text-2xl tracking-wide'>February. 3rd 2023 Setlist</p>
          <p class='tracking-wide'>Crystal Ballroom</p>
          <p class='tracking-wide mb-2'>Somerville, MA</p>
          <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set One</span>
          <ul class='mb-1'>
            <li>Everything in its Right Place</li>
            <li>Kid A =></li>
            <li>2001 =></li>
            <li>Kid A =></li>
            <li>Punch You In The Eye<sup>1</sup> =></li>
            <li>Kid A</li>
            <li>National Anthem => Tweezer Reprise</li>
            <li>How to Disappear Completely =></li>
            <li>Mike's Song =></li>
            <li>How to Disappear Completely</li>
            <li>Treefingers<sup>2</sup></li>
            <li>OPTIMISTASH ></li>
            <li>In Limbo</li>
            <li>Somewhere Over the Rainbow<sup>3</sup></li>
            <li>RIFTIOTEQUE<sup>4</sup></li>
            <li>Morning Bell</li>
            <li>Motion Picture Soundtrack =></li>
            <li>Wading in the Velvet Sea =></li>
            <li>Motion Picture Soundtrack</li>
          </ul>
          <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set Two</span>
          <ul class='mb-1'>
            <li>Fluffhead =></li>
            <li>Karma Police =></li>
            <li>YEM<sup>5</sup> =></li>
            <li>Fluffhead</li>
            <li>Reckoner =></li>
            <li>Carini<sup>6</sup></li>
            <li>Paranoid Android =></li>
            <li>Jigsaw Falling Into Place =></li>
            <li>Birds of a Feather<sup>7</sup> =></li>
            <li>Jigsaw Falling Into Place =></li>
            <li>Paranoid Android</li>
            <li>15 Step =></li>
            <li>Golgi Apparatus =></li>
            <li>15 Step</li>
            <li>Bodysnatchers =></li>
            <li>Weekapaug Groove =></li>
            <li>Bodysnatchers ></li>
            <li>Electioneering =></li>
            <li>Harry Hood<sup>8</sup></li>
          </ul>
          <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Encore</span>
          <ul>
            <li>You and Whose Army => Character Zero</li>
            <li>Subterranean Homesick Alien / Twist</li>
          </ul>

          <ul class='mt-6 mb-3'>
            <li><sup>1</sup>"Kid A!" instead of "Hey!" Lyrics changed to "played toward the end with optimistic/stash"</li>
            <li><sup>2</sup>Played in a drum and bass style. Alex used a sample pad.</li>
            <li><sup>3</sup>Audience request after Josh successfully changed his violin string mid-jam</li>
            <li><sup>4</sup>Contained "Sparkle" quotes</li>
          </ul>
          <ul>
            <li><sup>5</sup>Lyrics changed to "Boy, Man, Kid, A"</li>
            <li><sup>6</sup>Alex teased "Killing in the Name Of." Josh quoted "Bulls on Parade" with "Carini Now!" lyrics.</li>
            <li><sup>7</sup>Contained quotes from "The Adventure"</li>
            <li><sup>8</sup>Contained quotes from "Same"</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class='w-57.5'>
    <NewsFeed />
  </div>
</div>