<template>
  <MainNavigation />
  <main>
    <RouterView />
    <GoToTopButton v-if="!onTop" />
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import GoToTopButton from "./components/GoToTopButton.vue";
import MainNavigation from "./components/MainNavigation.vue";

const onTop = ref(true);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
      onTop.value = false;
    } else {
      onTop.value = true;
    }
  });
});
</script>

<style scoped></style>
