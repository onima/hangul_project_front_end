<template>
  <div>
    <div class="homepage"/>
    <div class="title">
      <h1>Hangul Sky</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Homepage',
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
    height: 1000px;
    margin-top: -50px;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/sky.png");
  }

  .title {
    margin-top: -600px;
    font-size: 30px;
    color: FloralWhite;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
  }
</style>
