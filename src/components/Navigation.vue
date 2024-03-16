<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.svg" alt="logo-excellent" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link to="/">Startseite</router-link></li>
        <li><router-link to="/about-us">Über uns</router-link></li>
        <li><router-link to="/services">Behandlungen</router-link></li>
        <li><router-link to="/prices">Preise</router-link></li>
        <li><router-link to="/gallery">Galerie</router-link></li>
        <li>
          <a :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a>
        </li>
      </ul>
    </nav>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobile" class="dropdown-nav">
        <li><router-link to="/">Startseite</router-link></li>
        <li><router-link to="/about-us">Über uns</router-link></li>
        <li><router-link to="/services">Behandlungen</router-link></li>
        <li><router-link to="/prices">Preise</router-link></li>
        <li><router-link to="/gallery">Galerie</router-link></li>
        <li>
          <a :href="bookingUrl" target="_blank" rel="noopener noreferrer">Termin Buchen</a>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      bookingUrl: "https://www.planity.com/de-DE/kosmetik-studio-excellent-50670-koln",
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
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
    flex-direction: row;
    padding: 12px 0;
    transition: all 0.5s ease;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }

  .branding {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      transition: .5s ease all;
    }
  }

  .navigation,
  .dropdown-nav {
    list-style: none;

    li {
      display: inline-block;
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;

      a {
        color: #000;
        text-decoration: none;

        &:hover {
          background-color: #ffd700
        }
      }
    }
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    
    &:hover {
      color: #ffd700;
      border-color: #ffd700;
    }
  }

  .icon {
     }
}
</style>

