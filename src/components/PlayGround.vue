<template>
  <div>
    <div class="playground"/>
    <Letter name="a"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Letter from '@/components/Letter.vue'

export default Vue.extend({
  name: 'PlayGround',
  components: {
    Letter
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .playground {
    width: 1200px;
    height: 800px;
    opacity: 0.3;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/south_korea_flag.png");
  }
</style>
