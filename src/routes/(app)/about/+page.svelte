<script lang='ts'>
  import BandMember from "$src/components/BandMember.svelte";

</script>

<svelte:head>
  <title>Weird Phishes | About</title>
</svelte:head>

<div class='space-y-4 md:space-y-4 mt-6'>
  <img alt='In Rainbows Banner' src="https://www.dropbox.com/s/zhxdfsltw77mudy/ir-banner.png?raw=1" />
  <div class='w-full h-0.25 bg-gray-200' />
  <p class='italic font-medium text-lg'>"While the hybrid cover band thing has been done before, the way Weird Phishes combines their two sources of inspiration is both imaginative and principled."&nbsp;&nbsp;-<a class='link' href='https://liveforlivemusic.com/news/weird-phishes-video/' target='blank'>Live for Live Music</a></p>
  <div class='w-full h-0.25 bg-gray-200' />
  
  <div class='bg-phish-purple w-full h-1' />
  <span class='text-sm uppercase font-light tracking-wider'>About the Band</span>
  <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col space-y-2'>
    <p class='bio-text'>Weird Phishes is exactly what it sounds like - the iconic melancholy rock songs of Radiohead completely reborn as danceable, crunchy jams. With full-album performances, unexpected mashups, and gluey funk-driven improvisation, their jam-heavy take on alt-rock classics has sparked an unexpected energy in audiences across the northeast. Cleverly avoiding the "tribute" trope, Weird Phishes continues to push the envelope of what a mashup band can be, delivering performances that need to be experienced in order to believe.</p>
    <p class='bio-text'>A quick glance at the band’s social media gives a glimpse into why this unlikely mashup proves worthwhile. “Bought tickets on a whim because I love both bands, had wanted to check out the club, and thought it would be amusing. I was not expecting such incredible musicianship and thought that had gone into their set...it was one of the best shows I’ve seen in years.” Said one user. “Clean, creative mashups of a favorite album and great Phish selections. Great energy.” says another. “Impossibly excellent show.”</p>
    <p class='bio-text'>In July 2019, Weird Phishes solidified their place in the New England jam community, playing back-to-back afterparties after Phish’s performances at Fenway Park. With a growing fanbase and an ever-changing setlist, the band continued their breakout year with a fall run to the midwest. In a weird bout of poetic justice, Weird Phishes was the last band to play at northeast jam-staple venue Nectar's before the coronavirus pandemic of 2020.</p>
    <p class='bio-text'>When live music came back in 2021, Weird Phishes returned with a force. The band made its triumphant return with a headlining performance at the inaugural Safe and Soundz festival, and took a victory lap with appearances across the northeast at Circus of Life Festival and a sold-out performance to christen Boston's newest venue, Aeronaut Cannery.</p>
  </div>

  <div class='bg-phish-purple w-full h-1' />
  <span class='text-sm uppercase font-light tracking-wider'>Weird Phishes Is</span>
  <div class='bg-white w-full border-1 shadow-sm p-2.5 flex flex-col'>
    <div class='space-y-8 md:space-y-4'>
      <div class='flex justify-around items-start space-x-4 flex-col items-center space-y-8 md:flex-row md:space-y-0'>
        <BandMember
          name='Alex Glover'
          instrument='Guitar/Vocals'
          img="https://www.dropbox.com/s/t09i0ghyg0endaq/alex.jpg?raw=1"
          description='Alex Glover is a multi-instrumentalist and producer living in Boston, MA. He is a member of post-rock group It Was A Good Dream and releases experimental electronic music through his Ellimist moniker. In 2021 he was named "Producer of the Year" at the New England Music Awards.'
        />
        <BandMember
          name='Josh Knowles'
          instrument='Violin/Vocals'
          img="https://www.dropbox.com/s/krbh2m2poret6qw/josh.jpg?raw=1"
          description='Josh Knowles is an electric violinist, singer/songwriter, and composer. He has featured on albums by The Front Bottoms, Taking Back Sunday, and An Horse, performed on stages for Barack Obama, David Letterman and James Taylor, and frequently collaborates with Cirio Collective and Boston Ballet'
        />
      </div>
      <div class='flex justify-around items-start space-x-4 flex-col items-center space-y-8 md:flex-row md:space-y-0'>
        <BandMember
          name='Pat Pingeton'
          instrument='Bass Guitar'
          img="https://www.dropbox.com/s/1chq1gyc75s844f/pat.jpg?raw=1"
          description='Pat Pingeton is an in-demand bassist and personality alike. He also plays with Booty Giuliani, 73 Duster, Mike Morrissey, and a slew of other artists throughout the northeast. One would be remiss if they failed to mention his Bernese Mountain Dog, Mr. Jibbers, the inarguable heart and soul of Weird Phishes.'
        />
        <BandMember
          name='PJ Holaday'
          instrument='Drums'
          img="https://www.dropbox.com/s/5uw8ntjete5h27u/pj.jpg?raw=1"
          description='PJ is known professionally throughout the northeast as a passionate, captivating performer and motivator who has devoted his life to music education, performance and therapy. He has toured with theater productions, including "A Night With Janis Joplin" and "Charlie Brown Jazz Christmas.'
        />
      </div>
      <div class='flex justify-around items-start space-x-4 flex-col items-center space-y-8 md:flex-row md:space-y-0'>
        <BandMember
          name='Derek Dupuis (AKA D-Rokk)'
          instrument='Keys/Vocals'
          img="https://www.dropbox.com/s/tc6n960akfiohby/d-rokk.jpg?raw=1"
          description={`Derek "D-Rokk" Dupuis is a lifelong multi-instrumentalist and vocalist. He also performs with the Video Game Orchestra, The Wild Versatile, and records solo music as a one-man-band. Though soft-spoken upon first glance, his mojo and unexpected dance moves have quickly become a sought-after highlight of any Weird Phishes performance.`}
        />
      </div>
    </div>
  </div>
  <h2 class='pt-12 text-center'><a class='link' href='/epk'>Click here for the Weird Phishes EPK</a></h2>
</div>

<style>
</style>