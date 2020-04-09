<template>
  <div>
    <div class="homepage"/>
    <div class="rules">
      <h2>Learn korean pronunciation while having fun !!</h2>
      <p>* Guess each korean alphabet letter displayed on screen by typing the equivalent roman letter and press enter </p>
      <p>* If guess is correct : 1 point and the letter explodes.
      <p>* If guess is incorrect : game continue.
      <p>* If letter disappears in sky : you loose</p>
      <div id="container">
        <div id="bloc1">
          <ul>
            <li>아 : a</li>
            <li>어 : eo</li>
            <li>으 : eu</li>
            <li>이 : i</li>
            <li>오 : o</li>
          </ul>
        </div>
        <div id="bloc2">
          <ul>
            <li>우 : u</li>
            <li>야 : ya</li>
            <li>여 : yeo</li>
            <li>요 : yo</li>
            <li>유 : yu</li>
          </ul>
        </div>
      </div>
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

  #block_container
  {
    text-align:center;
  }
  #bloc1, #bloc2
  {
    font-size: 35px;
    text-align: left;
    display:inline-block;
  }

  #bloc2 {
    margin-left: 40px;
  }
</style>
