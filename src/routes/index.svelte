<script lang='ts'>
  import NewsItem from "$src/components/NewsItem.svelte";
  import banner from "../assets/wp-lucky-fb-generic.png";
  import aeronaut from "../assets/aeronaut.png";
  import aeronautBanner from "../assets/wp-aeronaut-fb.png";
  import * as posters from '$src/constants';
</script>

<div class='space-y-4 mt-6'>
  <div class='h-30 md:h-80 overflow-hidden flex items-center'>
    <img src={banner} />
  </div>
  <div class='w-full h-0.25 bg-gray-200' />
  <p class='italic font-medium text-lg'>"Weird Phishes successfully fuses the work of the groundbreaking experimental indie band Radiohead with the music of Phish."&nbsp;&nbsp;-<a class='link' href='https://jambands.com/news/2019/03/15/new-band-weird-phishes-will-blend-phish-with-radiohead/' target='blank'>Relix/JamBands.com</a></p>
  <div class='w-full h-0.25 bg-gray-200' />

  <div class='flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row'>
    <div class='w-full md:w-57.5'>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider mb-2'>Latest News</span>
      
      <div class='flex flex-col space-y-4'>
        <div class='space-y-2 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col'>
          <NewsItem
            index={0}
            title='Aeronaut Cannery: Thank You, Boston!!'
            date="11/22/2021"
            img={aeronaut}
            text1="Our show at the Boston's brand new Aeronaut Cannery was a massive success, due in no small part to all of you. Last Friday was the very first Friday this venue had ever been open, and we nearly sold it out. Our lighting was some of the best ever, thanks to the amazing Vin Pugliese (Pink Talking Fish, Le Special) and our sound was second-to-none thanks to our friend Kevin Corsett, who was simultaneously navigating a brand new soundsystem and mixing us on the fly."
            text2="It's hard to imagine that less than a year ago the idea of playing shows seemed completely foreign. It's impossible to overstate the joy that we felt to share a space with you again and play music to some of the happiest faces we've ever seen. Thank you all, from the bottom of our hearts."
          />
          <div class='w-full h-0.25 bg-gray-200' />
          <NewsItem
            index={1}
            title='New Video! Watch "15 Step > Golgi Apparatus" Live from Newburyport'
            date="11/2/2021"
            img={aeronaut}
            text1="Our show at the Boston's brand new Aeronaut Cannery was a massive success, due in no small part to all of you. Last Friday was the very first Friday this venue had ever been open, and we nearly sold it out. Our lighting was some of the best ever, thanks to the amazing Vin Pugliese (Pink Talking Fish, Le Special) and our sound was second-to-none thanks to our friend Kevin Corsett, who was simultaneously navigating a brand new soundsystem and mixing us on the fly."
            text2="It's hard to imagine that less than a year ago the idea of playing shows seemed completely foreign. It's impossible to overstate the joy that we felt to share a space with you again and play music to some of the happiest faces we've ever seen. Thank you all, from the bottom of our hearts."
          />
          <div class='w-full h-0.25 bg-gray-200' />
          <NewsItem
            index={2}
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
            index={3}
            title='Thank You Safe and SoundZ'
            date="6/15/2021"
            text1="We had an incredible time with friends new and old at the inaugural Safe n Soundz festival. Thank you all for sharing your time with us. It was incredible to bring Weird Phishes to a mountaintop, play music, and hang out with what we feel like is a brand new part of our family. We can't wait to see you all again. And an incredibly special thank you to George Adler and everyone at Shepherd Productions. We couldn't have asked for a better return to playing live music."
            text2="Stay tuned for updates and more shows coming soon!"
          />
          <div class='w-full h-0.25 bg-gray-200' />
          <NewsItem
            index={4}
            title='Tonight: Weird Phishes at Electric Haze'
            date="6/5/2021"
          />
          <div class='w-full h-0.25 bg-gray-200' />
          <NewsItem
            index={5}
            title='Summer Festival Announcement: Weird Phishes will Headline Safe & Soundz Night 1'
            date="3/15/2021"
          />
        </div>
        <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
          <img src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/155129487_842598203004115_1394750598899962830_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=V3ZEgmDgYW0AX8HFESN&tn=ynwzltbB1areADxv&_nc_ht=scontent-bos3-1.xx&oh=f8a6f6d56ba4ac9419ec67cd0a9b0ba5&oe=61CB04DD' />
          <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Thank you Safe and Soundz Festival!</h1>
          <p class='text-sm text-phish-grey-light'>We had an incredible time with friends new and old at the inaugural Safe n Soundz festival. Thank you all for sharing your time with us. It was incredible to bring Weird Phishes to a mountaintop, play music, and hang out with what we feel like is a brand new part of our family. We can't wait to see you all again. And an incredibly special thank you to George Adler and everyone at Shepherd Productions. We couldn't have asked for a better return to playing live music.</p>
        </div>
      </div>
    </div>

    <div class='flex-1'>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider mb-2'>Watch Now</span>
      <div class='space-y-4'>
        <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2'>
          <img src='https://www.dropbox.com/s/ii1rb7lhj4xqndy/15-step-vid.png?raw=1' />
          <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Watch "15 Step > Golgi Apparatus > 15 Step" Live from Newburyport</h1>
          <p class='text-sm text-phish-grey-light'>This 11-minute rendition of 15 Step was recorded live at Newburyport Brewing Company. Nils Carlson recorded the multitrack of this performance, and Weird Phishes' own Alex Glover mixed and mastered the track. You can watch the full performance here. Keep an eye out for a full release of this show coming soon.</p>
        </div>

        <div class='flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row'>
          <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
            <img src={aeronaut} />
            <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Aeronaut Cannery: Thank You Boston!</h1>
            <p class='text-sm text-phish-grey-light'>Our show at the Boston's brand new Aeronaut Cannery was a massive success, due in no small part to all of you. Last Friday was the very first Friday this venue had ever been open, and we nearly sold it out. Our lighting was some of the best ever, thanks to the amazing Vin Pugliese (Pink Talking Fish, Le Special) and our sound was second-to-none thanks to our friend Kevin Corsett, who was simultaneously navigating a brand new soundsystem and mixing us on the fly.</p>
          </div>
          <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
            <img src={posters.aeronaut1.img} />
            <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Weird Phishes at Aeronaut Cannery</h1>
            <p class='text-sm text-phish-grey-light'>Weird Phishes will be performing their last hometown show of the year at Aeronaut Cannery in Boston/Everett, MA on November 19th, 2021.</p>
          </div>
        </div>
        <div class='flex-1 bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2 self-start'>
          <img src={posters.opus2021.img} />
          <h1 class='text-xl font-semibold text-phish-grey-dark leading-5'>Soundcheck Studios & Opus Underground</h1>
          <p class='text-sm text-phish-grey-light'>Weird Phishes will be performing at the brand new Soundcheck Studios in Pembroke, MA on Tuesday, October 12th. Following that performance, the band will make their return to their home-away-from-home venue, Opus Underground on October 15th, 2021.</p>
        </div>
      </div>
    </div>

    <div class='md:w-57.5 text-phish-grey-light'>
      <div class='bg-phish-purple w-full h-1' />
      <span class='text-sm uppercase font-light tracking-wider mb-2'>From the Road</span>
      <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col'>
        <p class='text-2xl tracking-wide'>Nov. 19th 2021</p>
        <p class='tracking-wide'>Aeronaut Cannery</p>
        <p class='tracking-wide'>Boston, MA</p>
        <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set One</span>
        <ul>
          <li>15 Step ></li>
          <li>Golgi Apparatus ></li>
          <li>15 Step</li>
          <li>Subterranean Homesick Alien / Twist</li>
          <li>You And Whose Army ></li>
          <li>Character Zero</li>
          <li>High And Dry / Chalkdust Torture</li>
          <li>Let Down</li>
          <li>Bodysnatchers ></li>
          <li>Weekapaug Groove</li>
          <li>Paranoid Android ></li>
          <li>Tweezer ></li>
          <li>Paranoid Android</li>
        </ul>
        <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Set Two</span>
        <ul>
          <li>Fluffhead ></li>
          <li>Karma Police ></li>
          <li>You Enjoy Myself ></li>
          <li>Fluffhead</li>
          <li>Reckoner ></li>
          <li>Carini</li>
          <li>Harry Hood ></li>
          <li>Electioneering ></li>
          <li>Harry Hood</li>
        </ul>
        <span class='mt-6 mb-3 text-xs uppercase text-phish-green'>Encore</span>
        <ul>
          <li>National Anthem ></li>
          <li>Tweezer Reprise</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  li {
    @apply font-light text-sm;
  }
</style>