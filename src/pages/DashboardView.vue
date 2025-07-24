<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
const PlanCard = defineAsyncComponent(
  () => import("@/components/PlanCard.vue")
);
const PaymentItem = defineAsyncComponent(
  () => import("@/components/PaymentItem.vue")
);
const userStore = useUserStore();

onMounted(() => {
  userStore.loadData();
});
</script>

<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-8">
      <v-col cols="12">
        <h1 class="text-h5 text-center font-weight-bold text-primary">
          Mi suscripción y pagos
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <p class="text-center text-body-1 text-gray-700">
          Buen dia {{ userStore.user?.name }}! Aquí puedes ver tu plan actual y
          el historial de pagos. 🌞
        </p>
      </v-col>
    </v-row>
     <v-row justify="center" align="stretch" class="gap-6">
      <v-col cols="12" md="4">
        <div v-if="userStore.loading">
          <v-skeleton-loader type="card" height="250px" />
        </div>
        <PlanCard
          v-else-if="userStore.user"
          :name="userStore.user.plan.name"
          :price="userStore.user.plan.price"
          :status="userStore.user.plan.status"
          :features="userStore.user.plan.features"
          :button-label="'Administrar plan'"
        />
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="pa-6 h-100" elevation="2">
          <v-card-title class="text-h6 font-weight-bold mb-4">
            Historial de pagos
          </v-card-title>

          <div v-if="userStore.loading">
            <v-skeleton-loader type="table" :loading="true" />
          </div>

          <v-table v-else class="rounded">
            <thead>
              <tr>
                <th class="text-left">Fecha</th>
                <th class="text-left">Monto</th>
                <th class="text-left">Plan</th>
                <th class="text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              <PaymentItem
                v-for="(item, i) in userStore.payments"
                :key="i"
                :amount="item.amount"
                :date="item.date"
                :name="item.name"
                :status="item.status"
              />
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
