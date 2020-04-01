<template>
  <img :class="[isTargeted ? targeted: noTargeted]" alt="Letter" :src="imageSrc" :style="{ left: xPosition, top: yPosition }"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Letter',
  props: {
    name: String,
    x: Number,
    y: Number,
    guess: String,
    matchingTarget: Boolean
  },
  data () {
    return {
      targeted: 'targeted',
      noTargeted: 'no-targeted',
      letterName: this.name
    }
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
    },
    isTargeted () {
      return (this.guess === this.letterName) && this.matchingTarget
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .no-targeted {
    position: fixed;
    z-index: 1;
  }

  .targeted {
    position: fixed;
    z-index: 1;
    background-color: red;
    opacity: 0.5;
    border-radius: 50%;
  }

</style>
