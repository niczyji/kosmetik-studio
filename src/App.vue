<template>
  <div class="app">
    <Navigation/>
    <router-view />
    <Footer/>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
:root {
  --black: #000;
  --white: #fff;
  --cream: #f3eeea;
  --white-rock: #ebe3d5;
  --coffee-brown: #b0a695;
  --sandstone: #3B352E;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
}
</style>
