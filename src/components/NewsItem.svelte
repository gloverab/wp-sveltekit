<script lang='ts'>
  export let item
  export let elH = undefined
</script>

<div bind:clientHeight={elH} class='flex-0 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
  {#if item.img_1}
    <img alt={item.title} src={item.img_1} />
  {/if}
  <a href="/news/{item.id}" class='text-xl font-semibold text-phish-grey-dark leading-5'>{item.title}</a>
  <div class='max-h-60'>
    <p class='text-sm text-phish-grey-light line-clamp-11'>
      {item.long_desc || item.short_desc}
    </p>
  </div>
  {#if item.calls_to_actions?.length === 0}
    <a class='text-phish-orange font-semibold' href='/news/{item.id}'>read more</a>
  {/if}
  {#if item.calls_to_actions?.length > 0}
    <a class='text-phish-orange font-semibold' target="blank" href='{item.calls_to_actions[0].link}'>{item.calls_to_actions[0].text}</a>
  {/if}
</div>