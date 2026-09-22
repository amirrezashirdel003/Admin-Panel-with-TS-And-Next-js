import PagesTransition from "@/components/pagesTransition";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh flex ">
      <Sidebar />
      <main className="flex-1 py-8 px-8.5 ">
        <PagesTransition>{children}</PagesTransition>
      </main>
    </div>
  );
}
