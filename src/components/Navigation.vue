<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.svg" alt="logo-excellent" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'Home' }">StartseiteD</router-link></li>
        <li><router-link class="link" :to="{ name: 'AboutUs' }">Über uns</router-link></li>
        <li><router-link class="link" :to="{ name: 'Services' }">Behandlungen</router-link></li>
        <li><router-link class="link" :to="{ name: 'Prices' }">Preise</router-link></li>
        <li><router-link class="link" :to="{ name: 'Gallery' }">Galerie</router-link></li>
        <li><a class="link" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a></li>
      </ul>
      
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{ name: 'Home' }">StartseiteM</router-link></li>
          <li><router-link class="link" :to="{ name: 'AboutUs' }">Über uns</router-link></li>
          <li><router-link class="link" :to="{ name: 'Services' }">Behandlungen</router-link></li>
          <li><router-link class="link" :to="{ name: 'Prices' }">Preise</router-link></li>
          <li><router-link class="link" :to="{ name: 'Gallery' }">Galerie</router-link></li>
          <li><a class="link" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a></li>
        </ul>
      </transition>

      <div class="hamburger-wrapper">
        <div @click="toggleMobileNav" class="hamburger" :class="{ active: mobileNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      bookingUrl: "https://www.planity.com/de-DE/kosmetik-studio-excellent-50670-koln",
      scrollPosition: null,
      mobile: false,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
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
  color: #000;

  &.scrolled-nav {
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    padding: 12px 0;
    transition: all 0.5s ease;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #000;
      list-style: none;
      text-decoration: none;
    }

    .li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
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
      text-transform: uppercase;
      padding: 10px;
      margin-left: 15px;

      a {
        color: #000;
        text-decoration: none;
      }
    }
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #ffd700;
      border-color: #ffd700;
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
</style>
