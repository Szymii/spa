<template>
  <div class="content">
    <div class="wrapper">
      <img class="cover" :src="book.cover" />
      <div class="info">
        <div class="heading">
          <span>{{ book.name }}</span>
          <span class="price">{{ book.price }} zł</span>
        </div>
        <div class="description">
          <h3>Opis:</h3>
          <p>{{ book.description }}</p>
        </div>
        <button class="button">Dodaj do koszyka</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import data from "../books.json";

const route = useRoute();

const book = data.find(({ id }) => id === route.params.id);
</script>

<style scoped>
.wrapper {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
}

.cover {
  max-width: 333px;
}

.info {
  background-color: rgb(245, 245, 245);
  width: 400px;
  padding: 40px;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.heading {
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}

.price {
  color: rgb(255, 123, 0);
}

.button {
  border: none;
  background-color: rgb(255, 123, 0);
  color: white;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 900px) {
  .wrapper {
    flex-direction: column;
  }
  .cover {
    max-width: 100px;
  }
}
</style>
