<template>
  <Navbar />
  <main class="bg-black">
    <RouterView />
  </main>
  <Footer/>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style scoped></style>
