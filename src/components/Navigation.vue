<template>
  <header
    :class="{ 'bg-black shadow-lg': scrolledNav, 'bg-white bg-opacity-80': !scrolledNav }"
    class="fixed z-30 w-full transition-all duration-500"
  >
    <nav
      class="flex justify-between items-center relative px-5 py-2.5 w-11/12 mx-auto transition-all duration-500 lg:max-w-6xl"
    >
      <div class="flex items-center branding">
        <img
          src="@/assets/logo.svg"
          alt="logo-excellent"
          class="w-12 h-auto transition-all duration-500 md:w-16 lg:w-20"
        />
      </div>

      <ul v-show="!mobile" class="navigation lg:space-y-0 lg:flex lg:items-center lg:justify-between">
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <router-link
            class="text-black link hover:text-coffee-brown hover:underline underline-offset-2"
            :to="{ name: 'Home' }"
            >Startseite</router-link
          >
        </li>
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <router-link
            class="text-black link hover:text-coffee-brown hover:underline underline-offset-2"
            :to="{ name: 'AboutUs' }"
            >Über uns</router-link
          >
        </li>
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <router-link
            class="text-black link hover:text-coffee-brown hover:underline underline-offset-2"
            :to="{ name: 'Services' }"
            >Behandlungen</router-link
          >
        </li>
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <router-link
            class="text-black link hover:text-coffee-brown hover:underline underline-offset-2"
            :to="{ name: 'Prices' }"
            >Preise</router-link
          >
        </li>
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <router-link
            class="text-black link hover:text-coffee-brown hover:underline underline-offset-2"
            :to="{ name: 'Gallery' }"
            >Galerie</router-link
          >
        </li>
        <li class="inline-block px-1 py-2 sm:px-2 lg:px-3 sm:ml-2 lg:ml-4">
          <a
            class="px-4 py-2 text-black transition-shadow bg-white rounded-md shadow-sm hover:underline underline-offset-2 hover:text-coffee-brown hover:bg-coffee-brown hover:shadow-lg"
            :href="bookingUrl"
            target="_blank"
            rel="noopener noreferrer"
            >Termin Buchen</a
          >
        </li>
      </ul>

      <div v-show="mobile" class="hamburger-wrapper">
        <button
          @click="toggleMobileNav"
          :class="{ active: mobileNav }"
          class="bg-transparent border-none cursor-pointer hamburger focus:outline-none"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <transition
        name="slide-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-x-full"
        enter-to-class="transform translate-x-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-x-0"
        leave-to-class="transform -translate-x-full"
      >
        <ul
          v-show="mobileNav"
          class="fixed top-0 left-0 z-50 flex flex-col w-full h-full bg-white border-r border-black shadow-md max-w-48"
        >
          <li class="border-b border-gray-200 py-2 px-2.5 mx-3.5">
            <router-link class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Home' }"
              >Startseite</router-link
            >
          </li>
          <li class="border-b border-gray-200 py-2 px-2.5 mx-3.5">
            <router-link class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'AboutUs' }"
              >Über uns</router-link
            >
          </li>
          <li class="border-b border-gray-200 py-2 px-2.5 mx-3.5">
            <router-link class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Services' }"
              >Behandlungen</router-link
            >
          </li>
          <li class="border-b border-gray-200 py-2 px-2.5 mx-3.5">
            <router-link class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Prices' }"
              >Preise</router-link
            >
          </li>
          <li class="border-b border-gray-200 py-2 px-2.5 mx-3.5">
            <router-link class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Gallery' }"
              >Galerie</router-link
            >
          </li>
          <li class="py-2 px-2.5 mx-3.5">
            <a
              class="block px-2 py-2 text-sm text-black text-gray-700 underline underline-offset-2 hover:bg-gray-100"
              :href="bookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              >Termin Buchen</a
            >
          </li>
          <li class="py-2 border-t border-gray-200">
            <div class="flex items-center justify-center space-x-4">
              <!-- Telefon -->
              <a
                href="tel:+491787046251"
                class="flex items-center transition-transform hover:text-black hover:scale-110"
                title="Rufen Sie uns an"
              >
                <img src="@/assets/call-outline.svg" alt="Telefon" class="w-6 h-6 mr-2" />
              </a>
              <!-- E-Mail -->
              <a
                href="mailto:excellent-center@web.de"
                class="flex items-center transition-transform hover:text-black hover:scale-110"
                title="Senden Sie uns eine E-Mail"
              >
                <img src="@/assets/mail-outline.svg" alt="E-Mail" class="w-6 h-6 mr-2" />
              </a>
              <!-- Instagram -->
              <a
                href="https://www.instagram.com/kosmetikstudiokoeln"
                class="transition-transform hover:text-black hover:scale-110"
                target="_blank"
                title="Folgen Sie uns auf Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      bookingUrl: "https://www.planity.com/de-DE/kosmetik-studio-excellent-50670-koln",
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  .hamburger {
    cursor: pointer;
    width: 25px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    animation: pulse 1s ease-out 3;
  }

  .hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background: #000;
    transition: all 0.3s ease;
    caret-color: transparent;
  }
  .hamburger.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}

.scrolled-nav {
  background-color: var(--black);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}

@keyframes pulse {
  from {
    transform: scale(0.8);
    top: 12px;
  }
  to {
    transform: scale(1.0);
    top: 12px;
  }
}
</style>
