<template>
  <footer>
    <div class="px-8 py-12 mx-auto max-w-7xl md:px-12 lg:px-32">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div class="mb-4 lg:mb-0">
          <img
            src="@/assets/logo.svg"
            alt="Kosmetik Studio EXCELLENT Logo"
            class="w-auto h-10 mb-2 sm:h-12 md:h-16 lg:h-20"
          />
          <p class="text-sm font-bold sm:text-md md:text-lg lg:text-xl">Kosmetik Studio EXCELLENT</p>          <p class="mt-2 text-xs font-medium text-gray-500 sm:text-sm md:text-base lg:text-lg">
            Hansaring 23, 50670 Köln
          </p>
        </div>

        <div>
          <h3 class="text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl">Öffnungszeiten</h3>
          <ul role="list" class="mt-4 space-y-2">
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <span class="inline-block w-3 h-3 mr-2 bg-black rounded-full"></span>Mo - Fr: 10:00 - 19:00
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <span class="inline-block w-3 h-3 mr-2 bg-black rounded-full"></span>Samstag: 10:00 - 16:00
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <span class="inline-block w-3 h-3 mr-2 bg-white border border-black rounded-full"></span>Sonntag:
              Geschlossen
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl">Kontakt</h3>
          <ul role="list" class="mt-4 space-y-2">
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <a href="tel:+491787046251" class="flex items-center hover:text-black">
                <img src="@/assets/call-outline.svg" class="inline w-6 h-6 mr-2" alt="Telefon" />
                0178 7046251
              </a>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <img src="@/assets/mail-outline.svg" class="inline w-6 h-6 mr-2" alt="E-Mail" />
              <a href="mailto:excellent-center@web.de" class="hover:text-black">excellent-center@web.de</a>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <a href="https://www.instagram.com/kosmetikstudiokoeln" class="hover:text-black" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 3C4.462 3 2 5.462 2 8.5v7C2 18.538 4.462 21 7.5 21h9c3.038 0 5.5-2.462 5.5-5.5v-7C22 5.462 19.538 3 16.5 3h-9z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0zM18.5 7.5h.01"
                  /></svg
                ><span>kosmetikstudiokoeln</span>
              </a>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <a href="https://maps.app.goo.gl/Xd27Rq8cj7TJQUDY9" class="flex items-center hover:text-black" target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 11a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                <span>Google Maps</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold text-black sm:text-base md:text-lg lg:text-xl">Allgemein</h3>
          <ul role="list" class="mt-4 space-y-2 dropdown-nav">
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <router-link to="/privacy-policy" class="link">Datenschutzrichtlinie</router-link>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <router-link to="/terms-of-use" class="link">Nutzungsbedingungen</router-link>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <router-link to="/imprint" class="link">Impressum</router-link>
            </li>
            <li class="text-xs sm:text-sm md:text-base lg:text-lg">
              <router-link to="/general-conditions" class="link">AGB</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      mobile: window.innerWidth <= 768,
    };
  },
  created() {
    window.addEventListener("resize", this.checkMobile);
    this.checkMobile();
  },
  methods: {
    checkMobile() {
      this.mobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style lang="scss" scoped></style>
