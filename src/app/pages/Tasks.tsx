import React from 'react'
import TaskCard from '@/app/components/TaskCard/TaskCard'
import TaskCategories from '@/app/components/TaskCategories/TaskCategories'
import DashboardLayout from '@/app/Layouts/dashboardLayout'

export default function Tasks() {
  
  const taskData = {
    title: 'Backlog',
    imageSrc: 'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
    description: 'Create content for peceland App',
    date: 'Aug 20, 2021',
    users: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/45.jpg'
    ],
    progress: '0/8'
  }

  return (
    <DashboardLayout>
      <div className="w-[26rem]">
        <div className='flex flex-col gap-4'>
          <TaskCategories title="Backlog" />
          <TaskCard {...taskData} />
        </div>
      </div>
    </DashboardLayout>
  )
}
