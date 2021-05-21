<template>
  <div>
    <h4>{{ countDown }}</h4>
    <PokemonLoading></PokemonLoading>
  </div>
</template>

<script>
import PokemonLoading from "@/components/PokemonLoading";
import { Howl, Howler } from "howler";

export default {
  name: "LoadingScreen",
  components: {
    PokemonLoading,
  },
  data() {
    return {
      countDown: 10,
    };
  },
  mounted() {
    this.playingSound();
  },

  created() {
    this.countDownTimer();
  },

  methods: {
    playingSound() {
      var sound = new Howl({
        src: [''],
         volume: 0.5,
      });

      sound.play();
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }else{
          this.$router.push({
              name : "Pokedex"
          })
      }
    },
  },
};
</script>