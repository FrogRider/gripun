<template>
  <div  class="preloader" v-if="preloader">
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">

  .preloader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #939393cc;
  z-index: 100;
  display: grid;
  place-items: center;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #00ed43;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  // z-index: 1000;
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>