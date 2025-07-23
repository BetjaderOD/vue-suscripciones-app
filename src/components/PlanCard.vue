<script setup lang="ts">
defineProps<{
  name: string
  price: string
  status: string
}>()
</script>

<template>
  <div class="p-4 border rounded shadow">
    <h2 class="text-lg font-bold">{{ name }}</h2>
    <p>Precio: {{ price }}</p>
    <p class="text-green-600">Estado: {{ status }}</p>
  </div>
</template>
