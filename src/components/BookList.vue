<template>
  <ul class="list">
    <li v-for="book in props.list" :key="book.id">
      <RouterLink :to="book.id" class="link listItem">
        <div class="coverWrapper">
          <img :src="book.cover" class="cover" />
        </div>

        <div class="description">
          <span>{{ book.name }}</span>
          <span class="author">{{ book.author }}</span>
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
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-template-rows: auto;
  padding-bottom: 2em;
}
.listItem {
  display: flex;
  flex-direction: column;
}

.cover {
  max-height: 320px;
  object-fit: cover;
}

.link {
  color: black;
  text-decoration: none;
}

.description {
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding-inline: calc((100% - 230px) / 2);
}

.coverWrapper {
  display: flex;
  justify-content: center;
}

.author {
  color: gray;
  font-weight: 400;
}
</style>
