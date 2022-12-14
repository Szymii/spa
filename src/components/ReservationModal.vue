<template>
  <div :class="{ active: props.isOpen }" class="modal">
    <form class="modalContent" @submit.prevent="props.handleClose">
      <div class="exit" @click="props.handleClose">
        <img class="cross" src="../assets/cross.png" />
      </div>
      <h3>Produkt tymczasowo niedostępny</h3>
      <p>
        Podaj nam swój adres email, a my powiadomimy Cię gdy książka będzie
        dostępna.
      </p>
      <input type="email" class="input" placeholder="Email" />
      <div class="buttonGroup">
        <button class="button">Powiadom mnie</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(["isOpen", "handleClose"]);
</script>

<style scoped>
.modal {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}
.active {
  display: flex;
}

.modalContent {
  position: relative;
  width: 350px;
  padding: 30px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.buttonGroup {
  display: flex;
  justify-content: center;
}

.button {
  border: none;
  background-color: rgb(255, 123, 0);
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.input {
  font-size: 1rem;
  padding: 8px 5px;
}

.exit {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.cross {
  height: 16px;
  width: auto;
}
</style>
