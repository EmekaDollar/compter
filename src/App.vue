<template>
  <header :class="{'scrolled': scrollPosition}" class="mx-auto px-8 top-0 max-w-7xl">
    <nav class="flex items-center justify-between flex-row py-5 w-full">
      <div class="branding">
        <img src="@/assets/logo-bookmark.svg" alt="logo">
      </div>

      <ul class="flex items-center flex-1 justify-end gap-5" v-show="!mobile">
        <li><router-link to="/"><button class="uppercase tracking-widest hover:text-blue-400 lg:text-xs text-black font-bold">Home</button></router-link></li>
        <li><router-link to="/about"><button class="uppercase tracking-widest hover:text-blue-400 lg:text-xs text-black font-bold">About</button></router-link></li>
        <li><router-link to="/counter"><button class="lg:btn-red uppercase text-black lg:text-xs tracking-widest py-2 px-4 hover:opacity-75 
        rounded shadow-lg font-bold border-2 hover:border-blue-400 lg:hover:bg-transparent lg:hover:text-slate-800 transition-all duration-200">Counter</button></router-link></li>
      </ul>

      <div>
        <button @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}">
          <img :src="setHamburger" alt="hamburger logo">
        </button>
      </div>
      <transition name="mobile-nav">
        <ul class="flex flex-col items-center gap-4 fixed min-w-[350px] h-full bg-white top-11 right-0" v-show="mobileNav">
          <li><router-link to="/"><button class="mt-8 uppercase tracking-widest hover:text-blue-400 lg:text-xs mr-0 text-black font-bold">Home</button></router-link></li>
          <li><router-link to="/about"><button class="uppercase tracking-widest hover:text-blue-400 lg:text-xs mr-0 text-black font-bold">About</button></router-link></li>
          <li><router-link to="/counter"><button class="lg:btn-red uppercase text-black lg:text-xs tracking-widest py-2 px-4 hover:opacity-75 
          rounded shadow-lg font-bold border-2 hover:border-blue-400 lg:hover:bg-transparent lg:hover:text-slate-800 transition-all duration-200 mr-0">Counter</button></router-link></li>
      </ul>
      </transition>
    </nav>
  </header>
  <router-view/>
</template>

<script>
import hamburger from "./assets/icon-hamburger.svg"
export default {
  data() {
    return {
      isMenuOpen: false,
      setHamburger: hamburger,
      scrollPosition: null,
      mobile : true,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen())
    this.checkScreen();
  },
  methods: { 
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

header {
  /* background-color: rgba(0, 0, 0, 0.8); */
  z-index: 99;
  transition: .5s ease all;
}
</style>
