<script setup>
import useWindow from "@/composables/useWindow.js";
const { X, Y } = useWindow();
</script>
<template>
  <div>
    <nav class="bg-accent p-4">
  <div class="flex justify-between items-center mb-4">
    <div class="text-lg font-bold text-white">Kosmetik Studio Excellent</div>
    <!-- Annahme: Das X ist ein Button zum Schließen des Menüs, was nicht im Code enthalten war -->
    <button class="bg-green-500 p-2 text-white rounded">Start</button>
  </div>
  <ul class="flex flex-col list-none m-0 p-0 space-y-4">
    <li><a href="#" class="text-text no-underline font-bold hover:text-secondary-background">Über uns</a></li>
    <li><a href="#" class="text-text no-underline font-bold hover:text-secondary-background">Behandlungen</a></li>
    <li><a href="#" class="text-text no-underline font-bold hover:text-secondary-background">Preise</a></li>
    <li><a href="#" class="text-text no-underline font-bold hover:text-secondary-background">Angebote des Monats</a></li>
    <li><a href="#" class="text-text no-underline font-bold hover:text-secondary-background">Galerie</a></li>
  </ul>
</nav>

    <div v-if="X <= 360" class="text-base">Ich bin Mobile</div>
    <div v-if="(X > 360) & (X <= 768)" class="text-base">Ich bin Tablet</div>
    <div v-if="X > 768" class="text-base">Ich bin Desktop</div>
  </div>
</template>
<style scoped></style>
