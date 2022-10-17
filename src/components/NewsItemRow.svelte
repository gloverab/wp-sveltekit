<script lang='ts'>
import NewsItem from "./NewsItem.svelte";


  export let item
  export let i
  export let newsFeed
  export let newsFeedPositions
  export let updateNewsFeedPositions
  
  let itemOneBottom
  let itemTwoBottom
</script>

<div class='flex space-y-4 lg:space-y-0 lg:space-x-4 lg:space-x-reverse flex-col lg:flex-row-reverse'>
  <NewsItem
    item={item}
    section={i}
    index={i}
    {newsFeedPositions}
    {updateNewsFeedPositions}
    bind:bottom={itemTwoBottom}
  />
  {#if newsFeed[i + 1]}
    <NewsItem
      item={newsFeed[i + 1]}
      section={i}
      index={i + 1}
      {newsFeedPositions}
      {updateNewsFeedPositions}
      bind:bottom={itemOneBottom}
    />
  {/if}
</div>