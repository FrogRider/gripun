<template>
  <div id="gripun">
    <Preloader />
    <notifications/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Preloader from '@/components/Preloader.vue'
  export default {
    components: {Preloader}
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

#gripun {
  overflow: hidden;
}

</style>
