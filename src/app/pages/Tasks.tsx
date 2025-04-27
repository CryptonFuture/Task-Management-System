import React from 'react'
import TaskCard from '@/app/components/TaskCard/TaskCard'
import TaskCategories from '@/app/Dashboard/tasks/TaskCategories/TaskCategories'
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
            <div className="h-full overflow-x-auto">
                <div className="flex h-full gap-4 px-4">
                    {[2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 min-w-[250px] max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[350px] lg:max-w-[350px]"
                        >
                            <TaskCategories title="Backlog" />
                            <div className="overflow-y-auto flex flex-col gap-4 max-h-[calc(100vh-12rem)] pb-3 pr-2">
                                <TaskCard {...taskData} />
                                <TaskCard {...taskData} />
                                <TaskCard {...taskData} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>

    );

}