import axiosInstance from "./axiosInstance";

export const getPlants = async () => {
  const response = await axiosInstance.get("/api/plants");
  return response.data;
};

// export const createPlant = async () => {
//     const response = await axio
// }
