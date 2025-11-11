export interface Regsiterpayload {
  email: String;
  password: String;
}
export interface VerifyOtppayload {
  email: String;
  otp: number;
}
export interface UpdateDetailpayload {
  email: String;
  name: String;
  tradingUsername?: String;
  phone: String;
  state: String;
  city: String;
  pincode: String;
  addressLine: String;
}
