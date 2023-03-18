<template>
  <header class="mx-auto px-8 top-0 max-w-7xl">
    <div class="flex justify-between items-center pt-4">
      <router-link to="/"><img alt="logo" src="./assets/logo-bookmark.svg"></router-link>

      <!-- <ul class="gap-14 flex items-center">
        <li class="uppercase"><router-link to="/">Home</router-link></li>
        <li class="uppercase"><router-link to="/about">About</router-link></li>
        <router-link to="/counter"><button class="bg-[#42b983] uppercase text-white py-3 px-7 hover:opacity-75">Counter</button></router-link> 
      </ul>  -->

    <nav :class="{'block': menu, 'hidden': !menu}">
      <ul>
        <li class="uppercase"><router-link to="/">Home</router-link></li>
        <li class="uppercase"><router-link to="/about">About</router-link></li>
        <router-link to="/counter"><button class="bg-[#42b983] uppercase text-white py-3 px-7 hover:opacity-75">Counter</button></router-link>
      </ul>
    </nav>

    <div>
      <button>
        <!-- <img 
          class="md:hidden" 
          @click="changeMenu" 
          alt="" 
          :src="menu ? 'setClose' : 'setHamBurger'"
        > -->
      </button>
    </div>
    </div>
  </header>
  <router-view/>
</template>

<script>

export default {
  data() {
    return {
      menu: false,
      
    }
  },
  methods: { 
    changeMenu() {
      this.menu = !this.menu
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
