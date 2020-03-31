<template>
  <div>
    <div class="playground"/>
    <div v-for="onScreenLetter in onScreenLetters" :key="onScreenLetter.id">
      <Letter :name="onScreenLetter.name" :x="onScreenLetter.x" :y="onScreenLetter.y" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import Letter from '@/components/Letter.vue'

export default Vue.extend({
  name: 'PlayGround',
  components: {
    Letter
  },
  data () {
    return {
      id: 1,
      y: -200,
      letters: ['a', 'eo', 'eu', 'i', 'o', 'u'],
      widths: [500, 600, 700, 800, 900, 1000, 1100, 1200],
      onScreenLetters: [] as object[]
    }
  },
  mounted () {
    this.startGameLoop()
  },
  methods: {
    startGameLoop () {
      setInterval(this.moveLetters, 5)
      setInterval(this.addNewLetter, 5000)
    },
    moveLetters () {
      this.onScreenLetters.forEach(function (l) {
        l.y += 0.5
      })
    },
    addNewLetter () {
      const randomLetterName = _.sample(this.letters)
      const randomWitdh = _.sample(this.widths)
      const newId = this.id
      const newLetter = { id: newId, name: randomLetterName, x: randomWitdh, y: this.y }
      this.id += 1
      this.onScreenLetters.push(newLetter)
    }
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
