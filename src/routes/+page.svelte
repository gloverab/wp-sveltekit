<script lang='ts' context='module'>
  import { newsStore } from "$src/stores/main";
  const url = baseUrl

  const timeoutPromise = new Promise((res, rej) => {
    setTimeout(rej, 1000, 'forceTimeout')
  })

  const getPerformer = new Promise(async (res, rej) => {
    const resp = await fetch(url + 'performers/1')
    if (resp.status === 200) {
      const data = await resp.json()
      res(data)
    } else {
      rej(resp)
    }
  })

  const getNews = new Promise(async (res, rej) => {
    const resp = await fetch(url + 'performers/1/news')
    if (resp.status === 200) {
      const data = await resp.json()
      res(data)
    } else {
      rej(resp)
    }
  })

  const getPerformerRace = Promise.race([
    getPerformer,
    timeoutPromise
  ])

  const getNewsRace = Promise.race([
    getNews,
    timeoutPromise
  ])

  export const load = async () => {
    try {
      const data = await Promise.all([getPerformerRace, getNewsRace])
      newsStore.set(data)
      
      return {
        props: {
          performer: data[0],
          news: data[1]
        }
      }
    } catch (err) {
      console.log(err)
      return {}
    }
  }
</script>

<script lang='ts'>
  import Carousel from "$src/components/Carousel.svelte";
  import NewsItem from "$src/components/NewsItem.svelte";
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import { baseUrl } from "$src/constants";
  import { onMount } from "svelte";

  export let data

  let { performer, news } = data

  let loading = !news || !performer
  let error = undefined

  onMount(async () => {
    if (!news || !performer) {
      try {
        const data = await Promise.all([getPerformer, getNews])
        newsStore.set(data)
        
        performer = data[0]
        news = data[1]

        loading = false
      } catch (err) {
        console.log(err)
      }
    }
  })

  $: featuredContent = news?.find(item => performer.featured_news_id === item.id)
  $: featuredContent2 = news?.find(item => performer.featured_news_2_id === item.id)

  $: nonFeaturedNews = news?.filter(item => item.id !== performer.featured_news_id && item.id !== performer.featured_news_2_id)
  $: newsFeed = news?.filter(item => item.id !== performer.featured_news_id && item.id !== performer.featured_news_2_id)
  $: sidebarNews = newsFeed?.slice(0,5)

  let itemTwoHeight
  let itemThreeHeight
</script>

<svelte:head>
  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e2b3a4569acd768a57c148cdf/00deffdd8d32dcfbd972ef52e.js");</script>
</svelte:head>

<div class='space-y-4 mt-0 md:mt-6'>
  <div class='w-full pb-4'>
    <div class='md:h-55 flex items-center space-x-2'>
      <div class='h-25 md:w-57.5 md:h-53 flex-shrink-0'>
        <img class='h-full' src='https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1' />
      </div>
      <div class='h-full hidden md:block'>
        <Carousel />
      </div>
      <div class='h-full flex md:hidden flex-col justify-between items-end'>
        <div />
        <p class='italic font-medium text-base md:text-2xl text-phish-grey-dark'>"Weird Phishes successfully fuses the work of the groundbreaking experimental indie band Radiohead with the music of Phish."</p>
        <p class='text-phish-orange underline uppercase'><a class='' href='https://jambands.com/news/2019/03/15/new-band-weird-phishes-will-blend-phish-with-radiohead/' target='blank'>-Relix/JamBands.com</a></p>
      </div>
    </div>
  </div>

  
  {#if !loading && !error && news?.length > 6}
    <div class='flex-1 md:hidden'>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider mb-2'>Featured Content</span>
      <div class='space-y-4'>
        <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2'>
          <img alt='Featured Content 1' src={featuredContent.img_1} />
          <a href={featuredContent.external_link} target='blank' class='text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline'>{featuredContent.title}</a>
          <p class='text-sm text-phish-grey-light'>{featuredContent.short_desc}</p>
          {#if featuredContent.calls_to_actions?.length > 0}
            <a class='text-phish-orange font-semibold uppercase' target="blank" href='{featuredContent.calls_to_actions[0].link}'>{featuredContent.calls_to_actions[0].text}</a>
          {/if}
        </div>

        <div class='space-y-4 flex-1'>
          <NewsItem
            item={featuredContent2}
          />
          <NewsItem
            item={nonFeaturedNews[0]}
          />
          <NewsItem
            item={nonFeaturedNews[1]}
          />
          <NewsItem
            item={nonFeaturedNews[2]}
          />
        </div>
      </div>
    </div>
    <div class='flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row'>
      <div class='w-full md:w-57.5 space-y-4'>
        <NewsFeed
          news={sidebarNews}
        />
        <NewsItem
          item={featuredContent2}
        />
        <NewsItem
          item={nonFeaturedNews[3]}
        />
        {#if nonFeaturedNews[6]}
          <NewsItem
            item={nonFeaturedNews[6]}
          />
        {/if}
        
      </div>

      <div class='flex-1'>
        <div class='bg-phish-purple w-full h-1' />
        <span class='text-sm uppercase font-light tracking-wider mb-2'>Featured Content</span>
        <div class='space-y-4'>
          <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2'>
            <img alt='Featured Content 1' src={featuredContent.img_1} />
            <a href={featuredContent.external_link} target='blank' class='text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline'>{featuredContent.title}</a>
            <p class='text-sm text-phish-grey-light'>{featuredContent.short_desc}</p>
            {#if featuredContent.calls_to_actions?.length > 0}
              <a class='text-phish-orange font-semibold uppercase' target="blank" href='{featuredContent.calls_to_actions[0].link}'>{featuredContent.calls_to_actions[0].text}</a>
            {/if}
          </div>

          <div class='flex space-x-4'>
            <div class='space-y-4 flex-1'>
              <NewsItem
                item={nonFeaturedNews[2]}
                bind:elH={itemTwoHeight}
              />
              <NewsItem
                item={itemTwoHeight > itemThreeHeight ? nonFeaturedNews[5] : nonFeaturedNews[4]}
              />
              {#if nonFeaturedNews[7]}
                <NewsItem
                  item={nonFeaturedNews[7]}
                />
              {/if}
            </div>
            <div class='space-y-4 flex-1'>
              <NewsItem
                item={nonFeaturedNews[1]}
                bind:elH={itemThreeHeight}
              />
              <NewsItem
                item={itemTwoHeight > itemThreeHeight ? nonFeaturedNews[4] : nonFeaturedNews[5]}
              />
            </div>
          </div>
        </div>
      </div>

      <div class='md:w-57.5 text-phish-grey-light space-y-4'>
        <div>
          <div class='bg-phish-purple w-full h-1' />
          <span class='text-sm uppercase font-light tracking-wider mb-2'>From the Road</span>
          <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col'>
            <p class='text-2xl tracking-wide'>Nov. 19th 2021</p>
            <p class='tracking-wide'>Aeronaut Cannery</p>
            <p class='tracking-wide'>Boston, MA</p>
            <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set One</span>
            <ul>
              <li>15 Step ></li>
              <li>Golgi Apparatus ></li>
              <li>15 Step</li>
              <li>Subterranean Homesick Alien / Twist</li>
              <li>You And Whose Army ></li>
              <li>Character Zero</li>
              <li>High And Dry / Chalkdust Torture</li>
              <li>Let Down</li>
              <li>Bodysnatchers ></li>
              <li>Weekapaug Groove</li>
              <li>Paranoid Android ></li>
              <li>Tweezer ></li>
              <li>Paranoid Android</li>
            </ul>
            <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set Two</span>
            <ul>
              <li>Fluffhead ></li>
              <li>Karma Police ></li>
              <li>You Enjoy Myself ></li>
              <li>Fluffhead</li>
              <li>Reckoner ></li>
              <li>Carini</li>
              <li>Harry Hood ></li>
              <li>Electioneering ></li>
              <li>Harry Hood</li>
            </ul>
            <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Encore</span>
            <ul>
              <li>National Anthem ></li>
              <li>Tweezer Reprise</li>
            </ul>
          </div>
        </div>
        <NewsItem
          item={nonFeaturedNews[0]}
        />
      </div>

    </div>
  {/if}
</div>

<style>
  li {
    @apply font-light text-sm;
  }
</style>