import mockData from "../data/mockData.json";

export function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.userData), 500);
  });
}

export function fetchPaymentHistory() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.paymentHistory), 500);
  });
}
