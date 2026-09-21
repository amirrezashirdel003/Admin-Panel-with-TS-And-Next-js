import axios from "axios";
import axiosInstance from "./axiosInstance";

export type Credentials = {
  email: string;
  password: string;
};

export const login = async (credentials: Credentials) => {
  const response = await axios.post("/api/login", credentials);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosInstance.get("/api/admin/me");
  return response.data;
};
