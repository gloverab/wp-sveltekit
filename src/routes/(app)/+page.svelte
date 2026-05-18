<script lang="ts">
  import { run } from "svelte/legacy";

  import Carousel from "$src/components/Carousel.svelte";
  import NewsItem from "$src/components/NewsItem.svelte";
  import NewsFeed from "$src/components/NewsFeed.svelte";
  import { onMount } from "svelte";
  import { newsStore, showMailingListModal } from "$src/stores/main";
  import { baseUrl } from "$src/constants";
  import Modal from "$src/components/Modal.svelte";
  import MailchimpForm from "$src/components/MailchimpForm.svelte";
  import dayjs from "dayjs/esm/index.js";
  import FeaturedVideos from "$src/components/FeaturedVideos.svelte";
  import Setlist from "$src/components/Setlist.svelte";
  import ContentSection from "$src/components/ContentSection.svelte";
  import { middleEast, pastSetlists } from "$src/setlists.js";

  let { data } = $props();

  let attempts = 0;
  let showFeaturedVideo = true;
  let news = $state(data.news);
  let performer = $state(data.performer);

  const getPerformer = async () => {
    try {
      const resp = await fetch(baseUrl + "performers/1");
      if (resp.status === 200) {
        const data = await resp.json();
        return data;
      } else {
        throw resp;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getNews = async () => {
    try {
      const resp = await fetch(baseUrl + "performers/1/news");
      if (resp.status === 200) {
        const data = await resp.json();
        return data;
      } else {
        throw resp;
      }
    } catch (err) {
      console.log(err);
    }
  };

  let loading = $state(!news || !performer);
  let error = undefined;

  const getPerformerAndNews = async () => {
    if ((!news || !performer) && attempts < 3) {
      try {
        const data = await Promise.all([getPerformer(), getNews()]);
        newsStore.set(data);
        performer = data[0];
        news = data[1];
        loading = false;
      } catch (err) {
        attempts = attempts + 1;
        getPerformerAndNews();
        console.log(err);
      }
    }
  };

  const checkShowMail = () => {
    const now = dayjs().format();
    const mailLastHiddenAtLs = localStorage.getItem("mail-hidden-at");
    if (mailLastHiddenAtLs) {
      const mailLastHiddenAt = dayjs(mailLastHiddenAtLs);

      if (mailLastHiddenAt.diff(now, "h") >= 8) {
        showMailingListModal.set(true);
      }
    } else {
      showMailingListModal.set(true);
    }
  };

  const handleClickHideMail = () => {
    const time = dayjs().format();
    try {
      localStorage.setItem("mail-hidden-at", time);
      showMailingListModal.set(false);
    } catch (err) {
      console.log(err);
    }
  };

  onMount(() => {
    checkShowMail();
    if (!performer || !news) {
      getPerformerAndNews();
    }
  });

  let featuredContent = $state();

  run(() => {
    if (news?.length > 0) {
      featuredContent =
        news.find((item) => performer.featured_news_id === item.id) || news[0];
    }
  });

  let featuredContent2 = $derived(
    news?.find((item) => performer.featured_news_2_id === item.id),
  );

  let nonFeaturedNews = $derived(
    news?.filter(
      (item) =>
        item.id !== performer.featured_news_id &&
        item.id !== performer.featured_news_2_id,
    ),
  );
  let newsFeed = $derived(
    news?.filter(
      (item) =>
        item.id !== performer.featured_news_id &&
        item.id !== performer.featured_news_2_id,
    ),
  );
  let sidebarNews = $derived(news?.slice(0, 5));

  let itemTwoHeight = $state();
  let itemThreeHeight = $state();
</script>

<div class="relative space-y-4 mt-0 md:mt-6 z-1">
  <div class="w-full pb-4">
    <div class="md:h-55 flex items-center space-x-2">
      <div class="h-25 md:w-57.5 md:h-53 flex-shrink-0">
        <img
          class="h-full"
          src="https://www.dropbox.com/s/pqte3wghbvsr4xz/circle-logo-texture.png?raw=1"
        />
      </div>
      <div class="h-full hidden md:block">
        <Carousel />
      </div>
      <div class="h-full flex md:hidden flex-col justify-between items-end">
        <div></div>
        <p
          class="italic font-medium text-base md:text-2xl text-phish-grey-dark"
        >
          "Weird Phishes successfully fuses the work of the groundbreaking
          experimental indie band Radiohead with the music of Phish."
        </p>
        <p class="text-phish-orange underline uppercase">
          <a
            class=""
            href="https://jambands.com/news/2019/03/15/new-band-weird-phishes-will-blend-phish-with-radiohead/"
            target="blank">-Relix/JamBands.com</a
          >
        </p>
      </div>
    </div>
  </div>

  {#if !loading && !error && news?.length > 6}
    <div class="flex-1 md:hidden">
      <div class="bg-phish-purple w-full h-1"></div>
      <span class="text-sm uppercase font-light tracking-wider mb-2"
        >Latest Tourdates</span
      >
      <div class="space-y-4">
        <div
          class="bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2"
        >
          <a
            class="featured-content-1-link"
            href={featuredContent.calls_to_actions.length > 0
              ? featuredContent.calls_to_actions[0].link
              : `/news/${featuredContent.id}`}
            target="blank"
          >
            <img alt="Featured Content 1" src={featuredContent.img_1} />
          </a>
          <a
            href={featuredContent.calls_to_actions.length > 0
              ? featuredContent.calls_to_actions[0].link
              : `/news/${featuredContent.id}`}
            target="blank"
            class="featured-content-1-link text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline"
            >{featuredContent?.title}</a
          >
          <p class="text-sm text-phish-grey-light">
            {featuredContent.short_desc}
          </p>
          {#if featuredContent.calls_to_actions?.length > 0}
            {@const cta = featuredContent.calls_to_actions[0]}
            <a
              class="featured-content-1-link text-phish-orange font-bold uppercase"
              target="blank"
              href={cta.link}>{cta.text}</a
            >
          {/if}
        </div>

        <div class="space-y-4 flex-1">
          <NewsItem item={featuredContent2} />
          <NewsItem item={nonFeaturedNews[0]} />
          <NewsItem item={nonFeaturedNews[1]} />
          <NewsItem item={nonFeaturedNews[2]} />
        </div>
      </div>
    </div>
    <div class="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
      <div class="w-full md:w-57.5 space-y-4">
        <NewsFeed news={sidebarNews} />
        <NewsItem item={featuredContent2} />
        <NewsItem item={nonFeaturedNews[3]} />
        {#if nonFeaturedNews[6]}
          <NewsItem item={nonFeaturedNews[6]} />
        {/if}
      </div>

      <div class="flex-1">
        <div class="bg-phish-purple w-full h-1"></div>
        <span class="text-sm uppercase font-light tracking-wider mb-2"
          >Latest Tourdates</span
        >
        <div class="space-y-4">
          <div
            class="bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2"
          >
            <a
              class="featured-content-1-link"
              href={featuredContent.calls_to_actions.length > 0
                ? featuredContent.calls_to_actions[0].link
                : `/news/${featuredContent.id}`}
              target="blank"
            >
              <img alt="Featured Content 1" src={featuredContent.img_1} />
            </a>
            <a
              href={featuredContent.calls_to_actions.length > 0
                ? featuredContent.calls_to_actions[0].link
                : `/news/${featuredContent.id}`}
              target="blank"
              class="featured-content-1-link text-2xl font-semibold text-phish-grey-dark leading-6 hover:text-phish-orange hover:underline"
              >{featuredContent.title}</a
            >
            <p class="text-sm text-phish-grey-light">
              {featuredContent.short_desc}
            </p>
            {#if featuredContent.calls_to_actions?.length > 0}
              {@const cta = featuredContent.calls_to_actions[0]}
              <a
                class="featured-content-1-link text-phish-orange font-bold text-base uppercase hover:underline"
                target="blank"
                href={cta.link}>{cta.text}</a
              >
            {/if}
          </div>

          <div class="flex space-x-4">
            <div class="space-y-4 flex-1">
              <NewsItem item={nonFeaturedNews[2]} bind:elH={itemTwoHeight} />
              <NewsItem
                item={itemTwoHeight > itemThreeHeight
                  ? nonFeaturedNews[5]
                  : nonFeaturedNews[4]}
              />
              {#if nonFeaturedNews[7]}
                <NewsItem item={nonFeaturedNews[7]} />
              {/if}
            </div>
            <div class="space-y-4 flex-1">
              <NewsItem item={nonFeaturedNews[1]} bind:elH={itemThreeHeight} />
              <NewsItem
                item={itemTwoHeight > itemThreeHeight
                  ? nonFeaturedNews[4]
                  : nonFeaturedNews[5]}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-57.5 text-phish-grey-light space-y-4">
        <FeaturedVideos />
        <ContentSection title="From The Road">
          {#snippet content()}
            <Setlist setlist={pastSetlists[0]} />
          {/snippet}
        </ContentSection>
        <NewsItem item={nonFeaturedNews[0]} />
      </div>
    </div>
  {/if}
</div>

<Modal
  classes="max-w-140"
  onHide={handleClickHideMail}
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
