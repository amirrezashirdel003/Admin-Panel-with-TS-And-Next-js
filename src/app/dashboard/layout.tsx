/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import PagesTransition from "@/components/pagesTransition";
import Sidebar from "@/components/sidebar";
import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setIsChecking(false);
    }
  }, [router]);
  if (isChecking) {
    return null;
  }
  return (
    <div className="min-h-svh flex ">
      <Sidebar />
      <main className="flex-1 py-8 px-8.5 ">
        <PagesTransition>{children}</PagesTransition>
      </main>
    </div>
  );
}
