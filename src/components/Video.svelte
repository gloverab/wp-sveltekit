<script lang='ts'>
  export let src
  export let smallText
  export let title: string
  export let subtitle: string

  let wrapperW
</script>

<div class='flex justify-center w-full pb-8 pt-4'>
  <div class='w-full'>
    <div bind:clientWidth={wrapperW}>
      <div class='flex justify-center flex-col items-center mb-2'>
        <h2 class='font-semibold line-clamp-1 ellipsis block {smallText ? 'text-xl' : 'text-4xl'}'>{title}</h2>
        <span class='{smallText ? 'text-sm' : 'text-lg'}'>{subtitle}</span>
      </div>
      <div class='w-full relative' style="height:{wrapperW / 1.7777777}px">
        <iframe style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" {src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>