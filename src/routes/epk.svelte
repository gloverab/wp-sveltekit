<script lang='ts'>
  import epk from '../assets/wp-epk.pdf'

  let wrapperW
</script>

<div bind:clientWidth={wrapperW} class='w-full'>
  <object data={epk} type="application/pdf" width="100%" height="{wrapperW * 1.29411764706}"><a href={epk}>epk.pdf</a></object>
</div>