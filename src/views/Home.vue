<template>
  <div class="home">
    <HomePage/>
    <div>
      <router-link class="game btn btn-white btn-animation-1" to="/game">Start Game</router-link>
    </div>
    <div>
      <router-link class="rules btn btn-white btn-animation-1" to="/rules">Rules</router-link>
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
    font-family: monospace;
  }

  .rules {
    position: absolute;
    margin-top: 20px;
    font-family: monospace;
  }

  .btn:link,
  .btn:visited{
    text-decoration: none;
    text-transform:uppercase;
    position:relative;
    top:0;
    left:0;
    padding:15px 30px;
    border-radius:100px;
    display:inline-block;
    transition: all .5s;
  }

  .btn-white{
    background:#fff;
    color:#000;
  }

  .btn:hover{
    box-shadow:0px 10px 10px rgba(0,0,0,0.2);
    transform : translateY(-3px);
  }

  .btn:active{
    box-shadow:0px 5px 10px rgba(0,0,0,0.2);
    transform:translateY(-1px);
  }

  .btn-bottom-animation-1{
    animation:comeFromBottom 1s ease-out .8s;
  }

  .btn::after{
    content:"";
    text-decoration: none;
    text-transform:uppercase;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    border-radius:100px;
    display:inline-block;
    z-index:-1;
    transition: all .5s;
  }

  .btn-white::after {
    background: #fff;
  }

  .btn-animation-1:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  @keyframes comeFromBottom{
    0%{
      opacity:0;
      transform:translateY(40px);
    }
    100%{
      opacity:1;
      transform:translateY(0);
    }
  }

</style>
