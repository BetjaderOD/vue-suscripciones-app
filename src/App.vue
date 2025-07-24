<template>
  <v-app>
    <v-app-bar color="primary" dark flat>
      <v-container class="d-flex justify-space-between align-center">
        <v-btn
          variant="plain"
          to="/dashboard"
          class="text-white text-h6 font-weight-bold"
          prepend-icon="mdi-clipboard-text"
        >
          Pai – Suscripciones
        </v-btn>

        <div class="d-flex gap-2">
          <v-btn variant="plain" to="/dashboard" color="white" exact>
            Dashboard
          </v-btn>
          <v-btn variant="plain" to="/configuracion" color="white" exact>
            Configuración
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// nada por ahora
</script>
