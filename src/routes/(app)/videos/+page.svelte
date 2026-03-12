<script lang='ts'>
  import Video from "$src/components/Video.svelte";
</script>

<svelte:head>
  <title>Weird Phishes | Videos</title>
</svelte:head>

<div class='relative border-l border-r px-3'>
    <Video
      src='https://www.youtube.com/embed/eP76bVPEaMM?si=V0R3DJCMYxHaVjFC'
      title='High & Dry / Chalk Dust Torture'
      subtitle='11/22/2025 - Live at Middle East Downstairs'
    />
  <div class='grid grid-cols-2 gap-x-5'>
    <Video
      src='https://www.youtube.com/embed/QjVTrSTUpG0?si=fNAmcOfEoMxRymrx'
      smallText
      title='The Bends / Free'
      subtitle='8/22/2025 - Live at The Brooklyn Bowl'
    />
    <Video
      src='https://www.youtube.com/embed/mKZR-2hKfic?si=9L0ppHAoZk1GhOKX'
      smallText
      title='"Kid A" Full Album Set'
      subtitle='2/3/2023 - Live at The Crystal Ballroom'
    />
    <Video
      src='https://www.youtube.com/embed/afKq4NmfHfs'
      smallText
      title=' 15 Step → Golgi Apparatus → 15 Step'
      subtitle='9/11/2021 - Live at Newburyport Brewing Company'
    />
    <Video
      src='https://www.youtube.com/embed/kpV7TVDs7qw'
      smallText
      title='Paranoid Android → Tweezer → Paranoid Android'
      subtitle='3/22/2019 - Live at Thunder Road'
    />
    <Video
      src='https://www.youtube.com/embed/CgpFKgbijf4'
      smallText
      title='Fluffhead → Karma Police → Fitter Happier/YEM → Fluffhead'
      subtitle='3/22/2019 - Live at Thunder Road'
    />
  </div>
</div>