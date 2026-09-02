import axiosInstance from "./axiosInstance";

type Credentials = {
  email: string;
  password: string;
};

export const login = async (credentials: Credentials) => {
  const response = await axiosInstance.post("/api/admin/login", credentials);
  return response.data;
};

export const getMe = async () => {
  const response = await axiosInstance.get("/api/admin/me");
  return response.data;
};
