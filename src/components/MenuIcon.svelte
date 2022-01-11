<script lang='ts'>
  export let isActive = false
</script>

<div class='menu-icon-wrapper h-15 px-4 flex justify-center items-center'>
  <div id='menu-icon' class="
    menu-icon
    flex
    flex-col
    justify-between
    items-end
    w-7
    h-3.5
    " class:isActive>
    <div class='menu-line h-0.75 w-full rounded menu-line-1 bg-white'></div>
    <div class='menu-line h-0.75 w-3/4 rounded menu-line-2 bg-white'></div>
  </div>
</div>

<style>
  .menu-icon {
    z-index: 999;
    transition: .2s ease all;
  }

  .menu-line {
    transition: .3s ease all;
  }

  .menu-icon-wrapper:hover .menu-line {
    width: 100%;
  }

  .isActive .menu-line.menu-line-1 {
    transform: translateY(180%) rotate(45deg);
  }

  .isActive .menu-line.menu-line-2 {
    width: 100%;
    transform: translateY(-180%) rotate(135deg);
  }
</style>