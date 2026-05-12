<script lang='ts'>
  interface Props {
    name: string;
    img: string;
    instrument: string;
    description: string;
  }

  let {
    name,
    img,
    instrument,
    description
  }: Props = $props();

  let wrapperW = $state()
</script>

<div bind:clientWidth={wrapperW} class='flex flex-col justify-center items-center space-y-2 w-full md:w-70 lg:w-80'>
  <div class='w-full rounded-full overflow-hidden flex items-center' style="height:{wrapperW}px">
    <img src={img} />
  </div>
  <div class='flex flex-col items-center'>
    <span class='text-xl'>{name}</span>
    <span class='text-sm'>{instrument}</span>
  </div>
  <p class='text-sm'>{description}</p>
</div>