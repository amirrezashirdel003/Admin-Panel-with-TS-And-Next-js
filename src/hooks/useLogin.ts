"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { saveToken } from "@/lib/auth";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      saveToken(data.data.token);
      router.push("/dashboard");
    },
  });
};
