import http from "../http-common";

export const GetAnnouncement = async () => {
  const response = await http.get(`announcement`);
  return response.data;
};
