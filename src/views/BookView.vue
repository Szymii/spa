<template>
  <div class="content">
    <div class="wrapper">
      <img class="cover" :src="data.book.cover" />
      <div class="info">
        <div class="heading">
          <span>{{ data.book.name }}</span>
          <span class="price">{{ data.book.price }} zł</span>
        </div>
        <div class="description">
          <h3>Opis:</h3>
          <p>{{ data.book.description }}</p>
        </div>
        <button class="button" @click="handleModalOpen">
          Dodaj do koszyka
        </button>
        <ReservationModal
          :isOpen="isModalOpen"
          :handleClose="handleModalClose"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReservationModal from "../components/ReservationModal.vue";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBooksQuery } from "../useBooksQuery";

const route = useRoute();
const data = reactive({ book: [] });

const isModalOpen = ref(false);

onMounted(async () => {
  const books = await useBooksQuery();
  data.book = books.find(({ id }) => id === route.params.id);
});

const handleModalOpen = () => {
  isModalOpen.value = true;
};
const handleModalClose = () => {
  isModalOpen.value = false;
};
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
  max-width: 400px;
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
    padding: 30px 0;
  }
  .cover {
    max-width: 100px;
  }
}
</style>
