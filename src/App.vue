<script setup>
import useWindow from "@/composables/useWindow";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const { Y, X } = useWindow();
</script>

<template>
  <defaultLayout>
    <h3>My Website</h3>
    <div>Carousel Element</div>
  </defaultLayout>
</template>

<style scoped></style>./layouts/DefaultLayout.vue
