<script setup lang="ts">
import { usePlan } from "@/composables/usePlan";
import PlanCard from "@/components/PlanCard.vue";

const { plans, selected, changePlan } = usePlan();
</script>

<template>
  <v-container class="py-10">
    <h2 class="text-h5 font-weight-bold text-primary mb-6 text-center">
      Elige tu plan de suscripción
    </h2>

    <v-row dense justify="center">
      <v-col v-for="plan in plans" :key="plan.name" cols="12" sm="6" md="4">
        <PlanCard
          :name="plan.name"
          :price="plan.price"
          :status="plan.status"
          :features="plan.features"
          :buttonType="plan.status === 'Activo' ? 'Administrar' : 'Cambiar'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
