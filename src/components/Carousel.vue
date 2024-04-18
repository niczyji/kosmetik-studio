<template>
  <splide :options="splideOptions">
    <splide-slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="carousel-image" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      splideOptions: {
        type       : 'loop',    // Carousel wird endlos geloopt
        perPage    : 3,         // Anzahl der Bilder pro Seite
        breakpoints: {
          640: {
            perPage: 1,       // Anzahl der Bilder pro Seite auf kleinen Bildschirmen
          }
        },
        autoplay   : true,     // Automatisches Durchlaufen der Bilder
        interval   : 3000,     // Intervall zwischen dem Wechsel der Bilder
        pauseOnHover: true     // Pausiert das Carousel beim Hover
      },
      images: [
        { src: 'src/assets/carousel/1.jpg', alt: 'Bild 1' },
        { src: 'src/assets/carousel/2.jpg', alt: 'Bild 2' },
        { src: 'src/assets/carousel/3.jpg', alt: 'Bild 3' },
        { src: 'src/assets/carousel/4.jpg', alt: 'Bild 4' },
        { src: 'src/assets/carousel/5.jpg', alt: 'Bild 5' },
        { src: 'src/assets/carousel/6.jpg', alt: 'Bild 6' },
        { src: 'src/assets/carousel/7.jpg', alt: 'Bild 7' },
      ]
    };
  }
}
</script>

<style>
.carousel-image {
  width: 100%;
  object-fit: cover;
}
</style>