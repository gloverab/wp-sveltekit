<script lang="ts">
  import backgroundWash from "$assets/colorful-background-wash.jpg?enhanced";
  import bearAndDonutExtended from "$assets/bear-and-donut-extended.png";
  import weird from "$assets/animated-mask/weird.png";
  import phishes from "$assets/animated-mask/phishes.png";
  import boltTopLeft from "$assets/animated-mask/bolt-top-left.png";
  import boltTopRight from "$assets/animated-mask/bolt-top-right.png";
  import boltBottomLeft from "$assets/animated-mask/bolt-bottom-left.png";
  import boltBottomRight from "$assets/animated-mask/bolt-bottom-right.png";
  import splatter from "$assets/animated-mask/splatter.png";
  import msgAfterparty from "$assets/animated-mask/msg-afterparty.png";
  import sonyHall from "$assets/animated-mask/sony-hall.png";
  import dateTime from "$assets/animated-mask/date-time.png";

  import { onMount, tick } from "svelte";
  import { windowHeight } from "$src/stores/main";
  import { fade, fly } from "svelte/transition";
  import BearLogo from "$src/components/BearLogo.svelte";
  import { cubicOut } from "svelte/easing";

  const handleClick = () => {
    fbq("trackCustom", "WPTBMClick", { type: "ticketmaster" });
  };

  const RECT_HEIGHT = 60;
  const TOP_SPACING = 110;

  const MAX_WIDTH = 660;

  let windowW = $state(0);
  let windowH = $state(0);
  let scrollY = $state(0);
  let descriptionH = $state(0);

  let show = $state(false);
  let hideLoading = $state(false);

  onMount(async () => {
    await tick();
    show = true;
    setTimeout(() => {
      hideLoading = true;
    }, 600);
  });

  let useMax = $derived(windowW > MAX_WIDTH);
  let layoutWidth = $derived(useMax ? MAX_WIDTH : windowW);
  let logoSectionHeight = $derived(layoutWidth * 0.70142857142);
  let fromLeft = $derived(useMax ? windowW / 2 - MAX_WIDTH / 2 : 0);

  let buttonY = $derived(TOP_SPACING + logoSectionHeight + descriptionH + 16);
  let heroHeight = $derived(buttonY + RECT_HEIGHT + 16);
</script>

<svelte:head>
  <title>MSG Afterparty - Weird Phishes at Sony Hall July 25, 2026</title>
  <meta property="og:image" content="/wp-sony-hall-og-image.png" />
</svelte:head>

<svelte:window
  bind:scrollY
  bind:innerWidth={windowW}
  bind:innerHeight={windowH}
/>

<main class="bg-primary">
  <div id="bg-wrapper" class="fixed w-screen h-screen overflow-hidden">
    <svg
      width="200%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="bg" patternUnits="userSpaceOnUse" width="200" height="200">
          <path
            d="M0 0V4.19617C1.28342 3.1459 2.20953 1.70189 2.62147 0H0ZM8.63953 0C9.69633 5.29156 5.21005 10.8299 0 11.7859V16.3574C0.750656 16.5073 1.49611 16.7351 2.22169 17.1234C10.8572 21.745 18.62 13.9822 13.9984 5.34668C13.0694 3.61076 12.8896 1.76822 13.2141 0H8.63953V0ZM20.8008 0C18.771 2.48094 18.2356 6.27469 20.3766 10.2753C24.4312 17.8514 14.7264 27.5562 7.15027 23.5016C4.58633 22.1294 2.10853 21.8688 0 22.3785V54.1961C2.87384 51.8444 3.97877 47.4812 1.49843 42.8467C-2.55618 35.2706 7.14557 25.5688 14.7217 29.6234C23.3572 34.245 31.12 26.4822 26.4984 17.8467C22.4438 10.2706 32.1456 0.568804 39.7217 4.62341C45.7923 7.87232 51.4133 4.99175 52.6215 0H20.8008V0ZM58.6395 0C60.055 7.08738 51.5009 14.6679 44.6503 11.0016C36.0148 6.38002 28.255 14.1398 32.8766 22.7753C36.9312 30.3514 27.2264 40.0562 19.6503 36.0016C11.0148 31.38 3.25503 39.1398 7.87659 47.7753C11.0022 53.6155 5.94902 60.6943 0 61.7859V66.3574C0.750656 66.5072 1.49611 66.7351 2.22169 67.1234C10.8572 71.745 18.62 63.9821 13.9984 55.3467C9.94381 47.7706 19.6456 38.0688 27.2217 42.1234C35.8572 46.745 43.62 38.9822 38.9984 30.3467C36.5215 25.7185 38.895 20.2038 44.7022 17.0959C47.741 15.4697 49.1409 15.4746 52.2217 17.1234C60.8572 21.745 68.62 13.9822 63.9984 5.3467C63.0694 3.61078 62.8896 1.76827 63.2141 4.76837e-05H58.6395V0ZM70.8008 0C68.771 2.48094 68.2356 6.27469 70.3766 10.2753C74.4312 17.8514 64.7264 27.5562 57.1503 23.5016C48.5148 18.88 40.755 26.6398 45.3766 35.2753C49.4312 42.8514 39.7264 52.5562 32.1503 48.5016C23.5148 43.88 15.755 51.6398 20.3766 60.2753C24.4312 67.8514 14.7264 77.5562 7.15027 73.5016C4.58633 72.1294 2.10853 71.8688 0 72.3785V104.196C2.87384 101.844 3.97877 97.4812 1.49843 92.8466C-2.55618 85.2705 7.14557 75.5688 14.7217 79.6234C23.3572 84.2449 31.12 76.4821 26.4984 67.8467C22.4438 60.2705 32.1456 50.5688 39.7217 54.6234C48.3572 59.245 56.12 51.4821 51.4984 42.8467C47.4438 35.2706 57.1456 25.5688 64.7217 29.6234C70.081 32.4916 76.2822 30.5603 77.5177 25.6378C78.0834 23.3841 77.6391 19.9782 76.4984 17.8467C72.4438 10.2706 82.1456 0.568804 89.7217 4.62341C95.7923 7.87232 101.413 4.99175 102.621 0H70.8008V0ZM108.64 0C110.055 7.08738 101.501 14.6679 94.6503 11.0016C86.0148 6.38002 78.255 14.1398 82.8766 22.7753C86.9312 30.3514 77.2264 40.0562 69.6503 36.0016C61.0148 31.38 53.255 39.1398 57.8766 47.7753C61.9312 55.3514 52.2264 65.0562 44.6503 61.0016C36.0148 56.38 28.255 64.1398 32.8766 72.7753C36.9312 80.3514 27.2264 90.0562 19.6503 86.0016C11.0148 81.38 3.25503 89.1398 7.87659 97.7753C11.0022 103.616 5.94902 110.694 0 111.786V116.357C0.750656 116.507 1.49611 116.735 2.22169 117.123C10.8572 121.745 18.62 113.982 13.9984 105.347C9.94379 97.7705 19.6456 88.0688 27.2217 92.1234C35.8572 96.745 43.62 88.9821 38.9984 80.3467C36.5215 75.7185 38.895 70.2038 44.7022 67.0959C47.741 65.4696 49.1409 65.4746 52.2217 67.1234C60.8572 71.745 68.62 63.9822 63.9984 55.3467C59.9438 47.7706 69.6456 38.0688 77.2217 42.1234C85.8572 46.745 93.62 38.9822 88.9984 30.3467C84.9438 22.7706 94.6456 13.0688 102.222 17.1234C110.857 21.745 118.62 13.9822 113.998 5.3467C113.069 3.61078 112.89 1.76827 113.214 4.76837e-05H108.64V0ZM120.801 0C118.771 2.48094 118.236 6.27469 120.377 10.2753C124.431 17.8514 114.726 27.5562 107.15 23.5016C98.5148 18.88 90.755 26.6398 95.3766 35.2753C99.4312 42.8514 89.7264 52.5562 82.1503 48.5016C73.5148 43.88 65.755 51.6398 70.3766 60.2753C74.4312 67.8514 64.7264 77.5562 57.1503 73.5016C48.5148 68.88 40.755 76.6398 45.3766 85.2752C49.4312 92.8514 39.7264 102.556 32.1503 98.5015C23.5148 93.88 15.755 101.64 20.3766 110.275C24.4312 117.851 14.7264 127.556 7.15027 123.502C4.58632 122.129 2.10853 121.869 0 122.378V154.196C2.87384 151.844 3.97877 147.481 1.49843 142.847C-2.55618 135.271 7.14557 125.569 14.7217 129.623C23.3571 134.245 31.12 126.482 26.4984 117.847C22.4438 110.271 32.1456 100.569 39.7217 104.623C48.3572 109.245 56.12 101.482 51.4984 92.8466C47.4438 85.2705 57.1456 75.5688 64.7217 79.6234C66.8532 80.7641 70.2591 81.2083 72.5128 80.6427C77.4353 79.4072 79.3666 73.206 76.4984 67.8467C72.4438 60.2705 82.1456 50.5688 89.7217 54.6234C98.3572 59.245 106.12 51.4821 101.498 42.8467C97.4438 35.2706 107.146 25.5688 114.722 29.6234C123.357 34.245 131.12 26.4822 126.498 17.8467C122.444 10.2706 132.146 0.568804 139.722 4.62341C145.792 7.87232 151.413 4.99175 152.621 0H120.801V0ZM158.64 0C160.055 7.08738 151.501 14.6679 144.65 11.0016C136.015 6.38002 128.255 14.1398 132.877 22.7753C136.931 30.3514 127.226 40.0562 119.65 36.0016C111.015 31.38 103.255 39.1398 107.877 47.7753C111.931 55.3514 102.226 65.0562 94.6503 61.0016C86.0148 56.38 78.255 64.1398 82.8766 72.7753C86.9312 80.3514 77.2264 90.0562 69.6503 86.0016C61.0148 81.38 53.255 89.1398 57.8766 97.7753C61.9312 105.351 52.2264 115.056 44.6503 111.002C36.0148 106.38 28.255 114.14 32.8766 122.775C36.9312 130.351 27.2264 140.056 19.6503 136.002C11.0148 131.38 3.25503 139.14 7.87659 147.775C11.0022 153.615 5.94903 160.694 0 161.786V166.357C0.750656 166.507 1.49611 166.735 2.22169 167.123C10.8572 171.745 18.62 163.982 13.9984 155.347C9.94381 147.771 19.6456 138.069 27.2217 142.123C35.8572 146.745 43.62 138.982 38.9984 130.347C34.9438 122.771 44.6456 113.069 52.2217 117.123C60.8572 121.745 68.62 113.982 63.9984 105.347C59.9438 97.7705 69.6456 88.0688 77.2217 92.1234C85.8572 96.745 93.62 88.9821 88.9984 80.3467C84.9438 72.7705 94.6456 63.0688 102.222 67.1234C110.857 71.745 118.62 63.9821 113.998 55.3467C109.944 47.7706 119.646 38.0688 127.222 42.1234C132.581 44.9916 138.782 43.0603 140.018 38.1378C140.583 35.8841 140.139 32.4782 138.998 30.3467C134.944 22.7706 144.646 13.0688 152.222 17.1234C160.857 21.745 168.62 13.9822 163.998 5.34668C163.069 3.61076 162.89 1.76822 163.214 0H158.64V0ZM170.801 0C168.771 2.48094 168.236 6.27469 170.377 10.2753C174.431 17.8514 164.726 27.5562 157.15 23.5016C148.515 18.88 140.755 26.6398 145.377 35.2753C149.431 42.8514 139.726 52.5562 132.15 48.5016C123.515 43.88 115.755 51.6398 120.377 60.2753C124.431 67.8514 114.726 77.5562 107.15 73.5016C98.5148 68.88 90.755 76.6398 95.3766 85.2752C99.4312 92.8514 89.7264 102.556 82.1503 98.5015C73.5148 93.88 65.755 101.64 70.3766 110.275C74.4312 117.851 64.7264 127.556 57.1503 123.502C48.5148 118.88 40.755 126.64 45.3766 135.275C49.4312 142.851 39.7264 152.556 32.1503 148.502C23.5148 143.88 15.755 151.64 20.3766 160.275C24.4312 167.851 14.7264 177.556 7.15027 173.502C4.58632 172.129 2.10853 171.869 0 172.378V200H2.62147C3.13193 197.891 2.87107 195.411 1.49843 192.847C-2.55619 185.271 7.14557 175.569 14.7217 179.623C23.3571 184.245 31.12 176.482 26.4984 167.847C22.4438 160.271 32.1456 150.569 39.7217 154.623C48.3572 159.245 56.12 151.482 51.4984 142.847C47.4438 135.271 57.1456 125.569 64.7217 129.623C73.3572 134.245 81.12 126.482 76.4984 117.847C72.4438 110.271 82.1456 100.569 89.7217 104.623C98.3572 109.245 106.12 101.482 101.498 92.8466C97.4438 85.2705 107.146 75.5688 114.722 79.6234C123.357 84.2449 131.12 76.4821 126.498 67.8467C122.444 60.2705 132.146 50.5688 139.722 54.6234C148.357 59.245 156.12 51.4821 151.498 42.8467C147.444 35.2706 157.146 25.5688 164.722 29.6234C173.357 34.245 181.12 26.4822 176.498 17.8467C172.444 10.2706 182.146 0.568804 189.722 4.62341C193.723 6.76463 197.519 6.2264 200 4.19617V0H170.801V0ZM189.963 9.63135C183.542 9.32036 179.122 15.7589 182.877 22.7753C186.931 30.3514 177.226 40.0562 169.65 36.0016C161.015 31.38 153.255 39.1398 157.877 47.7753C161.931 55.3514 152.226 65.0562 144.65 61.0016C142.519 59.8609 139.116 59.4136 136.862 59.9792C131.94 61.2147 130.008 67.416 132.877 72.7753C136.931 80.3514 127.226 90.0562 119.65 86.0016C111.015 81.38 103.255 89.1398 107.877 97.7753C111.931 105.351 102.226 115.056 94.6503 111.002C86.0148 106.38 78.255 114.14 82.8766 122.775C86.9312 130.351 77.2264 140.056 69.6503 136.002C61.0148 131.38 53.255 139.14 57.8766 147.775C61.9312 155.351 52.2264 165.056 44.6503 161.002C36.0148 156.38 28.255 164.14 32.8766 172.775C36.9312 180.351 27.2264 190.056 19.6503 186.002C11.0148 181.38 3.25501 189.14 7.87659 197.775C8.26485 198.501 8.48964 199.249 8.63953 200H13.2141C14.3059 194.051 21.3815 188.998 27.2217 192.123C35.8572 196.745 43.62 188.982 38.9984 180.347C34.9438 172.771 44.6456 163.069 52.2217 167.123C60.8572 171.745 68.62 163.982 63.9984 155.347C59.9438 147.771 69.6456 138.069 77.2217 142.123C85.8572 146.745 93.62 138.982 88.9984 130.347C84.9438 122.771 94.6456 113.069 102.222 117.123C110.857 121.745 118.62 113.982 113.998 105.347C109.944 97.7705 119.646 88.0688 127.222 92.1234C135.857 96.745 143.62 88.9821 138.998 80.3467C134.944 72.7705 144.646 63.0688 152.222 67.1234C160.857 71.745 168.62 63.9821 163.998 55.3467C159.944 47.7706 169.646 38.0688 177.222 42.1234C185.857 46.745 193.62 38.9822 188.998 30.3467C185.332 23.4961 192.913 14.9423 200 16.3574V11.7859C198.232 12.1103 196.386 11.9306 194.65 11.0016C193.031 10.135 191.445 9.70311 189.963 9.63135V9.63135ZM200 22.3785C195.007 23.5856 192.127 29.2037 195.377 35.2753C199.431 42.8514 189.726 52.5562 182.15 48.5016C173.515 43.88 165.755 51.6398 170.377 60.2753C174.431 67.8514 164.726 77.5562 157.15 73.5016C148.515 68.88 140.755 76.6398 145.377 85.2752C149.431 92.8514 139.726 102.556 132.15 98.5015C123.515 93.88 115.755 101.64 120.377 110.275C124.431 117.851 114.726 127.556 107.15 123.502C98.5148 118.88 90.755 126.64 95.3766 135.275C99.4312 142.851 89.7264 152.556 82.1503 148.502C73.5148 143.88 65.755 151.64 70.3766 160.275C74.4312 167.851 64.7264 177.556 57.1503 173.502C48.5148 168.88 40.755 176.64 45.3766 185.275C49.4312 192.851 39.7264 202.556 32.1503 198.502C27.5154 196.021 23.1524 197.126 20.8008 200H52.6215C53.1319 197.891 52.8711 195.411 51.4984 192.847C47.4438 185.271 57.1456 175.569 64.7217 179.623C73.3572 184.245 81.12 176.482 76.4984 167.847C72.4438 160.271 82.1455 150.569 89.7217 154.623C98.3572 159.245 106.12 151.482 101.498 142.847C97.4438 135.271 107.146 125.569 114.722 129.623C123.357 134.245 131.12 126.482 126.498 117.847C122.444 110.271 132.146 100.569 139.722 104.623C148.357 109.245 156.12 101.482 151.498 92.8466C147.444 85.2705 157.146 75.5688 164.722 79.6234C173.357 84.2449 181.12 76.4821 176.498 67.8467C172.444 60.2705 182.146 50.5688 189.722 54.6234C193.723 56.7646 197.519 56.2264 200 54.1961V22.3785V22.3785ZM189.963 59.6313C183.542 59.3203 179.122 65.7589 182.877 72.7753C186.931 80.3514 177.226 90.0562 169.65 86.0016C161.015 81.38 153.255 89.1398 157.877 97.7753C161.931 105.351 152.226 115.056 144.65 111.002C136.015 106.38 128.255 114.14 132.877 122.775C136.931 130.351 127.226 140.056 119.65 136.002C111.015 131.38 103.255 139.14 107.877 147.775C111.931 155.351 102.226 165.056 94.6503 161.002C86.0148 156.38 78.255 164.14 82.8766 172.775C86.9312 180.351 77.2264 190.056 69.6503 186.002C61.0148 181.38 53.255 189.14 57.8766 197.775C58.2649 198.501 58.4896 199.249 58.6395 200H63.2141C64.3059 194.051 71.3815 188.998 77.2217 192.123C85.8572 196.745 93.62 188.982 88.9984 180.347C84.9438 172.771 94.6456 163.069 102.222 167.123C110.857 171.745 118.62 163.982 113.998 155.347C109.944 147.771 119.646 138.069 127.222 142.123C135.857 146.745 143.62 138.982 138.998 130.347C134.944 122.771 144.646 113.069 152.222 117.123C160.857 121.745 168.62 113.982 163.998 105.347C159.944 97.7705 169.646 88.0688 177.222 92.1234C185.857 96.745 193.62 88.9821 188.998 80.3467C185.332 73.4961 192.913 64.9423 200 66.3574V61.7859C198.232 62.1103 196.386 61.9305 194.65 61.0016C193.031 60.135 191.445 59.7031 189.963 59.6313V59.6313ZM200 72.3785C195.007 73.5856 192.127 79.2037 195.377 85.2752C199.431 92.8514 189.726 102.556 182.15 98.5015C173.515 93.88 165.755 101.64 170.377 110.275C174.431 117.851 164.726 127.556 157.15 123.502C155.019 122.361 151.616 121.914 149.362 122.479C144.44 123.715 142.508 129.916 145.377 135.275C149.431 142.851 139.726 152.556 132.15 148.502C123.515 143.88 115.755 151.64 120.377 160.275C124.431 167.851 114.726 177.556 107.15 173.502C98.5148 168.88 90.755 176.64 95.3766 185.275C99.4312 192.851 89.7264 202.556 82.1503 198.502C77.5154 196.021 73.1524 197.126 70.8008 200H102.621C103.132 197.891 102.871 195.411 101.498 192.847C97.4438 185.271 107.146 175.569 114.722 179.623C120.081 182.492 126.282 180.56 127.518 175.638C128.083 173.384 127.639 169.978 126.498 167.847C122.444 160.271 132.146 150.569 139.722 154.623C148.357 159.245 156.12 151.482 151.498 142.847C147.444 135.271 157.146 125.569 164.722 129.623C173.357 134.245 181.12 126.482 176.498 117.847C172.444 110.271 182.146 100.569 189.722 104.623C193.723 106.765 197.519 106.226 200 104.196V72.3785V72.3785ZM189.963 109.631C183.542 109.32 179.122 115.759 182.877 122.775C186.931 130.351 177.226 140.056 169.65 136.002C161.015 131.38 153.255 139.14 157.877 147.775C161.931 155.351 152.226 165.056 144.65 161.002C136.015 156.38 128.255 164.14 132.877 172.775C136.931 180.351 127.226 190.056 119.65 186.002C111.015 181.38 103.255 189.14 107.877 197.775C108.265 198.501 108.49 199.249 108.64 200H113.214C114.306 194.051 121.381 188.998 127.222 192.123C129.353 193.264 132.759 193.708 135.013 193.143C139.935 191.907 141.867 185.706 138.998 180.347C134.944 172.771 144.646 163.069 152.222 167.123C160.857 171.745 168.62 163.982 163.998 155.347C159.944 147.771 169.646 138.069 177.222 142.123C185.857 146.745 193.62 138.982 188.998 130.347C185.332 123.496 192.913 114.942 200 116.357V111.786C198.232 112.11 196.386 111.931 194.65 111.002C193.031 110.135 191.445 109.703 189.963 109.631V109.631ZM200 122.36C199.782 122.395 199.563 122.429 199.362 122.479C194.44 123.715 192.508 129.916 195.377 135.275C199.431 142.851 189.726 152.556 182.15 148.502C173.515 143.88 165.755 151.64 170.377 160.275C174.431 167.851 164.726 177.556 157.15 173.502C148.515 168.88 140.755 176.64 145.377 185.275C149.431 192.851 139.726 202.556 132.15 198.502C127.515 196.021 123.152 197.126 120.801 200H152.621C153.132 197.891 152.871 195.412 151.498 192.847C147.444 185.271 157.146 175.569 164.722 179.623C166.853 180.764 170.259 181.208 172.513 180.643C177.435 179.407 179.367 173.206 176.498 167.847C172.444 160.271 182.146 150.569 189.722 154.623C193.723 156.765 197.519 156.226 200 154.196V122.36V122.36ZM189.963 159.631C183.542 159.32 179.122 165.759 182.877 172.775C186.931 180.351 177.226 190.056 169.65 186.002C161.015 181.38 153.255 189.14 157.877 197.775C158.265 198.501 158.49 199.249 158.64 200H163.211C164.303 194.051 171.381 188.998 177.222 192.123C179.353 193.264 182.759 193.708 185.013 193.143C189.935 191.907 191.867 185.706 188.998 180.347C185.332 173.496 192.913 164.942 200 166.357V161.786C198.232 162.11 196.386 161.931 194.65 161.002C193.031 160.135 191.445 159.703 189.963 159.631V159.631ZM200 172.378C195.007 173.586 192.127 179.204 195.377 185.275C199.431 192.851 189.726 202.556 182.15 198.502C177.515 196.021 173.152 197.126 170.801 200H200V172.378V172.378Z"
            fill="#232323"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
    </svg>
  </div>

  <div
    style="height: {heroHeight}px; mask-image: url({bearAndDonutExtended})"
    class="bear-donut-mask overflow-hidden w-screen relative"
  >
    <div style="transform: translate3d(0,{scrollY * 0.5}px,0)">
      <enhanced:img
        class="max-w-full"
        src={backgroundWash}
        alt="Background Wash"
        width="100%"
      />
      <enhanced:img
        class="max-w-full"
        src={backgroundWash}
        alt="Background Wash"
        width="100%"
      />
    </div>
  </div>
  <svg width="100%" height="0">
    <mask id="fake-mask">
      <rect x="0" y={buttonY} width="100%" height={RECT_HEIGHT} fill="white" />
    </mask>
  </svg>
  <div
    class:opacity-0={!hideLoading}
    class:opacity-100={hideLoading}
    style="
      height: {heroHeight}px;
      mask-image:
        url({weird}),
        url({phishes}),
        url({boltTopLeft}),
        url({boltTopRight}),
        url({boltBottomLeft}),
        url({boltBottomRight}),
        url({splatter}),
        url({msgAfterparty}),
        url({sonyHall}),
        url({dateTime}),
        url(#fake-mask)
      ;"
    class="absolute duration-500 w-screen top-0 left-0 logo-text-mask overflow-hidden"
  >
    <div style="transform: translate3d(0,{scrollY * 0.5}px,0)">
      <enhanced:img
        class="max-w-full"
        src={backgroundWash}
        alt="Background Wash"
        width="100%"
      />
      <enhanced:img
        class="max-w-full transform -scale-x-100 rotate-x-180 -translate-y-1"
        src={backgroundWash}
        alt="Background Wash"
        width="100%"
      />
    </div>
  </div>
  <!-- </div> -->

  <div
    class:opacity-0={!show}
    class:opacity-100={show}
    bind:clientHeight={descriptionH}
    style="top: {TOP_SPACING +
      logoSectionHeight +
      8}px; left: {fromLeft}px; width: {layoutWidth}px;"
    class="absolute overflow-hidden left-0 px-3 py-4 space-y-1"
  >
    <p
      class:opacity-0={!show}
      class:opacity-100={show}
      class="text-white duration-500"
    >
      Weird Phishes is excited to announce a one-night-only performance after
      Phish's July 25th show at Madison Square Garden. It will be at Sony Hall,
      which in our opinion is one of the coolest venues in Manhattan.
    </p>
    <p
      class:opacity-0={!show}
      class:opacity-100={show}
      class="text-white duration-500"
    >
      Every time Phish plays the Garden we get messages asking when and where
      our afterparty is. This year, we finally have an answer.
    </p>
  </div>

  <div class="overflow-hidden">
    <a
      href="https://www.ticketmaster.com/weird-phishes-a-synergistic-mashup-of-new-york-new-york-07-25-2026/event/000064B6FB988C5C"
      class:opacity-0={!show}
      class:opacity-100={show}
      class="absolute left-0 text-center flex justify-center items-center space-x-2 bg-white disabled:cursor-auto not:disabled:hover:bg-opacity-20"
      onclick={handleClick}
      target="blank"
      style="width: 100%; height: {RECT_HEIGHT}px; top: {buttonY}px;"
    >
      <p class="uppercase text-3xl font-bold">Buy Tickets</p>
      <p class="uppercase text-2xl font-bold">»</p>
    </a>
  </div>

  <div
    class:opacity-0={!show}
    class:opacity-100={show}
    style="left: {fromLeft}px; width: {layoutWidth}px;"
    class="relative px-3 pb-80 overflow-hidden"
  >
    <div class="mb-4">
      <h1 class="text-2xl font-semibold text-white text-center">
        Weird Phishes: A Synergistic Mashup of Radiohead and Phish
      </h1>
      <h2 class="text-lg xs:text-xl font-semibold text-white text-center mb-2">
        July 25, 2026 @ Sony Hall | 11:59 PM - Late
      </h2>
      <div class="flex justify-center">
        <a
          onclick={handleClick}
          target="blank"
          href="https://www.ticketmaster.com/weird-phishes-a-synergistic-mashup-of-new-york-new-york-07-25-2026/event/000064B6FB988C5C"
          class="rounded-full px-4 py-1 bg-orange-300"
        >
          <p class="font-semibold">Tickets on Sale Now</p>
        </a>
      </div>
    </div>

    <p class="text-xl text-white font-semibold mb-4">
      Questions - Frequent and Otherwise
    </p>

    <div class="space-y-3">
      <div class="label-wrapper">
        <p class="t-question">What is Weird Phishes?</p>
        <p class="t-answer">
          - Weird Phishes is a hybrid mashup band that features the music of
          Radiohead and Phish.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Why would I want to see Phish covers after seeing Phish?
        </p>
        <p class="t-answer">
          - You probably wouldn't. And neither would we. Rather than playing
          traditional covers, Weird Phishes throws elements from the source
          material into a genre-spanning blender and rearanges them into
          completely new music, anchored by improvisational freedom. You might
          hear snippets or riffs inspired by Phish songs, but it's a little more
          like picking out samples in a DJ set than hearing covers.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Will your Paranoid Android jam hit the 20-minute mark?
        </p>
        <p class="t-answer">- It has happened before!</p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Do I need to like Radiohead for this? They're too sad for me.
        </p>
        <p class="t-answer">
          - No. While Weird Phishes strives to respect the source material, all
          of the songs are completely rearranged for a live music performance
          that's much closer in spirit to a Phish show.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Do I need to like Phish for this? They're too silly for me.
        </p>
        <p class="t-answer">- No. But how the hell did you end up here?</p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">Do I need to like anything for this?</p>
        <p class="t-answer">
          - No. If you're in this position there is a good chance Weird Phishes
          will be the first thing you ever like.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Will you ripcord into a Farmhouse/Creep mashup?
        </p>
        <p class="t-answer">- Anything could happen. Just kidding, no.</p>
      </div>
      <div class="py-6">
        <a
          href="https://www.ticketmaster.com/weird-phishes-a-synergistic-mashup-of-new-york-new-york-07-25-2026/event/000064B6FB988C5C"
          class="text-center flex justify-center items-center space-x-2 bg-indigo-300"
          onclick={handleClick}
          target="blank"
          style="width: 100%; height: {RECT_HEIGHT}px;"
        >
          <p class="uppercase text-3xl font-bold">Buy Tickets</p>
          <p class="uppercase text-2xl font-bold">»</p>
        </a>
      </div>
      <div class="label-wrapper">
        <p class="t-question">Will you start at 11:59 on the dot?</p>
        <p class="t-answer">
          - Probably not, but it's a lot easier than saying <em
            >"Sometime between 11:50 and 12:15am; really whenever Phish gets
            out...well I guess technically 12:15am is the next day but like,
            it's actually after the Phish show the 25th so remember that."</em
          > We all know which friend would show up on the wrong night. If you're
          confused right now, you're that friend.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">Will you end at Late on the dot?</p>
        <p class="t-answer">- On the dot.</p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          Is Sony Hall really one of the coolest venues in Manhattan?
        </p>
        <p class="t-answer">
          - The vibes are off the charts, and in this writer's opinion, it has
          the best sound in the whole city.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          I heard it's Chris' birthday that day. Will he be there?
        </p>
        <p class="t-answer">
          - He said he will be, but he's definitely gone missing before. If you
          do see him make sure to wish him a happy birthday. He would give me
          shit if I didn't put this in the FAQ.
        </p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">
          You mentioned a blender earlier. Will Drew Carey be there?
        </p>
        <p class="t-answer">- Best we could do is Colin.</p>
      </div>
      <div class="label-wrapper">
        <p class="t-question">Can I bring balloons in?</p>
        <p class="t-answer">- Only if they're birthday balloons.</p>
      </div>
      <div class="py-6">
        <a
          href="https://www.ticketmaster.com/weird-phishes-a-synergistic-mashup-of-new-york-new-york-07-25-2026/event/000064B6FB988C5C"
          class="text-center flex justify-center items-center space-x-2 bg-teal-300"
          onclick={handleClick}
          target="blank"
          style="width: 100%; height: {RECT_HEIGHT}px;"
        >
          <p class="uppercase text-3xl font-bold">Ok, NOW Buy Tickets</p>
          <p class="uppercase text-2xl font-bold">»</p>
        </a>
      </div>
    </div>
  </div>

  <footer
    class="relative flex items-center justify-between h-20 bg-white border-t px-4"
  >
    <p class="text-xs">COPYRIGHT © 2026 · WEIRD PHISHES</p>
    <p class="text-xs">SEE YOU ON THE 25th!</p>
  </footer>
</main>

{#if !hideLoading}
  <div
    in:fly|global={{
      y: windowH,
      duration: 700,
      opacity: 1,
      easing: cubicOut,
    }}
    out:fade|global={{ duration: 500 }}
    class="fixed top-0 left-0 z-900 w-screen h-screen flex items-center justify-center bg-gray-900"
  >
    <div transition:fade|global={{ duration: 300 }} class="w-30 h-30">
      <div class="animate-pulse">
        <BearLogo fill="white" />
      </div>
    </div>
  </div>
{/if}

<style global>
  #bg-wrapper {
    background-color: #1a1a1a;
  }

  /* .mask1 {
    -webkit-mask-image: url("#bear-donut"), url("#logo-mask"), url("#text-mask"),
      url("#details-mask"), url("#rect-mask");
    mask-image: url("#bear-donut"), url("#logo-mask"), url("#text-mask"),
      url("#details-mask"), url("#rect-mask");
  } */
  .mask1 {
    mask-image: url("#bear-donut"), url("#logo-mask"), url("#text-mask"),
      url("#details-mask"), url("#rect-mask");
  }

  .bear-donut-mask {
    mask-repeat: no-repeat;
    mask-position: 0px -5px;
    mask-size: auto;
    mask-origin: border-box;
    animation: animateMarquee 2s linear infinite;
  }

  .logo-text-mask {
    mask-repeat: no-repeat;
    mask-position:
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px,
      50% 110px;
    mask-size: 660px;
  }

  @media screen and (max-width: 660px) {
    .logo-text-mask {
      mask-size: calc(100% - 24px);
    }
  }

  .t-question {
    @apply font-semibold text-white;
  }

  .t-answer {
    @apply text-white opacity-80;
  }

  :global(body) {
    overflow-x: hidden;
  }

  @keyframes animateMarquee {
    0% {
      mask-position:
        0px -5px,
        center,
        center;
    }
    100% {
      mask-position:
        -160px -5px,
        center,
        center;
    }
  }
</style>
