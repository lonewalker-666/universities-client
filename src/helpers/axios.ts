import axios from "axios";
import { getRefreshToken, setAccessToken } from "./local-storage";
import Router from "next/router";

// live EC2
// const BASE_URL = "https://theuniversitiesusa.com";
// development
const BASE_URL = "https://dev.theuniversitiesusa.com/api";
// const BASE_URL = "http://127.1.0.0:8000/api";

const axiosInstance = axios.create({ baseURL: BASE_URL });

// Interceptor to check for 401 errors (token expiration)
axiosInstance.interceptors.response.use(
  (response) => response, // if the response is successful, return it
  async (error) => {
    const originalRequest = error.config;

    // Check if the response exists and status is 401 (Unauthorized)
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();

        // Send the request to refresh the token
        const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
          refreshToken,
        });

        if (response.status === 200) {
          console.log("headers", response);
          const newAccessToken = response.data.accessToken;
          setAccessToken(newAccessToken);

          // Set the new access token in the request header and retry the original request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest); // Retry the request with the new token
        }
      } catch (refreshError) {
        // If the refresh token also fails, redirect to the login page
        console.error("Refresh token failed:", refreshError);
        Router.push("/login"); // Redirect to login on token refresh failure
        return Promise.reject(refreshError); // Reject the original promise
      }
    }

    // If the error is not a 401 or other conditions fail, push to login and reject
    if (error.response && error.response.status === 401) {
      Router.push("/login"); // Redirect to login on token expiration
    }

    if (error.response && error.response.status === 402) {
      Router.push("/upgrade"); // Redirect to Plan Upgrade
    }

    return Promise.reject(error); // Reject the original error promise
  }
);

export default axiosInstance;
