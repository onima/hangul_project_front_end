<template>
  <div class="home">
    <PlayGround/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayGround from '@/components/PlayGround.vue'

export default {
  name: 'Home',
  components: {
    PlayGround
  }
}
</script>
