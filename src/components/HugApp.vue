<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  if (typeof window !== 'undefined') {
    console.log({ window });

    console.log('Vue se ha montado correctamente en el cliente.');
  }
});
</script>

<template>
  <h1>HugApp</h1>
  <p>Current path: {{ route.fullPath }}</p>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>
