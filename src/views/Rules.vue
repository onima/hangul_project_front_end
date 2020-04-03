<template>
  <div>
    <div class="homepage"/>
    <div class="rules">
      <h2>Learn korean pronunciation while having fun !!</h2>
      <p>* Guess each korean alphabet letter displayed on screen by typing the equivalent romanization letter and press enter </p>
      <p>* If guess is correct : 1 point and the letter disappears.
      <p>* If guess is incorrect : game continue.
      <p>* If letter disappears in sky : you loose</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Rules',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .homepage {
    width: 1200px;
    height: 1000px;
    margin-top: -50px;
    display: inline-block;
    background-repeat: no-repeat;
    background-image: url("../assets/sky.png");
  }

  .rules {
    position: absolute;
    width: 1000px;
    margin-left: 450px;
    margin-top: -900px;
    color: FloralWhite;
    font-size: 20px;
    text-shadow: 2px 2px 4px #808080;
    font-family: monospace;
  }
</style>
