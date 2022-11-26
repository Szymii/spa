<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
