<template>
  <div class="gameover">
    <h1>Game Over</h1>
    <h2>Press enter to restart game</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GameOver'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gameover {
    position: absolute;
    margin-left: 690px;
    margin-top:-600px;
    color: FloralWhite;
    font-size: 20px;
    z-index: 5;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
  }
</style>
