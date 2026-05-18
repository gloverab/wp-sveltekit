<script lang="ts">
  import ContentSection from "$src/components/ContentSection.svelte";
  import Setlist from "$src/components/Setlist.svelte";
  import { dharmaBums, middleEast, pastSetlists } from "$src/setlists";
</script>

<div class="space-y-4 pt-6">
  <div class="space-y-2">
    <p class="font-phish">
      This record is incomplete and always being updated. If you have evidence
      that a setlist is wrong, please get in touch. We typically do not write
      our setlists, so much of this is to the best of our recollection (which is
      usually around 90-95% correct).
    </p>
    <p class="font-phish">See you at the next show!</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
    {#each pastSetlists as setlist}
      <div class="col-span-1">
        <ContentSection title="">
          {#snippet content()}
            <Setlist {setlist} />
          {/snippet}
        </ContentSection>
      </div>
    {/each}
  </div>
</div>
