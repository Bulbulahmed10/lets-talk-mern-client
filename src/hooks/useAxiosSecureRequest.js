import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const axiosSecureRequest = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecureRequest = () => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  useEffect(() => {
    axiosSecureRequest.interceptors.request.use((config) => {
      const token = localStorage.getItem("lets-talk-auth-access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecureRequest.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return [axiosSecureRequest];
};

export default useAxiosSecureRequest
