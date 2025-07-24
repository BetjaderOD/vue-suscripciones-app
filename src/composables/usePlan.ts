import { ref, computed } from "vue";

const plans = [
  {
    name: "Básico",
    price: "$5.99",
    status: "Disponible",
    features: [
      "1 usuario",
      "Soporte por email",
      "Reportes simples",
      "Sin prioridad",
    ],
  },
  {
    name: "Pro",
    price: "$7.99",
    status: "Recomendado",
    features: [
      "5 usuarios",
      "Soporte extendido",
      "Reportes avanzados",
      "Acceso prioritario",
    ],
  },
  {
    name: "Premium",
    price: "$9.99",
    status: "Activo",
    features: [
      "Usuarios ilimitados",
      "Soporte 24/7",
      "Reportes avanzados",
      "Acceso prioritario",
    ],
  },
];

export function usePlan() {
  const selected = ref("Premium");

  const selectedPlan = computed(() =>
    plans.find((p) => p.name === selected.value)
  );

  const changePlan = (planName: string) => {
    selected.value = planName;
  };

  return {
    plans,
    selected,
    selectedPlan,
    changePlan,
  };
}
