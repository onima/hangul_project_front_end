<template>
  <div class="score"> Score : <span class="counter">{{ score }} </span></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Score',
  props: {
    stateScore: Number
  },
  computed: {
    score: function () {
      return this.stateScore
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .score {
    display: inline-block;
    position: absolute;
    margin-top: 60px;
    margin-left: -260px;
    font-size: 30px;
  }

  .counter {
    color: red;
  }
</style>
