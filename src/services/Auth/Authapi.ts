import http from "../axios-services";
import type {
  Regsiterpayload,
  UpdateDetailpayload,
  VerifyOtppayload,
} from "./AuthInterface";

export const Regsiter = async (payload: Regsiterpayload) => {
  const response = await http.post(`user/register`, payload);
  return response.data;
};
export const VerifyOtp = async (payload: VerifyOtppayload) => {
  const response = await http.post(`user/verify-user`, payload);
  return response.data;
};

export const ResendOtp = async (email: String) => {
  const response = await http.post(`user/send-otp`, { email });
  return response.data;
};

export const GetUserDetails = async (userId: string) => {
  const response = await http.get(`user/${userId}`);
  return response.data;
};

export const UserDetail = async (payload: UpdateDetailpayload) => {
  const response = await http.patch(`user/update-user`, payload);
  return response.data;
};

export const UpdatePassword = async (payload: Regsiterpayload) => {
  const response = await http.patch(`user/update-password`, payload);
  return response.data;
};
export const Requestforchangeusername = async (
  payload: {
    newTradingNumber: string;
    reason: string;
  },
  id: string
) => {
  const response = await http.post(
    `user/${id}/request-tranding-number-change`,
    payload
  );
  return response.data;
};

export const Pendingrequest = async () => {
  const response = await http.get(`user/get-requested-trading-usernames`);
  return response.data;
};

export const Approveorreject = async (
  id: string,
  payload: {
    status: string;
  }
) => {
  const response = await http.post(
    `user/${id}/validate-trading-request`,
    payload
  );
  return response.data;
};
