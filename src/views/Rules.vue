<template>
  <div>
    <div class="homepage"/>
    <div class="rules">
      <p>Guess each korean alphabet letter displayed on screen by typing the equivalent romanization letter and press enter : </p>
      <p>If guess is correct, you score 1 point and letter disappears. If letter reach water before you guessed it, you loose</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Rules',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .homepage {
    width: 1200px;
    height: 800px;
    margin-top: -50px;
    opacity: 0.3;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/south_korea_flag.png");
  }

  .rules {
    position: absolute;
    margin-left: 550px;
    margin-top: -400px;
  }
</style>
