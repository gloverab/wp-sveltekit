<script lang='ts'>
  export let date: string
  export let title: string
  export let text1: string
  export let ctaDisabled = false
  export let cta = ''
  export let ctaLink = ''
  export let subtitle = ''
  export let text2 = ''
  export let img = ''
  export let headerImg = ''
</script>

<div class='space-y-2 flex-shrink-0'>
  <div>
    <h4 class='text-xs'>{date}</h4>
    <h1 class='text-3xl font-semibold'>{title}</h1>
    {#if subtitle}
      <h4>{subtitle}</h4>
    {/if}
  </div>

  {#if headerImg}
    <div class='w-full'>
      <img src={headerImg} />
    </div>
  {/if}

  {#if img}
    <div class='flex flex-col space-y-2 md:space-y-0 md:flex-row'>
      <div class='w-full md:w-100 flex-shrink-0 mr-4'>
        <img src={img} />
      </div>
      <p>{text1}</p>
    </div>
  {:else}
    <p>{text1}</p>
  {/if}

  {#if text2}
    <p>{text2}</p>
  {/if}

  {#if cta}
    {#if !ctaDisabled}
      <p class='py-3'>
        <a href={ctaLink}>
          <span class='btn'>{cta}</span>
        </a>
      </p>
    {:else}
      <p class='py-3'><span class='btn disabled'>{cta}</span></p>
    {/if}
  {/if}
</div>