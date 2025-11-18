import http from "../axios-services";

export const GetAnnouncement = async () => {
  const response = await http.get(`announcement`);
  return response.data;
};

export const AddAnnouncement = async (formData: FormData) => {
  const response = await http.post(`announcement`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const Updatestatus = async (
  id: string,
  payload: { status: boolean }
) => {
  const response = await http.patch(`announcement/${id}/status`, payload);
  return response.data;
};

export const Updateannouncement = async (id: string, formData: FormData) => {
  const response = await http.patch(`announcement/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const Deleteannouncement = async (id: string) => {
  const response = await http.delete(`announcement/${id}`);
  return response.data;
};
