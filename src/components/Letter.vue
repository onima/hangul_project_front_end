<template>
  <div :class="{ fade: !show }">
    <transition name="fade">
      <h1 v-if="!isFound" :class="{ targeted: isTargeted }" :style="{ left: xLetterPosition, top: yLetterPosition }">{{ name }}</h1>
    </transition>
    <p id="letter" :class="{ boom: isFound}" :style="{ left: xExplosionPosition, top: yExplosionPosition }" ></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'

export default Vue.extend({
  name: 'Letter',
  props: {
    id: Number,
    name: String,
    guess: String,
    romanization: String,
    matchingTarget: Boolean,
    stopMovement: Boolean,
    isFound: Boolean
  },
  data () {
    return {
      show: true,
      x: _.sample([500, 600, 700, 800, 900, 1000, 1100, 1200]),
      y: -200,
      interval: null
    }
  },
  watch: {
    isFound () {
      const anim = document.getElementById('letter')

      anim.addEventListener('animationend', function () {
        this.$emit('delete-letter', this.id)
      }.bind(this), false)
    }
  },
  mounted () {
    this.interval = setInterval(this.moveLetter, 5)
  },
  computed: {
    xLetterPosition () {
      return `${this.x}px`
    },
    yLetterPosition () {
      return `${this.y}px`
    },
    xExplosionPosition () {
      return `${this.x + 5}px`
    },
    yExplosionPosition () {
      return `${this.y + 10}px`
    },
    isTargeted () {
      return (this.guess === this.romanization) && this.matchingTarget
    }
  },
  methods: {
    moveLetter () {
      this.y += 0.5

      if (this.y > 680) { this.show = false }

      if (this.y > 820) { this.$emit('letter-overtake-player') }

      if (this.stopMovement) { clearInterval(this.interval) }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .targeted {
    position: fixed;
    opacity: 0.5;
  }

  .fade {
    -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1.5s; /* Firefox < 16 */
    -ms-animation: fadein 1.5s; /* Internet Explorer */
    -o-animation: fadein 1.5s; /* Opera < 12.1 */
    animation: fadein 1.5s;
    animation-fill-mode: forwards;
  }

  h1 {
    position: fixed;
    z-index: 1;
    font-size: 70px;
    color: FloralWhite;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
  }

  p {
    position: fixed;
    z-index: 7;
  }

  @keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  #letter.boom {
    width: 127px;
    height: 127px;
    margin-left: -30px;
    background: url('../assets/boom.png');
    animation: play 0.75s steps(6);
    z-index: 7;
  }

  @keyframes play {
    100% {
      background-position: -762px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
