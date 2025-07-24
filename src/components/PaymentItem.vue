<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  date: string;
  amount: string;
  status: string;
  name: string;
}>();

const statusClass = computed(() => {
  switch (props.status) {
    case "Pagado":
      return "status paid";
    case "Pendiente":
      return "status pending";
    case "Fallido":
      return "status failed";
    default:
      return "status";
  }
});
</script>

<template>
  <tr>
    <td>{{ props.date }}</td>
    <td>{{ props.amount }}</td>
    <td>
      <span class="text-body-2">{{ props.name }}</span>
    </td>
    <td>
      <span :class="statusClass">{{ props.status }}</span>
    </td>
  </tr>
</template>

<style scoped>
td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.95rem;
  color: #374151;
}

.status {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;
  min-width: 90px;
}

.paid {
  background-color: #d1fae5;
  color: #065f46;
}

.pending {
  background-color: #fef3c7;
  color: #92400e;
}

.failed {
  background-color: #fee2e2;
  color: #991b1b;
}
</style>
