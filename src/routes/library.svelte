<script lang='ts'>
  import * as posters from '$src/constants'
</script>

<svelte:head>
  <title>Weird Phishes Public Library</title>
</svelte:head>

<div class='flex bg-gray-500 min-h-screen p-3 space-x-3'>

  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.aeronaut1.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.soundcheck1Fb.img} />
    </div>
    
    <div class='lib-item'>
      <img src={posters.newburyportLp.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.haze2021.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.fallPoster.img} />
    </div>

    <div class='lib-item'>
      <img src={posters.firstShow.img} />
    </div>
  </div>

  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.genericFb.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.fallPosterAlt.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.babys1.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.inRainbows.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.nubluClub.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.luckyStrike4up.img} />
    </div>
  </div>

  <div class='flex-1 flex flex-col space-y-3'>
    <div class='lib-item'>
      <img src={posters.aeronaut1Alt.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.opus2021.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.babysCancelled.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.ehaze1.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.cruise.img} />
    </div>
    <div class='lib-item'>
      <img src={posters.bowery.img} />
    </div>
  </div>

</div>

<style>
  .lib-item {
    @apply opacity-90 hover:opacity-100;
  }
</style>