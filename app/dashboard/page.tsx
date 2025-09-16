"use client";

import React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import data from "./data/data.json";
import { useUserSession } from "@/hooks/use-session";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const user = useUserSession();
  const session = user?.session;
  if (!session) redirect("/");
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
}
