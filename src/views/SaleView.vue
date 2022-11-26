<template>
  <div class="content">
    <h2 class="heading">Aktualnie na wyprzedaży</h2>
    <BookList :list="forSale" />
  </div>
</template>

<script setup>
import BookList from "../components/BookList.vue";
import data from "../books.json";

const forSale = data.filter(({ forSale }) => forSale);
</script>

<style scoped>
.heading {
  text-align: center;
  margin-bottom: 50px;
}
</style>
