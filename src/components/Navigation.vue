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
        <li><a href="https://www.planity.com/de-DE/kosmetik-studio-excellent-50670-koln" target="_blank" rel="noopener noreferrer">Termin Buchen</a></li>      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
