
<template>
  <nav class="navbar">
    <RouterLink class="text-primary-accent" to="/">tanooshi</RouterLink>
    <ul class="nav-menu" :class="showMenu ? 'active' : ''">
      <li class="nav-link"><RouterLink to="/">About</RouterLink></li>
      <li class="nav-link"><RouterLink to="/">Why Us</RouterLink></li>
      <li class="nav-link"><RouterLink to="/">Works</RouterLink></li>
      <li class="nav-link"><RouterLink to="/">Contact</RouterLink></li>
      <li class="nav-link btn-pill"><RouterLink to="/">Let's Work</RouterLink></li>
    </ul>
    <div v-on:click="toggleMenu()" class="hamburger" :class="showMenu ? 'active' : ''" >
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
