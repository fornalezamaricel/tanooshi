
<template>
  <nav class="navbar">
    <RouterLink class="text-primary-accent text-2xl lg:text-xl 2xl:text-2xl" to="/">tanooshi</RouterLink>
    <ul class="nav-menu" :class="showMenu ? 'active' : ''">
      <li class="nav-link cursor-pointer" @click="goTo('home')">
        About
      </li>
      <li class="nav-link cursor-pointer" @click="goTo('why-us')">
        Why Us
      </li>
      <li class="nav-link cursor-pointer" @click="goTo('works')">
        Works
      </li>
      <li class="nav-link cursor-pointer" @click="goTo('contact')">
        Contact
      </li>
      <li class="nav-link btn-pill cursor-pointer hover:bg-white hover:italic">
        Let's Work
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
    goTo(el) {
      this.$emit("scrollToElement", el)
    }
  },
};
</script>
