import React from 'react'
import LeftSidebar from '../components/(Navbar)/leftsidebar'
import Navbar from '../components/(Navbar)/navbar'

export default function Dashboardlayout({children}: {children: React.ReactNode}) {
  return (
    <div>
                <div className="flex min-h-screen">
                  <LeftSidebar />
                  <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div className="flex-1 ">
                      {children}
                    </div>
                  </div>
                </div>

    </div>
  )
}
