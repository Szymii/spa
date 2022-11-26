<template>
  <MainNavigation />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import MainNavigation from "./components/MainNavigation.vue";
</script>

<style scoped></style>
