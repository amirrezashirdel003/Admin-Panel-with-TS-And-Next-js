"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { plantsKeys } from "@/services/queryKeys";
import {
  getPlants,
  getPlantBySlug,
  createPlant,
  updatePlant,
  deletePlant,
  uploadPlantImages,
} from "@/services/plantService";

export const usePlants = () => {
  return useQuery({
    queryKey: plantsKeys.lists(),
    queryFn: getPlants,
  });
};

export const usePlant = (slug: string) => {
  return useQuery({
    queryKey: plantsKeys.detail(slug),
    queryFn: () => getPlantBySlug(slug),
    enabled: !!slug,
  });
};

export const useCreatePlant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPlant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: plantsKeys.lists() });
    },
  });
};

export const useUpdatePlant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePlant,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: plantsKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: plantsKeys.detail(variables.slug),
      });
    },
  });
};

export const useDeletePlant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePlant,
    onSuccess: (_, slug) => {
      queryClient.invalidateQueries({ queryKey: plantsKeys.lists() });
      queryClient.invalidateQueries({ queryKey: plantsKeys.detail(slug) });
    },
  });
};

export const useUploadPlantImages = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadPlantImages,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: plantsKeys.detail(variables.slug),
      });
    },
  });
};
