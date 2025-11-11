import http from "../axios-services";

export const GetAnnouncement = async () => {
  const response = await http.get(`announcement`);
  return response.data;
};
