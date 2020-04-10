<template>
  <div :is-running="isRunning">
    <Score :state-score="stateScore" />
    <div class="guess"> Guess : <span class="input"> {{ guess }} </span></div>
    <div class="playground"/>
    <GameOver v-if="!isRunning"/>
      <div v-for="onScreenLetter in onScreenLetters" :key="onScreenLetter.id">
        <Letter v-if="onScreenLetter.show" :id="onScreenLetter.id" :name="onScreenLetter.name" :guess="guess" :romanization="onScreenLetter.romanization" :is-found="onScreenLetter.found" :matching-target="isTargeted(onScreenLetter)" @letter-overtake-player="letterOvertakePlayer" @delete-letter="deleteLetter" :stopMovement="stopMovement"/>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import Letter from '@/components/Letter.vue'
import Score from '@/components/Score.vue'
import GameOver from '@/components/GameOver.vue'
import { Let } from '@/types/letter.ts'

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
      letters: { a: '아', eo: '어', eu: '으', i: '이', o: '오', u: '우', ya: '야', yeo: '여', yo: '요', yu: '유' },
      onScreenLetters: [] as object[],
      guess: '',
      stateScore: 0,
      intervalOne: 0,
      stopMovement: false
    }
  },
  watch: {
    isRunning (v) { v ? this.startGameLoop() : this.stopGameLoop() }
  },
  mounted () {
    window.addEventListener('scroll', () => { window.scrollTo(0, 0) })
    this.isRunning = true
    document.addEventListener('keydown', (e) => { this.onKeyDown(e) })
  },
  methods: {
    onKeyDown (event: KeyboardEvent) {
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
      this.intervalOne = setInterval(this.addNewLetter, 5000)
    },
    stopGameLoop () {
      clearInterval(this.intervalOne)
    },
    restartGame () {
      this.intervalOne = 0
      this.stateScore = 0
      this.onScreenLetters = []
      this.guess = ''
      this.stopMovement = false
      this.isRunning = true
    },
    addNewLetter () {
      const randomLetterNameRom = _.sample(_.keys(this.letters)) as string
      const randomLetterNameHang = _.get(this.letters, randomLetterNameRom, '아')
      const newId = this.id
      const newLetter = new Let(newId, randomLetterNameHang, randomLetterNameRom)
      this.id += 1
      this.onScreenLetters.push(newLetter)
    },
    verifyGuess () {
      const matchingLetter = _.find(this.onScreenLetters, ['romanization', this.guess]) as Let
      if (matchingLetter) {
        matchingLetter.found = true
        this.stateScore += 1
      }
    },
    deleteLetter (letterId: object) {
      const matchingLetter = _.find(this.onScreenLetters, ['id', letterId]) as Let
      if (matchingLetter) {
        matchingLetter.show = false
      }
      _.remove(this.onScreenLetters, function (l) {
        return l.id === letterId
      })
    },
    isTargeted (letter: Let) {
      const matchingLetters = _.filter(this.onScreenLetters, ['name', letter.name])
      const firstLetter = _.head(matchingLetters) as Let
      if (firstLetter) {
        return firstLetter.id === letter.id
      } else {
        return false
      }
    },
    letterOvertakePlayer () {
      this.isRunning = false
      this.stopMovement = true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .playground {
    width: 1200px;
    height: 1000px;
    margin-top: -50px;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/sky.png");
  }

  .guess {
    position: absolute;
    color: FloralWhite;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
    font-size: 30px;
    margin-top: 60px;
    margin-left: 340px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
