<script setup lang="ts">
defineProps<{
  name: string;
  price: string;
  status: string;
  buttonType: "Cambiar" | "Administrar";
  features: string[];
}>();

const statusColors = {
  Disponible: "secondary",
  Recomendado: "purple",
  Activo: "primary",
};
</script>

<template>
  <v-card
    elevation="3"
    rounded="xl"
    style="max-width: 400px; min-height: 450px"
    class="mx-auto my-4 d-flex flex-column justify-space-between"
  >
    <div class="text-center py-6 px-4" style="background-color: #f7f8fc">
      <h2 class="text-uppercase font-weight-bold text-primary text-h6">
        {{ name }}
      </h2>

      <div class="text-center py-5 px-4" style="background-color: #f7f8fc">
        <p class="text-h4 font-weight-bold mb-1" style="color: #1f2937">
          {{ price }}
        </p>
        <v-chip
          class="text-body-2 font-weight-medium"
          :color="`${statusColors[status]}`"
        >
          {{ status }}
        </v-chip>
      </div>
    </div>

    <v-list density="compact" class="px-6 pt-4 pb-2">
      <v-list-item
        v-for="(feature, index) in features"
        :key="index"
        class="pa-0"
      >
        <v-list-item-title class="text-body-2 d-flex align-start">
          <span class="me-2 text-success font-weight-bold">✓</span>
          {{ feature }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-card-actions class="px-6 py-4 justify-center">
      <v-btn
        :color="statusColors[status]"
        variant="flat"
        rounded="lg"
        size="large"
        class="text-white font-weight-bold"
        style="text-transform: none"
        :to="'/configuracion'"
      >
        {{ buttonType === "Cambiar" ? "Cambiar plan" : "Administrar plan" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
