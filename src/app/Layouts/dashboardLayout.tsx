import React from 'react'
import LeftSidebar from '../components/(Navbar)/leftsidebar'
import Navbar from '../components/(Navbar)/navbar'

export default function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className='flex h-[90vh]'>
        <LeftSidebar />
        <div className='w-full bg-gray-100 flex flex-col p-[46]'>
          {children}
        </div>
      </div>
    </div>
  )
}
