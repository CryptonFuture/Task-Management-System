"use client";

import React, { useState } from "react";
import Navbar from "../components/(Navbar)/navbar";
import LeftSidebar from "../components/(Navbar)/leftsidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setIsOpen={setIsOpen} />

      <div className="flex">
        <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="w-full mt-4 md:mt-0 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
