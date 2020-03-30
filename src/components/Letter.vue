<template>
  <img class="letter" alt="Letter" :src="imageSrc" :style="{ top: letterPosition}"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Letter',
  props: {
    name: String,
    y: Number
  },
  computed: {
    imageSrc () {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + this.name + '.png')
    },
    letterPosition () {
      return `${this.y}px`
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .letter {
    position: relative;
    z-index: 1;
    right: 700px;
  }
</style>
