<script lang='ts'>
  import dayjs from 'dayjs/esm'

  export let index
  export let item: any
</script>


  <a href="/news/{item.id}" class='space-y-2 flex-shrink-0 py-2 group'>
    {#if item.img_1 && index == 0}
      <div class='w-full'>
        <img src={item.img_1} />
      </div>
    {/if}

    <div class='py-2'>
      <h4 class='text-xs text-phish-green'>{dayjs(item.date).format("MMM D, YYYY")}</h4>
      <h1 class='text-lg font-medium text-phish-orange leading-5 group-hover:underline'>{item.title}</h1>
    </div>
  </a>