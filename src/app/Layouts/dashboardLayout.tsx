"use client";

import React, { useState } from "react";
import Navbar from "../components/(Navbar)/navbar";
import LeftSidebar from "../components/(Navbar)/leftsidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="h-screen flex">
      <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar setIsOpen={setIsOpen} />
        <div className="flex-1 h-[calc(100vh-64px)] bg-gray-100 flex flex-col overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}