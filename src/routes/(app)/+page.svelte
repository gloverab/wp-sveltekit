<script lang='ts'>
  import Carousel from "$src/components/Carousel.svelte";
  import NewsItem from "$src/components/NewsItem.svelte";
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import { onMount } from "svelte";
  import { newsStore, showMailingListModal } from "$src/stores/main";
  import { baseUrl } from "$src/constants";
  import Modal from "$src/components/Modal.svelte";
  import MailchimpForm from "$src/components/MailchimpForm.svelte";

  const url = baseUrl
  let attempts = 0
  let showFeaturedVideo = true

  const getPerformer = new Promise(async (res, rej) => {
    try {
      const resp = await fetch(url + 'performers/1')
      if (resp.status === 200) {
        const data = await resp.json()
        res(data)
      } else {
        rej(resp)
      }
    } catch (err) {
      console.log(err)
    }
  })

  const getNews = new Promise(async (res, rej) => {
    try {
      const resp = await fetch(url + 'performers/1/news')
      if (resp.status === 200) {
        const data = await resp.json()
        res(data)
      } else {
        rej(resp)
      }
    } catch (err) {
      console.log(err)
    }
  })

  let news
  let performer

  let loading = !news || !performer
  let error = undefined

  const getPerformerAndNews = async () => {
    if ((!news || !performer) && attempts < 3) {
      try {
        const data = await Promise.all([getPerformer, getNews])
        newsStore.set(data)
        
        performer = data[0]
        news = data[1]

        loading = false
      } catch (err) {
        attempts = attempts + 1
        getPerformerAndNews()
        console.log(err)
      }
    }
  }

  onMount(() => {
    getPerformerAndNews()
  })

  let featuredContent

  $: if (news?.length > 0) {
    featuredContent = news.find(item => performer.featured_news_id === item.id) || news[0]
    console.log(featuredContent)
  }

  $: featuredContent2 = news?.find(item => performer.featured_news_2_id === item.id)

  $: nonFeaturedNews = news?.filter(item => item.id !== performer.featured_news_id && item.id !== performer.featured_news_2_id)
  $: newsFeed = news?.filter(item => item.id !== performer.featured_news_id && item.id !== performer.featured_news_2_id)
  $: sidebarNews = news?.slice(0,5)

  let itemTwoHeight
  let itemThreeHeight
</script>




<div class='relative space-y-4 mt-0 md:mt-6 z-1'>
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
          <a class='featured-content-1-link' href={featuredContent.calls_to_actions.length === 1 ? featuredContent.calls_to_actions[0].link : `/news/${featuredContent.id}`} target='blank'>
            <img alt='Featured Content 1' src={featuredContent.img_1} />
          </a>
          <a href={featuredContent.calls_to_actions.length === 1 ? featuredContent.calls_to_actions[0].link : `/news/${featuredContent.id}`} target='blank' class='featured-content-1-link text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline'>{featuredContent?.title}</a>
          <p class='text-sm text-phish-grey-light'>{featuredContent.short_desc}</p>
          {#if featuredContent.calls_to_actions?.length > 0}
            {#each featuredContent.calls_to_actions as cta}
              <a class='featured-content-1-link text-phish-orange font-semibold uppercase' target="blank" href='{cta.link}'>{cta.text}</a>
            {/each}
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
            <a class='featured-content-1-link' href={featuredContent.calls_to_actions.length === 1 ? featuredContent.calls_to_actions[0].link : `/news/${featuredContent.id}`} target='blank'>
              <img alt='Featured Content 1' src={featuredContent.img_1} />
            </a>
            <a href={featuredContent.calls_to_actions.length === 1 ? featuredContent.calls_to_actions[0].link : `/news/${featuredContent.id}`} target='blank' class='featured-content-1-link text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline'>{featuredContent.title}</a>
            <p class='text-sm text-phish-grey-light'>{featuredContent.short_desc}</p>
            {#if featuredContent.calls_to_actions?.length > 0}
              {#each featuredContent.calls_to_actions as cta}
                <a class='featured-content-1-link text-phish-orange font-semibold uppercase' target="blank" href='{cta.link}'>{cta.text}</a>
              {/each}
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
            <p class='text-2xl tracking-wide'>November 17th 2023</p>
            <p class='tracking-wide'>The Middle East Downstairs</p>
            <p class='tracking-wide'>Cambridge, MA</p>
            <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set One</span>
            <ul>
              <li>15 Step =></li>
              <li>Golgi Apparatus></li>
              <li>15 Step</li>
              <li>Bodysnatchers =></li>
              <li>Weekapaug Groove<sup>1</sup> =></li>
              <li>Bodysnatchers</li>
              <li>Nude</li>
              <li>Weird Phishes/Arpeggi<sup>2</sup></li>
              <li>All I Need</li>
              <li>Faust Arp<sup>3</sup> =></li>
              <li>Down With Disease<sup>1</sup></li>
              <li>Reckoner =></li>
              <li>Carini<sup>4</sup></li>
              <li>House of Cards<sup>5</sup> =></li>
              <li>Simple</li>
              <li>Jigsaw Falling Into Place =></li>
              <li>Birds of a Feather</li>
              <li>Jigsaw Falling Into Place</li>
              <li>Videotape =></li>
              <li>Slave to the Traffic Light</li>
            </ul>
            <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set Two</span>
            <ul>
              <li>How to Disappear Completely =></li>
              <li>Mike's Song =></li>
              <li>How to Disappear Completely</li>
              <li>Fluffhead =></li>
              <li>Karma Police</li>
              <li>You Enjoy Myself<sup>7, 8</sup> =></li>
              <li>Fluffhead</li>
              <li>OPTIMISTASH<sup>9</sup></li>
              <li>The Tourist ></li>
              <li>Creep<sup>10</sup></li>
            </ul>
            <!-- <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Encore</span>
            <ul>
              <li>You and Whose Army => Character Zero</li>
              <li>Subterranean Homesick Alien / Twist</li>
            </ul> -->

            <ul class='mt-6 mb-3'>
              <li><sup>1</sup>Contained Deadmau5 teases</li>
              <li><sup>2</sup>Contained “Julius” teases</li>
              <li><sup>3</sup>Played in the style of “Down With Disease”</li>
              <li><sup>4</sup>“Killing in the Name Of” guitar solo. “Bulls on Parade” lyrical quotes. Josh screamed “Carini, now!” instead of “come wit’ it now”</li>
              <li><sup>5</sup>Performed over the riff from “Simple”</li>
              <li><sup>6</sup>Only one verse performed. Lyrics changed to reference “House of Cards”</li>
            </ul>
            <ul>
              <li><sup>7</sup>Build and jam sections only</li>
              <li><sup>8</sup>Featured Lee Ross on saxophone</li>
              <li><sup>9</sup>Equal parts Radiohead’s “Optimistic” and Phish’s “Stash”</li>
              <li><sup>10</sup>Incomplete. Performed in a lounge act style</li>
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

<Modal
  classes='max-w-140'
  onHide={() => showMailingListModal.set(false)}
  show={$showMailingListModal}
>
  <MailchimpForm />
</Modal>

<!-- <FeaturedModal
  show={showFeaturedVideo}
  onHide={() => showFeaturedVideo = false}
  title="Watch The First Performance From 'Kid A' Now"
  subtitle={`Watch the proshot video of "Kid A" => "2001" => "PYITE" => "Kid A"`}
  videoUrl="https://www.youtube.com/embed/V31TB2h4ylc"
/> -->

<style>
  li {
    @apply font-light text-sm;
  }
</style>
