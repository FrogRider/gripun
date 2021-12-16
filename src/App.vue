<template>
  <div id="gripun">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

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
