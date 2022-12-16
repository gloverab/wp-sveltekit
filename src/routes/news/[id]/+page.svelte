<script lang='ts' context='module'>
  import { newsStore } from "$src/stores/main";
  import { get } from "svelte/store";

  const getArticle = (id) => {
    return new Promise(async (res, rej) => {
      const url = baseUrl
      const resp = await fetch(url + `news/${id}`)
      if (resp.status === 200) {
        const data = await resp.json()
        res(data)
      } else {
        rej(resp)
      }
    })
  }


  export const load = async ({ page }) => {
    const id = page.params.id
    const existingNews = get(newsStore)
    let article = existingNews.find(item => item.id === id)

    if (!article) {
      const data = await getArticle(id)
      article = data
    }
    return {
      props: {
        article
      }
    }
  }
</script>


<script lang='ts'>
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import { baseUrl } from "$src/constants";
  import dayjs from 'dayjs/esm';

  export let data

  let { article } = data
</script>

<div class='my-3 md:my-6'>
  <div class='h-25 md:w-57.5 md:h-53 mb-8 flex-shrink-0'>
    <img class='h-full' src='https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1' />
  </div>
  <div class='bg-phish-purple w-full h-1' />
  <span class='text-sm uppercase font-light tracking-wider mb-2'>News</span>
</div>
<div class='mb-6'>
  <span class='text-xs font-thin uppercase'>{dayjs(article.date).format('MMM DD, YYYY')}</span>
  <h1 class='text-4xl font-semibold'>{article.title}</h1>
</div>
<div class='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
  <div class='flex-1'>
    <div class='flex-0 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
      <img alt={article.title} src={article.img_1} />
      <div>
        <div class='text-sm text-phish-grey-light mb-4 space-y-1'>
          {@html article.long_desc || article.short_desc}
        </div>
        {#if article.calls_to_actions?.length > 0}
          <a class='text-phish-orange font-semibold' target="blank" href='{article.calls_to_actions[0].link}'>{article.calls_to_actions[0].text}</a>
        {/if}
      </div>
    </div>
  </div>
  <div class='w-57.5'>
    <NewsFeed />
  </div>
</div>