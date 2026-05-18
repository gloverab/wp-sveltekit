<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    content: Snippet;
    spacing?: string;
    applyPadding?: boolean;
  }

  let {
    title,
    content,
    spacing = undefined,
    applyPadding = true,
  }: Props = $props();
</script>

<div class="w-full">
  <div class:mb-6={spacing === "md"}>
    <div class="bg-phish-purple w-full h-1"></div>
    <span class="text-sm uppercase font-light tracking-wider mb-2">{title}</span
    >
  </div>
  <div class:p-3={applyPadding} class="bg-white w-full border-1 shadow-sm">
    {@render content?.()}
  </div>
</div>
