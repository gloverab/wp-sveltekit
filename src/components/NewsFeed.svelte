<script lang='ts'>
  import { baseUrl } from "$src/constants";
  import { onMount } from "svelte";
  import HeadlineItem from "./HeadlineItem.svelte";

  export let news: any[]

  let loading = news && news.length > 0 ? false : true

  const getNews = async () => {
    const url = baseUrl
    const resp = await fetch(url + 'performers/1/news')
    if (resp.status === 200) {
      const data = await resp.json()
      news = data
      loading = false
    } else {
      
    }
  }

  onMount(() => {
    if (!news || news.length == 0) {
      getNews()
    }
  })
</script>

{#if !loading && news}
  <div>
    <div class='bg-phish-purple w-full h-1' />
    <span class='text-sm uppercase font-light tracking-wider mb-2'>Latest News</span>
    
    <div class='flex flex-col space-y-4'>
      <div class='space-y-2 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col divide-y divide-y-gray-200'>
        {#each news as item, i}
          <HeadlineItem
            index={i}
            item={item}
          />
        {/each}
      </div>
      <!-- <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
        <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Thank you Safe and Soundz Festival!</h1>
        <p class='text-sm text-phish-grey-light'>We had an incredible time with friends new and old at the inaugural Safe n Soundz festival. Thank you all for sharing your time with us. It was incredible to bring Weird Phishes to a mountaintop, play music, and hang out with what we feel like is a brand new part of our family. We can't wait to see you all again. And an incredibly special thank you to George Adler and everyone at Shepherd Productions. We couldn't have asked for a better return to playing live music.</p>
      </div> -->
    </div>
  </div>
{/if}
