<template>
  <img class="letter" alt="Letter" :src="imageSrc" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Letter',
  props: {
    name: String
  },
  computed: {
    imageSrc () {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + this.name + '.png')
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
    bottom: 500px;
  }
</style>
