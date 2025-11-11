import http from "../axios-services";

export const GetProducts = async () => {
  const response = await http.get(`product/`);
  return response.data;
};
