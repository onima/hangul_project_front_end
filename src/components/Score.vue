<template>
  <div class="score"> Score : <span>{{ stateScore }} </span></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Score',
  props: {
    stateScore: Number
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .score {
    display: inline-block;
    color: FloralWhite;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
    position: absolute;
    margin-left: 20px;
    font-size: 30px;
  }
</style>
