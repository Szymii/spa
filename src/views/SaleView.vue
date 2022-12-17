<template>
  <div class="content">
    <h2 class="heading">Aktualnie na wyprzedaży</h2>
    <BookList :list="data.forSale" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import BookList from "../components/BookList.vue";

import { useBooksQuery } from "../useBooksQuery";

const data = reactive({ forSale: [] });

onMounted(async () => {
  const books = await useBooksQuery();
  data.forSale = books.filter(({ forSale }) => forSale);
});
</script>

<style scoped>
.heading {
  text-align: center;
  margin-bottom: 50px;
}
</style>
