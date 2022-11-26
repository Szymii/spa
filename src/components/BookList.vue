<template>
  <ul class="list">
    <li v-for="book in props.list" :key="book.id">
      <RouterLink to="{  params: { id: {{ book.id }} }" class="link listItem">
        <img :src="book.cover" class="cover" />
        {{ book.name }}
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
</style>
