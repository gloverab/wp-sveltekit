<script lang="ts">
  interface Props {
    setlist: any;
  }
  let { setlist }: Props = $props();

  const footnoteKeys = $derived(Object.keys(setlist?.footnotes || {}));
</script>

<div class="space-y-3">
  <div>
    <p class="text-2xl tracking-wide">{setlist.date}</p>
    <p class="tracking-wide">{setlist.venue}</p>
    <p class="tracking-wide">{setlist.location}</p>
  </div>
  {#if setlist.showNotes}
    <div>
      <p class="text-sm">Show Notes:</p>
      <p class="text-sm font-light">{setlist.showNotes}</p>
    </div>
  {/if}
  {#each setlist.sets as set}
    <div>
      <span class="mt-6 mb-3 text-xs uppercase text-phish-green"
        >{set.name}</span
      >
      <ul>
        {#each set.songlist as song}
          {@const hasFootnotes = song.footnotes?.length > 0}
          {@const hasSegue = song.segue}
          <li>
            {song.song}
            {#if hasFootnotes}
              <sup>{song.footnotes?.join(",")}</sup>
            {/if}
            {#if hasSegue}
              =>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  {#if footnoteKeys?.length > 0}
    <ul class="mt-6 mb-3">
      {#each footnoteKeys as key}
        <li><sup>{key}</sup>{setlist.footnotes[key]}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  li {
    @apply font-light text-sm;
  }
</style>
