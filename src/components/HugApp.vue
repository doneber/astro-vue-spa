<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined') {
    console.log({ window });

    console.log('Vue se ha montado correctamente en el cliente.');
  }
});
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>
