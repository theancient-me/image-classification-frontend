<template>
  <div class="ball">
    <div class="top">
      <div class="shine"></div>
    </div>
    <div class="center-line"></div>
    <div class="center-circle"></div>
  </div>
</template>

<script>
export default {
  name: "PokemonLoading",
};
</script>

<style scoped>
/* Credit by https://codepen.io/_mayur_punjabi_/pen/vYxXGjE  Thank  */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.ball {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vmin;
  height: 50vmin;
  border: 3vmin solid black;
  border-radius: 50%;
}

/* red part */
.top {
  position: absolute;
  top: 0;
  left: 0;
  height: 22vmin;
  width: 44vmin;
  border-radius: 25vmin 25vmin 0 0;
  background: #d62121;
}

.shine {
  position: absolute;
  top: 5vmin;
  left: 3vmin;
  height: 75%;
  width: 50%;
  border: 3vmin solid transparent;
  border-radius: 50%;
  border-top: 3vmin solid white;
  transform: rotate(-45deg);
}

/* rounded corners */
.shine::after,
.shine::before {
  position: absolute;
  content: "";
  display: block;
  height: 3vmin;
  width: 3vmin;
  border-radius: 50%;
  background: white;
}

.shine::after {
  top: -5.75%;
  left: -4.75%;
}

.shine::before {
  top: -7.5%;
  left: 85%;
}

.center-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3vmin;
  transform: translatey(-50%);
  background: black;
}

.center-circle,
.center-circle::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.5%;
  height: 37.5%;
  border: 2vmin solid black;
  border-radius: 50%;
  background: white;
}

.center-circle::after {
  border: 2.5vmin solid black;
  content: "";
  display: block;
  width: 75%;
  height: 75%;
}
</style>