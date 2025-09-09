<script lang="ts">
  import dayjs from "dayjs/esm";

  const bandcampResponse = {
    offers: [
      {
        type: "Tickets",
        url: "https://www.bandsintown.com/t/107325210?app_id=f6a0be4677f3f583fa0bfa26d9e3525c&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
        status: "available",
      },
    ],
    venue: {
      street_address: "351 Hudson Ave",
      country: "United States",
      city: "Albany",
      latitude: "42.6538219",
      name: "Lark Hall",
      location: "Albany, NY",
      postal_code: "12210",
      region: "NY",
      longitude: "-73.76594229999999",
    },
    starts_at: "2025-11-08T20:00:00",
    artist: {
      thumb_url: "https://photos.bandsintown.com/thumb/22633782.jpeg",
      mbid: "",
      facebook_page_url: "",
      image_url: "https://photos.bandsintown.com/large/22633782.jpeg",
      tracker_count: 843,
      tracking: [],
      upcoming_event_count: 4,
      url: "https://www.bandsintown.com/a/14950026?came_from=267&app_id=f6a0be4677f3f583fa0bfa26d9e3525c",
      support_url: "",
      show_multi_ticket: true,
      name: "Weird Phishes",
      options: {
        display_listen_unit: false,
      },
      links: [
        {
          type: "facebook",
          url: "https://www.facebook.com/weirdphishes",
        },
        {
          type: "youtube",
          url: "https://www.youtube.com/@weirdphishes",
        },
        {
          type: "instagram",
          url: "https://www.instagram.com/weirdphishes",
        },
      ],
      artist_optin_show_phone_number: false,
      id: "14950026",
    },
    festival_datetime_display_rule: "",
    description:
      'After their previous Lark Hall album performances of "Ok Computer" and "In Rainbows," Weird Phishes is excited to take listeners on a new sonic journey exploring the careers of both bands, all completely rearranged and mashed up with funk-driven improvisational jams throughout.---Weird Phishes is exactly what it sounds like - the iconic melancholy rock songs of Radiohead completely reborn as danceable, crunchy jams. With full-album performances, unexpected mashups, and gluey funk-driven improvisation, their jam-heavy take on alt-rock classics has sparked an unexpected energy in audiences across the northeast. Cleverly avoiding the "tribute" trope, Weird Phishes continues to push the envelope of what a mashup band can be, delivering performances that need to be experienced in order to believe.A quick glance at the band’s social media gives a glimpse into why this unlikely mashup proves worthwhile. “Bought tickets on a whim because I love both bands, had wanted to check out the club, and thought it would be amusing. I was not expecting such incredible musicianship and thought that had gone into their set...it was one of the best shows I’ve seen in years.” Said one user. “Clean, creative mashups of a favorite album and great Phish selections. Great energy.” says another. “Impossibly excellent show.”In July 2019, Weird Phishes solidified their place in the New England jam community, playing back-to-back afterparties after Phish’s performances at Fenway Park. With a growing fanbase and an ever-changing setlist, the band continued their breakout year with a fall run to the midwest. In a weird bout of poetic justice, Weird Phishes was the last band to play at northeast jam-staple venue Nectar\'s before the coronavirus pandemic of 2020.When live music came back in 2021, Weird Phishes returned with a force. The band made its triumphant return with a headlining performance at the inaugural Safe and Soundz festival, and took a victory lap with appearances across the northeast at Circus of Life Festival and a sold-out performance to christen Boston\'s newest venue, Aeronaut Canner',
    lineup: ["Weird Phishes"],
    festival_start_date: "",
    bandsintown_plus: false,
    title: "",
    artist_id: "14950026",
    presale: "",
    url: "https://www.bandsintown.com/e/107325210?app_id=f6a0be4677f3f583fa0bfa26d9e3525c&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    datetime_display_rule: "datetime",
    datetime: "2025-11-08T20:00:00",
    on_sale_datetime: "",
    sold_out: false,
    id: "107325210",
    ends_at: "",
    free: false,
    festival_end_date: "",
  };

  export let show: typeof bandcampResponse;

  const ticketLink = show.offers?.find((o) => o.type === "Tickets")?.url;
</script>

<div class="p-2 md:p-4 border-b border-b-gray-300">
  <div class="flex items-center justify-between space-x-4">
    <div class="flex items-start space-x-4">
      <a
        rel="noreferrer"
        href={ticketLink}
        target="_blank"
        class="bg-phish-orange w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex flex-col justify-center items-center"
      >
        <span
          class="text-white text-sm md:text-base font-light uppercase leading-4 tracking-wide"
          >{dayjs(show.datetime).format("MMM")}</span
        >
        <span
          class="text-white text-lg leading-4 md:text-5xl font-bold md:leading-9"
          >{dayjs(show.datetime).format("D")}</span
        >
        <span
          class="text-white text-sm md:text-base font-light leading-5 tracking-wide"
          >{dayjs(show.datetime).format("YYYY")}</span
        >
      </a>
      <div>
        <a rel="noreferrer" href={ticketLink} target="_blank">
          <h2
            class="md:text-3xl font-phish text-phish-purple hover:text-phish-orange font-bold"
          >
            {show.venue.name}
          </h2>
        </a>
        <p class="font-phish text-xs md:text-base text-phish-purple-light">
          {show.venue.street_address}
          {show.venue.location}
        </p>
      </div>
    </div>
    <a
      class="hidden md:flex w-30 h-10 bg-phish-orange flex-shrink-0 justify-center items-center"
      href={ticketLink}
      target="_blank"
      rel="noreferrer"
    >
      <p class="text-white text-xs tracking-wide">
        {ticketLink ? "TICKETS" : "ON SALE SOON"}
      </p>
    </a>
  </div>
</div>
