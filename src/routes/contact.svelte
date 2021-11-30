<script lang='ts'>
  import alexjosh from '../assets/alex-josh.png'
</script>

<svelte:head>
  <title>Weird Phishes | Contact</title>
</svelte:head>

<div class='flex md:space-x-8 flex-col md:flex-row mt-6'>
  <div class='w-full md:w-100 flex-shrink-0'>
    <img class='hidden md:block filter grayscale' src={alexjosh} />
  </div>
  <div class='space-y-4 md:space-y-8'>
    <h1 class='font-semibold text-2xl'>Contact Weird Phishes</h1>
    <div>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider'>Booking/Management</span>
      <div class='bg-white w-full border-1 shadow-sm p-2.5'>
        <p>Alex Glover</p>
        <p>Email: <a class='link' href='emailto:weirdphishesmusic@gmail.com'>weirdphishesmusic@gmail.com</a></p>
        <p>Phone: <a class='link' href='tel:516-510-0500'>516-510-0500</a></p>
      </div>
    </div>
    <div class='flex flex-col space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-4 lg:flex-row'>
      <div class='flex-1'>
        <div class='bg-phish-purple w-full h-1' />
        <span class='text-sm uppercase font-light tracking-wider'>Follow us on Social Media</span>
      
        <div class='bg-white w-full border-1 shadow-sm p-2.5'>
          <p><i class="fab fa-facebook text-blue-600 w-5"></i>&nbsp;<a class='link' target='blank' href='https://www.facebook.com/weirdphishes'>Facebook</a></p>
          <p><i class="fab fa-instagram text-orange-500 w-5"></i>&nbsp;<a class='link' target='blank' href='https://www.instagram.com/weirdphishes'>Instagram</a></p>
          <p><i class="fab fa-youtube text-red-600 w-5"></i>&nbsp;<a class='link' target='blank' href='https://www.youtube.com/weirdphishes'>YouTube</a></p>
          <p><i class="fab fa-twitter text-blue-600 w-5"></i>&nbsp;<a class='link' target='blank' href='https://www.twitter.com/weirdphishesmus'>Twitter</a></p>
        </div>
      </div>

      <div class='flex-1'>
        <div class='bg-phish-purple w-full h-1' />
        <span class='text-sm uppercase font-light tracking-wider'>Everything Else</span>
        <div class='bg-white w-full border-1 shadow-sm p-2.5'>
          <p><i class="fas fa-drum text-teal-600 w-5"></i>&nbsp;<a class='link' href='https://www.bandsintown.com/a/14950026-weird-phishes'>Bandsintown</a></p>
          <p><i class="fas fa-guitar text-blue-500 w-5"></i>&nbsp;<a class='link' href='https://www.jambase.com/band/weird-phishes'>Jambase</a></p>
        </div>
      </div>
    </div>

    <div>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider'>Worth Noting</span>
      <div class='bg-white w-full border-1 shadow-sm p-2.5 space-y-2'>
        <p>Weird Phishes is available for all types of shows. While a typical headlining performance is a 2-set, 180+ minute performance, we are open to any and all offers including festival inquiries, opening slots, private parties, or any other events you can think of. Feel free to get in touch regardless - we look forward to hearing from you.</p>
        <h2><a class='link' href='/epk'>Click here for the Weird Phishes EPK</a></h2>
      </div>
    </div>
  </div>
</div>