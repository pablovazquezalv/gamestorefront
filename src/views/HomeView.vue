<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Items from '@/components/Items.vue';
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';


</script>

<template>
  <main>
    <NavBar />
    <Items />

  </main>
</template>