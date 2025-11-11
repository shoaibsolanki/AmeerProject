import http from "../axios-services";

export const AddtoCart = async (user_id: string, productId: string) => {
  const response = await http.post(`cart/${user_id}/add`, {
    productId,
  });
  return response.data;
};

export const GetTocart = async (user_id: string) => {
  const response = await http.get(`cart/${user_id}`);
  return response.data;
};

export const ClearCart = async (user_id: string) => {
  const response = await http.delete(`cart/clear/${user_id}`);
  return response.data;
};
export const RemoveFromCart = async (user_id: string, product_id: string) => {
  const response = await http.delete(`cart/${user_id}/remove`, {
    data: { productId: product_id },
  });
  return response.data;
};
