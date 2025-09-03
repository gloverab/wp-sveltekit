<script lang="ts">
  import { page } from "$app/stores";
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import { baseUrl } from "$src/constants";
  import dayjs from "dayjs/esm";
  import { onMount } from "svelte";

  export let data;

  let article = data.article;

  let articleEl;

  const getArticle = async () => {
    try {
      const url = baseUrl;
      const resp = await fetch(url + `news/${$page.params.id}`);
      article = await resp.json();
    } catch (err) {
      console.log("getArticle ERROR:", err);
    }
  };

  $: if (articleEl) {
    const articleLinks = articleEl.getElementsByTagName("a");
    for (let i = 0; i < articleLinks.length; i++) {
      articleLinks[i].classList.add("text-phish-orange");
      articleLinks[i].classList.add("underline");
    }
  }

  onMount(() => {
    if (!article) {
      getArticle();
    }
  });
</script>

<svelte:head>
  {#if article?.id === 57}
    <title
      >Weird Phishes in Cambridge, MA | "The Bends" at The Middle East
      Downstairs</title
    >
  {/if}
</svelte:head>

<div class="my-3 md:my-6">
  <div class="h-25 md:w-57.5 md:h-53 mb-8 flex-shrink-0">
    <img
      class="h-full"
      alt="circle logo"
      src="https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1"
    />
  </div>
  <div class="bg-phish-purple w-full h-1" />
  <span class="text-sm uppercase font-light tracking-wider mb-2">News</span>
</div>
{#if article}
  <div class="space-y-2 mb-6">
    <div>
      <span class="text-xs font-thin uppercase"
        >{dayjs(article.date).format("MMM DD, YYYY")}</span
      >
      <h1 class="text-4xl font-semibold text-phish-purple">{article.title}</h1>
    </div>
    {#if article.short_desc}
      <h2 class="text-phish-purple">{article.short_desc}</h2>
    {/if}
  </div>
  <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
    <div class="flex-1">
      <div
        class="flex-0 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start"
      >
        <img alt={article.title} src={article.img_1} />
        <div>
          <div
            bind:this={articleEl}
            id="article"
            class="text-base leading-8 text-phish-grey-light mb-4 space-y-1 space-y-6"
          >
            {@html article.long_desc || article.short_desc}
          </div>
          {#if article.calls_to_actions?.length > 0}
            <div class="flex flex-col space-y-2">
              {#each article.calls_to_actions as cta}
                <a
                  class="text-phish-orange font-semibold uppercase"
                  target="blank"
                  href={cta.link}>{cta.text}</a
                >
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="w-57.5">
      <NewsFeed />
    </div>
  </div>
{/if}
