<script setup>
import { RouterView } from "vue-router";
import TopNav from "../src/components/TopNav.vue";

</script>

<template>
  <header class="sticky top-0 z-[9000]">
    <div class="absolute w-full  ">
      <TopNav />

    </div>
  </header>
  <section>


    <RouterView />
  </section>
</template>


