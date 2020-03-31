<template>
  <img class="letter" alt="Letter" :src="imageSrc" :style="{ left: xPosition, top: yPosition }"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Letter',
  props: {
    name: String,
    x: Number,
    y: Number
  },
  computed: {
    imageSrc () {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + this.name + '.png')
    },
    xPosition () {
      return `${this.x}px`
    },
    yPosition () {
      return `${this.y}px`
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .letter {
    position: fixed;
    z-index: 1;
  }
</style>
