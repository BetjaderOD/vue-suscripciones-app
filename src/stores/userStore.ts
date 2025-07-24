import { defineStore } from "pinia";
import { fetchUserData, fetchPaymentHistory } from "@/services/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as null | {
      name: string;
      email: string;
      plan: {
        name: string;
        price: string;
        status: string;
        features: string[];
      };
    },
    payments: [] as {
      date: string;
      amount: string;
      status: string;
      name: string;
    }[],
    loading: false,
  }),

  actions: {
    async loadData() {
      this.loading = true;
      this.user = await fetchUserData();
      this.payments = await fetchPaymentHistory();
      this.loading = false;
    },
  },
});
