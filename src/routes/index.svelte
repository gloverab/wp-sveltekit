<script lang='ts'>
  import NewsItem from "$src/components/NewsItem.svelte";
  import banner from "../assets/wp-lucky-fb-generic.png";
  import aeronaut from "../assets/aeronaut.png";
  import aeronautBanner from "../assets/wp-aeronaut-fb.png";
</script>

<div class='space-y-8 md:space-y-4'>
  <img src={banner} />
  <div class='w-full h-0.25 bg-gray-200' />
  <p class='italic font-medium text-lg'>"Weird Phishes successfully fuses the work of the groundbreaking experimental indie band Radiohead with the music of Phish."&nbsp;&nbsp;-<a class='link' href='https://jambands.com/news/2019/03/15/new-band-weird-phishes-will-blend-phish-with-radiohead/' target='blank'>Relix/JamBands.com</a></p>
  <div class='w-full h-0.25 bg-gray-200' />
  <div class='space-y-8'>
    <NewsItem
      title='Thank You, Boston!!'
      date="11/22/2021"
      img={aeronaut}
      text1="Our show at the Boston's brand new Aeronaut Cannery was a massive success, due in no small part to all of you. Last Friday was the very first Friday this venue had ever been open, and we nearly sold it out. Our lighting was some of the best ever, thanks to the amazing Vin Pugliese (Pink Talking Fish, Le Special) and our sound was second-to-none thanks to our friend Kevin Corsett, who was simultaneously navigating a brand new soundsystem and mixing us on the fly."
      text2="It's hard to imagine that less than a year ago the idea of playing shows seemed completely foreign. It's impossible to overstate the joy that we felt to share a space with you again and play music to some of the happiest faces we've ever seen. Thank you all, from the bottom of our hearts."
    />
    <div class='w-full h-0.25 bg-gray-200' />
    <NewsItem
      title="Weird Phishes at Aeronaut Cannery"
      date="9/30/2021"
      headerImg={aeronautBanner}
      text1="Weird Phishes will be performing their last hometown show of the year at Aeronaut Cannery in Boston/Everett, MA on November 19th, 2021."
      text2="This is a brand new venue in Boston and we couldn't be more excited to be a part of their opening lineup. Please buy tickets in advance, as this show is likely to sell out."
      cta='Buy Tickets Now →'
      ctaLink='#'
      ctaDisabled
    />
    <div class='w-full h-0.25 bg-gray-200' />
    <NewsItem
      title='Thank You Safe and SoundZ'
      date="6/15/2021"
      text1="We had an incredible time with friends new and old at the inaugural Safe n Soundz festival. Thank you all for sharing your time with us. It was incredible to bring Weird Phishes to a mountaintop, play music, and hang out with what we feel like is a brand new part of our family. We can't wait to see you all again. And an incredibly special thank you to George Adler and everyone at Shepherd Productions. We couldn't have asked for a better return to playing live music."
      text2="Stay tuned for updates and more shows coming soon!"
    />
  </div>
</div>

<style>
</style>