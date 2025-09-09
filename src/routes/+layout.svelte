<script lang="ts">
  import "virtual:windi.css";
</script>

<slot />

<style global>
  body {
    font-family: "Source Sans Pro", sans-serif;
  }

  @font-face {
    font-family: "BD_Plakatbau";
    src: url("/BD-Plakatbau.ttf") format("truetype");
  }

  @font-face {
    font-family: "Function Regular";
    src: url("/Function-Regular.ttf") format("truetype");
    font-weight: normal;
  }
  @font-face {
    font-family: "Function Regular";
    src: url("/Function-Bold.ttf") format("truetype");
    font-weight: bold;
  }
</style>
