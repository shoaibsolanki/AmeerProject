import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const BASEURL = {
  ENDPOINT_URL: apiUrl,
};

export const authToken = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: `${BASEURL.ENDPOINT_URL}`,
  headers: headers,
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Check the status code here
    console.log("Status Code:", response.status);
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Error Status Code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No response received");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
