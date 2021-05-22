<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
body, html {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Itim", cursive;

  /* The image used */
  background-image: url("/img/bg.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
