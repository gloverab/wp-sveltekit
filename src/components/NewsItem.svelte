<script lang='ts'>
  export let index
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

  let expanded = false
</script>

<div class='space-y-2 flex-shrink-0 py-2'>
  {#if (headerImg || img) && index == 0}
    <div class='w-full'>
      <img src={headerImg || img} />
    </div>
  {/if}

  <div>
    <h4 class='text-xs text-phish-green'>{date}</h4>
    <h1 class='text-lg font-medium text-phish-orange leading-5'>{title}</h1>
    {#if subtitle}
      <h4>{subtitle}</h4>
    {/if}
  </div>

  {#if expanded}
    <p>{text1}</p>

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
  {/if}
</div>