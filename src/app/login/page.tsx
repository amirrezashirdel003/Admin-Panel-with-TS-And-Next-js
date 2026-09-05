"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Button from "@/components/customElements/button";
import { useLogin } from "@/hooks/useLogin";
import type { Credentials } from "@/services/authService";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const { mutate, isPending, isError, error } = useLogin();

  const onSubmit = (data: Credentials) => {
    mutate(data);
  };

  return (
    <div className="flex min-h-svh h-svh gradientLogin justify-center items-center p-6 ">
      <motion.div
        initial={{ y: 45, opacity: 0, visibility: "hidden" }}
        animate={{ y: 5, opacity: 1, visibility: "visible" }}
        transition={{ duration: 0.3 }}
        className="flex-col flex items-center justify-center w-full max-w-100 m-auto  "
      >
        <div className="flex flex-col items-center justify-center mb-6.5 gap-3.5 w-full">
          <div className="flex size-16.5 bg-primary items-center justify-center rounded-[20px] logoShadow ">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f3efe2"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 4 13c5 0 7 3 7 7Z"></path>
              <path d="M11 20c0-6 3-10 9-10 0 6-3 10-9 10Z"></path>
              <path d="M11 20v-8"></path>
            </svg>
          </div>
          <div className="text-center ">
            <div className="text-[22px] font-bold ">
              <span>ساکولنت</span>
            </div>
            <p className="text-secondary mt-0.5 text-[13px]">
              پنل مدیریت گیاهان و مطالب
            </p>
          </div>
        </div>

        <form
          dir="rtl"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-bgbox py-8.25 px-6.5 rounded-[22px] cardShadow border-border border w-100 "
        >
          <div className="font-bold mb-5 text-[16px]">ورود به حساب</div>

          <label className="font-semibold text-[13px] mb-1.75 block text-textcolor ">
            ایمیل
          </label>
          <input
            type="email"
            placeholder="admin@golkhane.ir"
            className="border border-border  w-full py-3 px-3.5 bg-bginput mb-1 rounded-xl text-[14px] focus:border focus:border-black "
            {...register("email", {
              required: "ایمیل الزامی است",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "فرمت ایمیل معتبر نیست",
              },
            })}
          />
          {errors.email && (
            <p className="text-exit text-[12px] mb-3">{errors.email.message}</p>
          )}

          <label className="font-semibold text-[13px] mb-1.75 block text-textcolor ">
            رمز عبور
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-border w-full py-3 px-3.5 bg-bginput  rounded-xl text-[14px] focus:border focus:border-black "
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 6,
                message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
              },
            })}
          />
          {errors.password && (
            <p className="text-exit text-[12px] mt-1.25">
              {errors.password.message}
            </p>
          )}

          <Button
            type="submit"
            Component="button"
            disabled={isPending}
            className="flex w-full items-center justify-center mt-5.5 p-3.25 text-[15px] text-center disabled:opacity-60"
          >
            {isPending ? "در حال ورود..." : "ورود"}
          </Button>

          {isError && (
            <div className="mt-4 text-[12px] text-center text-exit">
              {(error as Error)?.message || "ایمیل یا رمز عبور اشتباه است"}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
