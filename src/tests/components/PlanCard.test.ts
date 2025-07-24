import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PlanCard from "@/components/PlanCard.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const vuetify = createVuetify();

describe("PlanCard.vue", () => {
  const props = {
    name: "Premium",
    price: "$9.99",
    status: "Activo",
    buttonType: "Administrar",
    features: [
      "Usuarios ilimitados",
      "Soporte 24/7",
      "Reportes avanzados",
      "Acceso prioritario",
    ],
  };

  const factory = () =>
    mount(PlanCard, {
      props,
      global: {
        plugins: [vuetify],
      },
    });

  it("muestra el nombre del plan", () => {
    const wrapper = factory();
    expect(wrapper.text()).toContain("Premium");
  });

  it("muestra el precio del plan", () => {
    const wrapper = factory();
    expect(wrapper.text()).toContain("$9.99");
  });

  it("muestra las características", () => {
    const wrapper = factory();
    props.features.forEach((feature) => {
      expect(wrapper.text()).toContain(feature);
    });
  });

  it("muestra el botón con texto correcto", () => {
    const wrapper = factory();
    expect(wrapper.text()).toContain("Administrar plan");
  });
});
