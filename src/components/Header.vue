<script setup>
import { RouterLink, RouterView } from "vue-router";
import Container from "./Container.vue";
</script>
<template>
  <header class="header">
    <Container>
      <div class="menu-wrapp">
        <div class="logo">
          <RouterLink to="/"
            ><img src="../assets/img/logo.svg" alt="logo"
          /></RouterLink>
        </div>
        <nav class="nav">
          <ul>
            <li><RouterLink to="/services">Сервисы</RouterLink></li>
            <li><RouterLink to="/pets">Питомцы</RouterLink></li>
            <li><RouterLink to="/advert">Объявления</RouterLink></li>
          </ul>
        </nav>
        <div class="auth">
          <ul>
            <li><RouterLink to="/register">Регистрация</RouterLink></li>
            <li><RouterLink to="/login">Войти</RouterLink></li>
          </ul>
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header {
  background: #4571b7;
  padding: 24px 0;
}

.menu-wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul,
.auth ul {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
