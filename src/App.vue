<template>
  <header class="mx-auto px-8 top-0 max-w-7xl">
    <nav class="flex items-center justify-between flex-row py-5 w-full">
      <ul class="flex items-center mx-auto gap-5">
        <li><router-link to="/"><button class="uppercase tracking-widest hover:text-blue-400 lg:text-xs text-black font-bold">Home</button></router-link></li>
        <li><router-link to="/counter"><button class="lg:btn-red uppercase text-black lg:text-xs tracking-widest py-2 px-4 hover:opacity-75 
        rounded shadow-lg font-bold border-2 hover:border-blue-400 lg:hover:bg-transparent lg:hover:text-slate-800 transition-all duration-200">Counter</button></router-link></li>
      </ul>
    </nav>
  </header>
  <router-view/>
</template>

<script>
import hamburger from "./assets/icon-hamburger.svg"
export default {
  data() {
    return {
      setHamburger: hamburger,
    }
  },
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
</style>
