<template>
  <header
    :class="{ 'bg-black shadow-lg': scrolledNav, 'bg-white bg-opacity-80': !scrolledNav }"
    class="fixed z-30 w-full transition-all duration-500"
  >
    <nav
      class="flex justify-between items-center relative px-5 py-2.5 w-11/12 mx-auto transition-all duration-500 lg:max-w-6xl"
    >
      <div class="flex items-center branding">
        <img src="@/assets/logo.svg" alt="logo-excellent" class="w-12 h-auto transition-all duration-500" />
      </div>

      <ul v-show="!mobile" class="space-y-4 navigation lg:space-y-0 lg:flex lg:items-center lg:justify-between">
        <li>
          <router-link class="text-black link hover:text-coffee-brown" :to="{ name: 'Home' }">Startseite</router-link>
        </li>
        <li>
          <router-link class="text-black link hover:text-coffee-brown" :to="{ name: 'AboutUs' }">Über uns</router-link>
        </li>
        <li>
          <router-link class="text-black link hover:text-coffee-brown" :to="{ name: 'Services' }"
            >Behandlungen</router-link
          >
        </li>
        <li>
          <router-link class="text-black link hover:text-coffee-brown" :to="{ name: 'Prices' }">Preise</router-link>
        </li>
        <li>
          <router-link class="text-black link hover:text-coffee-brown" :to="{ name: 'Gallery' }">Galerie</router-link>
        </li>
        <li>
          <a
            class="px-4 py-2 text-black transition-colors rounded-md link book-appointment hover:bg-coffee-brown hover:text-white"
            :href="bookingUrl"
            target="_blank"
            rel="noopener noreferrer"
            >Termin Buchen</a
          >
        </li>
      </ul>

      <div v-show="mobile" class="hamburger-wrapper">
        <button @click="toggleMobileNav" :class="{ active: mobileNav }" class="bg-transparent border-none cursor-pointer hamburger focus:outline-none">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <transition name="mobile-nav">
  <ul v-show="mobileNav" class="absolute left-0 z-50 flex flex-col w-full mt-1 bg-white shadow-md dropdown-nav top-full">
    <li class="border-b border-gray-200">
      <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Home' }">Startseite</router-link>
    </li>
    <li class="border-b border-gray-200">
      <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'AboutUs' }">Über uns</router-link>
    </li>
    <li class="border-b border-gray-200">
      <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Services' }">Behandlungen</router-link>
    </li>
    <li class="border-b border-gray-200">
      <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Prices' }">Preise</router-link>
    </li>
    <li class="border-b border-gray-200">
      <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :to="{ name: 'Gallery' }">Galerie</router-link>
    </li>
    <li>
      <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a>
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
  .book-appointment {
    background-color: var(--cream);
    color: var(--sandstone);
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .navigation,
  .dropdown-nav {
    list-style: none;

    li {
      display: inline-block;
      padding: 10px;
      margin-left: 15px;

      a {
        color: var(--black);
        text-decoration: none;
      }
    }
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    max-width: 250px;
    height: 100%;
    background-color: var(--white);
    top: 0;
    left: 0;

    li {
      margin-left: 0;
      .link {
        color: var(--black);
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-form,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      color: var(--coffee-brown);
      border-color: var(--coffee-brown);
    }
  }

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
</style>
