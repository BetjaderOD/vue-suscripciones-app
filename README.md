# 🎫 Vue Suscripciones App

Aplicación web de suscripciones , desarrollada con **Vue 3 + TypeScript** y estilizada con **Vuetify 3**. Incluye funcionalidades como visualización de planes, historial de pagos, navegación protegida y pruebas unitarias.

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Clona el repositorio

```bash
https://github.com/BetjaderOD/vue-suscripciones-app.git
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000) o el puerto que indique Vite.

---

## 🧪 ¿Cómo ejecutar las pruebas?

Este proyecto utiliza [Vitest](https://vitest.dev/) y `@vue/test-utils` para pruebas unitarias.

### 1. Ejecutar pruebas en consola

```bash
npx vitest run
```

### 2. Modo visual con interfaz interactiva

```bash
npx vitest --ui
```

Esto abrirá una interfaz visual en el navegador para ejecutar y revisar resultados de las pruebas.

---

## ⚙️ Funcionamiento de la aplicación

- **Página principal (`/`)**  
  Muestra la tarjeta del plan actual del usuario y el historial de pagos.

- **Configuración (`/configuracion`)**  
  Vista para seleccionar un nuevo plan entre `Básico`, `Pro` y `Premium`.

- **Simulación de usuario**  
  Los datos se cargan simulando una API con funciones mock .

---

## 🧱 Tecnologías utilizadas

| Tecnología          | Descripción                                              |
| ------------------- | -------------------------------------------------------- |
| **Vue 3**           | Framework principal.                                     |
| **TypeScript**      | Tipado estático en toda la aplicación.                   |
| **Pinia**           | Manejo de estado (`stores/userStore.ts`).                |
| **Vuetify 3**       | Componentes UI (tarjetas, botones, chips, tablas).       |
| **Vite**            | Bundler ultrarrápido para desarrollo y build.            |
| **Vitest**          | Framework de testing.                                    |
| **@vue/test-utils** | Utilidad para montar componentes y hacer testing de Vue. |

---

## 🧠 Arquitectura de carpetas

```
src/
├── assets/              # Recursos estáticos
├── components/          # Componentes como PlanCard, PaymentItem
├── composables/         # Composables como usePlan
├── router/              # Configuración de rutas
├── services/            # Funciones simuladas para "fetch" de datos
├── stores/              # Pinia store (userStore.ts)
├── tests/               # Pruebas unitarias
├── views/               # Vistas como ConfiguracionView, HomeView
└── App.vue              # Root component
```

---

## ✨ Extras

- Carga perezosa (lazy loading) de rutas y componentes
- Skeletons con Vuetify mientras cargan los datos
- Chips de color dinámico por estado del plan (`Activo`, `Recomendado`, `Disponible`)

---

## 📸 Capturas 

<img width="1900" height="932" alt="image" src="https://github.com/user-attachments/assets/c5e0e049-812e-4431-9e00-3b909b29db77" />
<img width="1915" height="944" alt="image" src="https://github.com/user-attachments/assets/e6e33701-451d-40af-8c34-ac5d78ac0855" />

<img width="1911" height="949" alt="image" src="https://github.com/user-attachments/assets/38d2de17-ddff-4c35-9bdf-0fdde50b4299" />

---

## 🛠️ Notas de mejora futura

- Implementar autenticación real con backend (actualmente simulada).
- Agregar paginación o scroll infinito en historial de pagos.
- Permitir cambiar de plan desde la interfaz con confirmación.
- Integrar Stripe para pagos reales.
- Mejorar accesibilidad (mejor contraste, etiquetas ARIA).
- Implementar pruebas E2E con Cypress o Playwright.
- Optimizar carga inicial (lazy loading de más componentes o módulos).
- Agregar modo oscuro y selector de idioma.
