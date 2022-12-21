<script lang='ts'>
  import Video from "$src/components/Video.svelte";
</script>

<svelte:head>
  <title>Weird Phishes | Videos</title>
</svelte:head>

<div class='relative border-l border-r px-3'>
  <Video
    src='https://www.youtube.com/embed/5oGZzAkNk34'
    title='Subterranean Homesick Alien / Twist'
    subtitle='12/2/2022 - Live at Paradise Rock Club'
  />
  <div class='grid grid-cols-2 gap-x-5'>
    <Video
      src='https://www.youtube.com/embed/gXXbKYb31LA'
      smallText
      title='High & Dry / Chalk Dust Torture'
      subtitle='2/11/2022 - Live at Aeronaut Cannery'
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