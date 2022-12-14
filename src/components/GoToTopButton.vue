<template>
  <button class="button" @click="handleClick">
    <img src="../assets/arrowTop.svg" />
  </button>
</template>

<script setup>
const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  border: none;
  background-color: black;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  cursor: pointer;
}
</style>
