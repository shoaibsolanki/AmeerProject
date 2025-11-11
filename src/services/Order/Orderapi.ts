import http from "../axios-services";
import type OrderPayload from "./Orderinterface";

export const createNewOrder = async (payload: OrderPayload) => {
  const response = await http.post(`order/get-payment-link`, payload);
  return response.data;
};
