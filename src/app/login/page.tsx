"use client";
import Button from "@/components/button";
import { isAuthenticated, saveToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = React.useState(initialState);

  const navigate = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const utf8ToBase64 = (str: string) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate.push("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fakePayload = { username: formValues.email };
    const fakeToken = `header.${utf8ToBase64(JSON.stringify(fakePayload))}.signature`;

    saveToken(fakeToken);
    navigate.push("/dashboard");
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
          onSubmit={handleSubmit}
          className="bg-bgbox py-8.25 px-6.5 rounded-[22px] cardShadow border-border border w-100 "
        >
          <div className="font-bold mb-5 text-[16px]">ورود به حساب</div>
          <label className="font-semibold text-[13px] mb-1.75 block text-textcolor ">
            ایمیل
          </label>
          <input
            type="email"
            placeholder="admin@golkhane.ir"
            className="border border-border  w-full py-3 px-3.5 bg-bginput mb-4 rounded-xl text-[14px] focus:border focus:border-black "
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <label className="font-semibold text-[13px] mb-1.75 block text-textcolor ">
            رمز عبور
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-border w-full py-3 px-3.5 bg-bginput  rounded-xl text-[14px] focus:border focus:border-black "
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            Component="button"
            className="flex w-full items-center justify-center mt-5.5 p-3.25 text-[15px] text-center"
          >
            ورود
          </Button>
          <div className="mt-4 text-[12px] text-center text-accent ">
            هر ایمیل و رمزی برای نمایش کار می‌کند
          </div>
        </form>
      </motion.div>
    </div>
  );
}
