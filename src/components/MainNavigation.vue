<template>
  <nav class="nav">
    <div class="wrapper">
      <RouterLink to="/" class="logo link">BookShop</RouterLink>
      <RouterLink to="/" class="link">
        <img class="cart" src="../assets/Cart.png" />
      </RouterLink>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
.nav {
  position: fixed;
  background-color: black;
  width: 100%;
  height: 80px;
}
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
}
.cart {
  height: 32px;
}

.link {
  text-decoration: none;
}
</style>
