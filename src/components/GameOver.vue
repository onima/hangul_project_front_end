<template>
  <div class="gameover">
    <h1>Game Over</h1>
    <h2>Press enter to restart game</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GameOver',
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
  .gameover {
    position: absolute;
    margin-left: 800px;
    margin-top: -400px;
  }
</style>
