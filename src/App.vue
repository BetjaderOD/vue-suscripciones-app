<template>
  <header class="w-full bg-primary text-white shadow-md fixed top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold tracking-wide flex items-center gap-2">
        📋 <span>Pai – Suscripciones</span>
      </h1>

      <nav class="flex items-center space-x-4 text-sm">
        <RouterLink
          to="/dashboard"
          class="px-3 py-1 rounded hover:bg-white hover:text-primary transition"
          active-class="font-semibold underline"
        >
          Dashboard
        </RouterLink>
        <RouterLink
          to="/configuracion"
          class="px-3 py-1 rounded hover:bg-white hover:text-primary transition"
          active-class="font-semibold underline"
        >
          Configuración
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="bg-background min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <RouterView />
    </div>
  </main>
</template>
