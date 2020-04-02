<template>
  <div>
    <div class="homepage"/>
    <div class="title">
      <h1>Hangul Attack</h1>
      <p>Learn korean pronunciation while having fun !!</p>
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
    height: 800px;
    margin-top: -50px;
    opacity: 0.3;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/south_korea_flag.png");
  }

  .title {
    margin-top: -450px;
    margin-left: 80px;
  }
</style>
