<!-- src/App.vue -->
<template>
  <header>
    <h1>Sustainable Travel</h1>
    <nav>
      <a href="#" data-bs-toggle="modal" data-bs-target="#helpModal">Help</a>
    </nav>
  </header>
  <main>
    <RouterView />
    <HelpModal />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HelpModal from './components/HelpModal.vue';
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
}

a.router-link-exact-active {
  color: #0056b3;
  text-decoration: underline;
}

main {
  padding: 1rem;
}
</style>
