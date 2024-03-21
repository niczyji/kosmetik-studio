<template>
<!--   <footer>
    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div>
          <p class="text-2xl font-bold uppercase">windstatic</p>
          <p class="mt-2 text-sm font-medium text-gray-500 lg:w-4/5">
            A set of
            <em class="text-accent-600"></em> elements, templates &amp; layouts
            <span class="lg:block"> made with Tailwind CSS and Alpine.js</span>
          </p>
        </div>

        <div
          class="grid grid-cols-2 gap-8 mt-12 text-sm font-medium text-gray-500 lg:grid-cols-3 lg:mt-0 xl:col-span-2"
        >
          <div>
            <h3 class="text-base text-black">Information</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li>
                <a href="#_" class="hover:text-black"> License </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-base text-black">Socials</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li>
                <a href="https://www.instagram.com/kosmetikstudiokoeln" class="hover:text-black">
                  @kosmetikstudiokoeln
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-base text-black">Premium Themes</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li>
                <a href="https://lexingtonthemes.com/" class="hover:text-black"> Lexington Themes </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col pt-12 md:flex-row md:items-center md:justify-between"
        x-data="{ year: new Date().getFullYear() }"
      >
        <span class="text-sm font-medium text-gray-500">
          Copyright © <span x-text="year">2024</span>
          <a aria-label="Michael Andreuzza" href="#_" class="mx-2 text-blue-500 hover:text-gray-500">Michal G</a>
        </span>
      </div>
    </div>
  </footer> -->
  <footer>
  <div class="px-8 py-12 mx-auto max-w-7xl md:px-12 lg:px-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div>
        <p class="text-2xl font-bold">Kosmetik Studio EXCELLENT</p>
        <p class="mt-2 text-sm font-medium text-gray-500 lg:w-4/5">
          Hansaring 23, 50670 Köln
        </p>
      </div>
      <div class="mt-12 lg:mt-0 xl:col-span-2">
        <div class="grid grid-cols-2 gap-8 text-sm font-medium text-gray-500 lg:grid-cols-2">
          <div>
            <h3 class="text-base text-black">Öffnungszeiten</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li>Montag: 12-19</li>
              <li>Dienstag: 10-19</li>
              <li>Mittwoch: 10-19</li>
              <li>Donnerstag: 9:45 - 17:45</li>
              <li>Freitag: 12-19</li>
              <li>Samstag: 10-16</li>
            </ul>
          </div>
          <div>
            <h3 class="text-base text-black">Kontakt</h3>
            <ul role="list" class="mt-4 space-y-2">
              <li>Telefon: 0178 7046251</li>
              <li>e-Mail: <a href="mailto:excellent-center@web.de" class="hover:text-black">excellent-center@web.de</a></li>
              <li>
                <a href="https://www.instagram.com/kosmetikstudiokoeln" class="hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3C4.462 3 2 5.462 2 8.5v7C2 18.538 4.462 21 7.5 21h9c3.038 0 5.5-2.462 5.5-5.5v-7C22 5.462 19.538 3 16.5 3h-9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0zM18.5 7.5h.01" />
                  </svg>
                  kosmetikstudiokoeln
                </a>
              </li>
            </ul>
          </div>
        </div>
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
