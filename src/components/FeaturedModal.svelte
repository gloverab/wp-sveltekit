<script lang='ts'>
  export let onHide: () => void
  export let show = false
  export let subtitle: string
  export let title: string
  export let videoUrl: string

  let animateHide = false
  let wrapperW

  const handleHide = () => {
    animateHide = true
    setTimeout(onHide, 400)
  }
</script>

{#if show}
  <button
    on:click={handleHide}
    class:bg-opacity-0={animateHide}
    class:bg-opacity-85={!animateHide}
    class:duration-200={animateHide}
    class='
      fixed
      z-1100
      cursor-default
      w-screen
      h-screen
      top-0
      left-0
      bg-gray-800
      flex
      justify-center
      items-center
      p-5
    '>
    <div
      class:translate-y-10={animateHide}
      class:duration-200={animateHide}
      class:opacity-0={animateHide}
      class:opacity-100={!animateHide}
      class='
        border-3
        border-phish-orange
        rounded-xl
        bg-white
        text-black
        p-5
        max-w-full
        transform
      '>
      <h1 class='text-3xl font-semibold text-phish-grey-dark'>{title}</h1>
      <p class='italic text-phish-grey-dark'>{subtitle}</p>
      <div class='flex flex-col items-center uppercase font-base mb-7.5'>
      </div>

      <div class='flex flex-col space-y-7.5 mb-6.5'>
        <div class='w-full sm:w-142 md:w-160 lg:w-200'>
          <div bind:clientWidth={wrapperW}>
            <div class='w-full relative' style="height:{wrapperW / 1.7777777}px">
              <iframe style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class='flex justify-center'>
        <button data-content="Continue to site" on:click={handleHide} class='p-1'>
          <span class='uppercase italic tracking-0.2em'>Or Continue to site</span>
        </button>
      </div>
    </div>
  </button>
{/if}