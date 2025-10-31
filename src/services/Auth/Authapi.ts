import http from "../http-common";
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

export const UserDetail = async (payload: UpdateDetailpayload) => {
  const response = await http.patch(`user/update-user`, payload);
  return response;
};

export const UpdatePassword = async (payload: Regsiterpayload) => {
  const response = await http.patch(`user/update-password`, payload);
  return response.data;
};

export const ResendOtp = async (email: String) => {
  const response = await http.post(`user/send-otp/${email}`);
  return response.data;
};
