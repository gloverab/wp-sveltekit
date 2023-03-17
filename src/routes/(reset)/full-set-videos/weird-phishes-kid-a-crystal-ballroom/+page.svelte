<script lang='ts'>
  import { tweened } from 'svelte/motion';
  import { cubicIn, cubicOut, linear } from 'svelte/easing';
  import { onMount } from "svelte";

  const animationTime = 800

  const videoOpacity = tweened(0, {
		duration: animationTime,
		easing: linear
	});

  const blackOpacity = tweened(0, {
		duration: 1500,
		easing: linear
	});

  const barsOpacity = tweened(100, {
		duration: 2500,
		easing: linear
	});

  let videoWrapperW
  let showVideo = false
  const videoUrl = "https://www.youtube.com/embed/mKZR-2hKfic"

  onMount(() => {
    setTimeout(() => videoOpacity.set(100), 2000)
    setTimeout(() => blackOpacity.set(80), 1000)
    setTimeout(() => barsOpacity.set(0), 1500)
  })
</script>

<div style='background-image: url("https://www.dropbox.com/s/w4m474wf3i1dw5c/psychedelic-background.png?raw=1"); background-position: center; background-size: cover;' class='h-screen w-screen'>
  <div style="opacity:{$blackOpacity}%;" class='w-full h-full absolute top-0 left-0 opacity-10 z-0 bg-black' />
  <div style="opacity:{$barsOpacity}%" class='lg:w-8 xl:w-12 absolute top-0 left-0 h-full bg-black' />
  <div style="opacity:{$barsOpacity}%" class='lg:w-8 xl:w-12 absolute top-0 right-0 h-full bg-black' />
  <div class='w-full h-full flex flex-col justify-center relative z-1 lg:px-8 xl:px-12'>
    <div style="opacity:{$barsOpacity}%" class='flex flex-col md:flex-1 w-full bg-black' />
    <div class='w-full' bind:clientWidth={videoWrapperW}>
      <div
        class='w-full relative border-1 border-black'
        style="height:{videoWrapperW / 1.7777777}px;">
        <iframe style="opacity:{$videoOpacity}%;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src={videoUrl} title="YouTube video player" frameborder="0" showinfo="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
      </div>
    </div>
    <div style="opacity:{$barsOpacity}%" class='flex flex-col flex-1 w-full bg-black' />
  </div>
</div>

<style global>
  .ytp-show-cards-title {
    display: none!important;
  }
</style>