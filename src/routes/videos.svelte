<script lang='ts'>
import Video from "$src/components/Video.svelte";
import Loop from '../assets/flashy-clip.webp'
  
</script>

<div class='relative border-l border-r'>
  <Video
    index={0}
    src='https://www.youtube.com/embed/afKq4NmfHfs'
    title=' 15 Step → Golgi Apparatus → 15 Step'
    subtitle='9/11/2021 - Live at Newburyport Brewing Company'
  />
  <Video
    index={1}
    src='https://www.youtube.com/embed/kpV7TVDs7qw'
    title='Paranoid Android → Tweezer → Paranoid Android'
    subtitle='3/22/2019 - Live at Thunder Road'
  />
  <Video
    index={2}
    src='https://www.youtube.com/embed/CgpFKgbijf4'
    title='Fluffhead → Karma Police → Fitter Happier/YEM → Fluffhead'
    subtitle='3/22/2019 - Live at Thunder Road'
  />
</div>