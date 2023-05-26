<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <section>
    <header class="absolute w-full z-10">
      <TopNav  />
    </header>

    <RouterView />
  </section>
</template>


