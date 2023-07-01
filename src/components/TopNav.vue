
<template>
  <nav class="navbar">
    <RouterLink class="text-primary-accent text-2xl lg:text-xl 2xl:text-2xl" to="/">tanooshi
    </RouterLink>
    <ul class="nav-menu" :class="showMenu ? 'active' : ''">
      <li class="nav-link " v-on:click="toggleMenu()">
        <a class="smooth-scroll" href="/tanooshi/about">About</a>

      </li>
      <li class="nav-link " v-on:click="toggleMenu()">
        <a class="smooth-scroll" href="/tanooshi/#why-us">Why Us</a>

      </li>
      <li class="nav-link " v-on:click="toggleMenu()">
        <a href="/tanooshi/#works">Works</a>

      </li>
      <li class="nav-link " v-on:click="toggleMenu()">
        <a href="/tanooshi/#contact">Contact</a>

      </li>
      <li class="nav-link btn-pill  hover:bg-white hover:italic" v-on:click="toggleMenu()">
        <a href="/tanooshi/lets-work">Let's Work</a>

      </li>
    </ul>
    <div v-on:click="toggleMenu()" class="hamburger" :class="showMenu ? 'active' : ''">
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar3"></span>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

  },
};
</script>
