<script setup>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

</script>

<template>
  <div class="p-4 px-8">
    <Header/>

    <slot/>
    <Footer/>
  </div>
</template>

<style scoped></style>
