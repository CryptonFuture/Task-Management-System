import React from 'react'
import Dashboardlayout from '../Layouts/dashboardLayout'

export default function page() {
  return (
    <Dashboardlayout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb- text-black">Dashboard</h1>
        <p className="text-lg text-black">Welcome to the dashboard!</p>
      </div>
    </Dashboardlayout>
  )
}
