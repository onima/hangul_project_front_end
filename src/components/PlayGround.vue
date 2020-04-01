<template>
  <div>
    <Score :state-score="stateScore" />
    <div class="playground"/>
    <div v-for="onScreenLetter in onScreenLetters" :key="onScreenLetter.id">
      <transition name="fade" v-on:after-leave="deleteLetter(onScreenLetter)">
        <Letter v-if="onScreenLetter.show" :name="onScreenLetter.name" :x="onScreenLetter.x" :y="onScreenLetter.y" />
      </transition>
    </div>
    <h1 class="guess">{{ guess }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import Letter from '@/components/Letter.vue'
import Score from '@/components/Score.vue'

export default Vue.extend({
  name: 'PlayGround',
  components: {
    Letter,
    Score
  },
  data () {
    return {
      id: 1,
      y: -200,
      letters: ['a', 'eo', 'eu', 'i', 'o', 'u'],
      widths: [500, 600, 700, 800, 900, 1000, 1100, 1200],
      onScreenLetters: [] as object[],
      guess: '',
      stateScore: 0
    }
  },
  mounted () {
    this.startGameLoop()
    document.addEventListener('keydown', (e) => { this.onKeyDown(e) })
  },
  methods: {
    onKeyDown (event) {
      const isAlphabetInput = _.includes(_.split('abcdefghijklmnopqrstuvwxyz', ''), event.key)
      const isEnterInput = event.key === 'Enter'
      const isBackspaceInput = event.key === 'Backspace'

      if (isAlphabetInput) {
        this.guess += event.key
      } else if (isBackspaceInput) {
        this.guess = this.guess.slice(0, -1)
      } else if (isEnterInput) {
        this.verifyGuess()
        this.guess = ''
      }
    },
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
      const newLetter = { id: newId, name: randomLetterName, x: randomWitdh, y: this.y, show: true }
      this.id += 1
      this.onScreenLetters.push(newLetter)
    },
    verifyGuess () {
      const matchingLetter = _.find(this.onScreenLetters, ['name', this.guess])
      if (matchingLetter) {
        matchingLetter.show = false
        this.stateScore += 1
      }
    },
    deleteLetter (letter: object) {
      _.remove(this.onScreenLetters, function (l) {
        return l.id === letter.id
      })
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

  .guess {
    font-size: 40px;
    color: red
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
