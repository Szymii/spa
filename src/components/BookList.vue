<template>
  <ul class="list">
    <li v-for="book in props.list" :key="book.id">
      <RouterLink :to="book.id" class="link listItem">
        <img :src="book.cover" class="cover" />

        <div class="description">
          <span>{{ book.name }}</span>
          <span class="price">{{ book.price }} zł</span>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["list"]);
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.listItem {
  display: flex;
  flex-direction: column;
}

.cover {
  width: 250px;
  height: 400px;
  object-fit: cover;
}

.link {
  color: black;
  text-decoration: none;
}

.description {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 10px;
}

.price {
  color: rgb(255, 123, 0);
}

@media (max-width: 900px) {
  .cover {
    width: 150px;
    height: 225px;
  }
}
</style>
