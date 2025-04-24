"use client";
import React from "react";
import DashboardLayout from "@/app/Layouts/dashboardLayout";
import Card from "@/app/components/(Dashboard)/Card";

export default function page() {
  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mx-4 md:mx-10 py-10">
          <Card
            title="New Task"
            value={10}
            difference="+10"
            Link="/BlueLine.png"
          />
          <Card
            title="Task Completed"
            value={8}
            difference="+10"
            Link="/BlueLine.png"
          />
          <Card
            title="Project Done"
            value={10}
            difference="+8"
            Link="/RedLine.png"
          />
          <Card
            title="In Progress"
            value={10}
            difference="+6"
            Link="/RedLine.png"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
