<template>
  <div class="content">
    <RouterLink to="/sale">
      <img class="sale" src="../assets/Baner.png" />
    </RouterLink>
    <h2 class="heading">Nowości</h2>
    <BookList :list="data.bestsellers" />
    <div class="divider" />
    <h2 class="heading">Bestsellery</h2>
    <BookList :list="data.newest" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import BookList from "../components/BookList.vue";
import { useBooksQuery } from "../useBooksQuery";

const data = reactive({ bestsellers: [], newest: [] });

onMounted(async () => {
  const books = await useBooksQuery();
  data.bestsellers = books.filter(({ category }) => category === "bestseller");
  data.newest = books.filter(({ category }) => category === "newest");
});
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
