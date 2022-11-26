<template>
  <div class="content">
    <RouterLink to="/sale">
      <img class="sale" src="../assets/Baner.png" />
    </RouterLink>
    <h2 class="heading">Nowości</h2>
    <BookList :list="bestsellers" />
    <div class="divider" />
    <h2 class="heading">Bestsellery</h2>
    <BookList :list="newest" />
  </div>
</template>

<script setup>
import BookList from "../components/BookList.vue";
import data from "../books.json";

const bestsellers = data.filter(({ category }) => category === "bestseller");
const newest = data.filter(({ category }) => category === "newest");
</script>

<style scoped>
.sale {
  width: 100%;
  height: auto;
}
.heading {
  margin: 15px 0;
  text-align: center;
}
.divider {
  height: 50px;
}
</style>
