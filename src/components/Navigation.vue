<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.svg" alt="logo-excellent" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'Home' }">Startseite</router-link></li>
        <li><router-link class="link" :to="{ name: 'AboutUs' }">Über uns</router-link></li>
        <li><router-link class="link" :to="{ name: 'Services' }">Behandlungen</router-link></li>
        <li><router-link class="link" :to="{ name: 'Prices' }">Preise</router-link></li>
        <li><router-link class="link" :to="{ name: 'Gallery' }">Galerie</router-link></li>
        <li>
          <a class="link book-appointment" :href="bookingUrl" target="_blank" rel="noopener noreferrer"
            >Termin Buchen</a
          >
        </li>
      </ul>

      <div class="hamburger-wrapper" v-show="mobile">
        <button @click="toggleMobileNav" class="hamburger" :class="{ active: mobileNav }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'Home' }">Startseite</router-link></li>
          <li><router-link class="link" :to="{ name: 'AboutUs' }">Über uns</router-link></li>
          <li><router-link class="link" :to="{ name: 'Services' }">Behandlungen</router-link></li>
          <li><router-link class="link" :to="{ name: 'Prices' }">Preise</router-link></li>
          <li><router-link class="link" :to="{ name: 'Gallery' }">Galerie</router-link></li>
          <li><a class="link book-appointment" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a></li>
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
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease;
  color: var(--sandstone);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    padding: 10px 0;
    transition: all 0.5s ease;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: var(--black);
      list-style: none;
      text-decoration: none;

      .book-appointment {
        background-color: var(--cream);
        color: var(--sandstone);
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
        
        &:hover {
          background-color: var(--coffee-brown);
          color: var(--white-rock);
        }
      }
    }

    .li {
      padding: 15px;
      margin-left: 15px;
    }
  }

  .branding {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      transition: 0.5s ease all;
    }
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
