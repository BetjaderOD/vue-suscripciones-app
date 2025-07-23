<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  date: string
  amount: string
  status: string
}>()

const statusColor = computed(() =>
  props.status === "Pagado" ? "text-green-500" : "text-red-500"
)
</script>

<template>
  <tr>
    <td>{{ props.date }}</td>
    <td>{{ props.amount }}</td>
    <td :class="statusColor">{{ props.status }}</td>
  </tr>
</template>
