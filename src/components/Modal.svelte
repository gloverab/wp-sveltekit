<script lang="ts">
  import { clickOutside } from "$src/actions/clickOutside";

  interface Props {
    classes?: string;
    onHide: () => void;
    show?: boolean;
    children?: import("svelte").Snippet;
  }

  let { classes = "", onHide, show = false, children }: Props = $props();

  let animateHide = $state(false);

  const handleHide = () => {
    animateHide = true;
    setTimeout(onHide, 400);
  };
</script>

{#if show}
  <div
    class:bg-opacity-0={animateHide}
    class:bg-opacity-85={!animateHide}
    class:duration-200={animateHide}
    class="
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
    "
  >
    <div
      use:clickOutside
      onoutclick={() => handleHide()}
      class:translate-y-10={animateHide}
      class:duration-200={animateHide}
      class:opacity-0={animateHide}
      class:opacity-100={!animateHide}
      class="
        border-3
        border-phish-orange
        rounded-xl
        bg-white
        text-black
        p-5
        max-w-full
        transform
        {classes}
      "
    >
      <button
        onclick={handleHide}
        class="absolute right-0 top-0 bg-white w-8 h-8 rounded-full shadow-sm"
      >
        <p>X</p>
      </button>
      {@render children?.()}
    </div>
  </div>
{/if}
