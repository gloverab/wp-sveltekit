<script lang='ts'>
import NewsItem from "./NewsItem.svelte";


  let {
    item,
    i,
    newsFeed,
    newsFeedPositions,
    updateNewsFeedPositions
  } = $props();
  
  let itemOneBottom = $state()
  let itemTwoBottom = $state()
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