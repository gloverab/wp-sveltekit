<script lang='ts'>
  import { page } from '$app/stores';
  import { showMailingListModal } from '$src/stores/main';
  import { onMount } from 'svelte';
  import 'virtual:windi.css';

  onMount(() => {
    if ($page.route.id === "/(app)") {
      showMailingListModal.set(true)
    }
  })
</script>

<slot />

<style global>
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  @font-face{
    font-family: 'BD_Plakatbau';
    src: url('/BD-Plakatbau.ttf') format('truetype');
  }
  
</style>