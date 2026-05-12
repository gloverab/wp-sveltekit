<script lang='ts'>
  let { video } = $props();

  let wrapperW = $state()
</script>

<a href='https://www.youtube.com/watch?v={video.id}' target='_blank' class='w-full group'>
  <div class='space-y-1' bind:clientWidth={wrapperW}>
    <div class='w-full relative' style="height:{wrapperW / 1.7777777}px">
      <iframe style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src="https://www.youtube.com/embed/{video.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class='absolute w-full h-full top-0 left-0'></div>
    </div>
    <div class='flex flex-col items-start mb-2'>
      <p class='text-lg font-medium text-phish-orange leading-5 group-hover:underline'>{video.title}</p>
      <p class='text-sm font-medium text-phish-grey-light leading-5'>{video.subtitle}</p>
    </div>
  </div>
</a>