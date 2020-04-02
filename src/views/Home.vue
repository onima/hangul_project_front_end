<template>
  <div class="home">
    <HomePage/>
    <div>
      <router-link class="game" to="/game">Start Game</router-link>
    </div>
    <div>
      <router-link class="rules" to="/rules">Rules</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>
<style>
  .game {
    position: absolute;
  }

  .rules {
    position: absolute;
    margin-top: 40px;
    margin-left: 22px;
  }
</style>
