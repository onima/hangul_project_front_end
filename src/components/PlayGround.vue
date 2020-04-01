<template>
  <div :is-running="isRunning">
    <Score :state-score="stateScore" />
    <div class="guess"> Guess : <span class="input"> {{ guess }} </span></div>
    <div class="playground"/>
    <GameOver v-if="!isRunning"/>
      <div v-for="onScreenLetter in onScreenLetters" :key="onScreenLetter.id">
        <transition name="fade" v-on:after-leave="deleteLetter(onScreenLetter)">
          <Letter v-if="onScreenLetter.show" :name="onScreenLetter.name" :x="onScreenLetter.x" :y="onScreenLetter.y" :guess="guess" :matching-target="isTargeted(onScreenLetter)" />
        </transition>
      </div>
    <div class="sea" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import Letter from '@/components/Letter.vue'
import Score from '@/components/Score.vue'
import GameOver from '@/components/GameOver.vue'

export default Vue.extend({
  name: 'PlayGround',
  components: {
    Letter,
    Score,
    GameOver
  },
  data () {
    return {
      isRunning: false,
      id: 1,
      y: -200,
      letters: ['a', 'eo', 'eu', 'i', 'o', 'u'],
      widths: [500, 600, 700, 800, 900, 1000, 1100, 1200],
      onScreenLetters: [] as object[],
      guess: '',
      stateScore: 0,
      intervalOne: null,
      intervalTwo: null
    }
  },
  watch: {
    isRunning (value) {
      if (value) {
        this.startGameLoop()
      } else {
        this.stopGameLoop()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', () => { window.scrollTo(0, 0) })
    this.isRunning = true
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
      } else if (isEnterInput && this.isRunning) {
        this.verifyGuess()
        this.guess = ''
      } else if (isEnterInput && !this.isRunning) {
        this.restartGame()
      }
    },
    startGameLoop () {
      this.intervalOne = setInterval(this.moveLetters, 5)
      this.intervalTwo = setInterval(this.addNewLetter, 5000)
    },
    stopGameLoop () {
      clearInterval(this.intervalOne)
      clearInterval(this.intervalTwo)
    },
    restartGame () {
      this.intervalOne = null
      this.intervalTwo = null
      this.stateScore = 0
      this.onScreenLetters = []
      this.isRunning = true
    },
    moveLetters () {
      this.onScreenLetters.forEach(function (l) {
        l.y += 0.5
      })

      const letterOvertakingPlayer = this.onScreenLetters.some(this.isLetterOvertakingPlayer)
      if (letterOvertakingPlayer) {
        this.isRunning = false
      }
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
    },
    isTargeted (letter: object) {
      const matchingLetters = _.filter(this.onScreenLetters, ['name', letter.name])
      const firstLetter = _.head(matchingLetters)
      if (firstLetter) {
        return firstLetter.id === letter.id
      } else {
        return false
      }
    },
    isLetterOvertakingPlayer (letter: object) {
      return letter.y > 820
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .playground {
    width: 1200px;
    height: 800px;
    margin-top: -50px;
    opacity: 0.3;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/south_korea_flag.png");
  }

  .sea {
    width: 1200px;
    height: 200px;
    position: relative;
    z-index: 3;
    display: inline-block;
    background-repeat: no-repeat;
    margin-top: -50px;
    background-image: url("../assets/sea.png");
    border-radius: 150px 150px 80px 80px;
    margin-left: 65px;
  }

  .guess {
    position: absolute;
    font-size: 30px;
    margin-top: 120px;
    margin-left: 55px;
  }

  .input {
    color: red
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
