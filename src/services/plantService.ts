import type { PlantFormValues } from "@/schemas/plantSchema";
import axiosInstance from "./axiosInstance";
import { PlantPayload } from "@/lib/plantMappers";

export const getPlants = async () => {
  const response = await axiosInstance.get("/api/plants");
  return response.data;
};

export const createPlant = async (plantData: PlantPayload) => {
  const response = await axiosInstance.post("/api/plants", plantData);
  return response.data;
};
export const deletePlant = async (slug: string) => {
  const response = await axiosInstance.delete(`/api/plants/${slug}`);
  return response.data;
};

export const getPlantBySlug = async (slug: string) => {
  const response = await axiosInstance.get(`/api/plants/${slug}`);
  return response.data;
};

export const updatePlant = async ({
  slug,
  plantData,
}: {
  slug: string;
  plantData: PlantPayload;
}) => {
  const response = await axiosInstance.put(`/api/plants/${slug}`, plantData);
  return response.data;
};

export const uploadPlantImages = async ({
  slug,
  files,
}: {
  slug: string;
  files: File[];
}) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await axiosInstance.post(
    `/api/plants/${slug}/images`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
};
