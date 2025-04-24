import React from 'react'
import LeftSidebar from '../components/(Navbar)/leftsidebar'
import Navbar from '../components/(Navbar)/navbar'

export default function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <div className="flex-1 h-[90vh] bg-gray-100 flex flex-col overflow-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
