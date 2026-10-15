import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categoryService";
import { categoriesKeys } from "@/services/queryKeys";

export const useCategories = () =>
  useQuery({
    queryKey: categoriesKeys.lists(),
    queryFn: getCategories,
  });
