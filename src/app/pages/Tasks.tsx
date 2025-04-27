'use client';

import React, { useState } from 'react';
import TaskCard from '@/app/components/TaskCard/TaskCard';
import TaskCategories from '@/app/components/TaskCategories/TaskCategories';
import DashboardLayout from '@/app/Layouts/dashboardLayout';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from '@hello-pangea/dnd';

// 1. Define Types
type Task = {
    id: string;
    imageSrc: string;
    description: string;
    date: string;
    users: string[];
    progress: string;
};

type Column = {
    title: string;
    tasks: Task[];
};

type Columns = {
    [key in 'column1' | 'column2']: Column;
};

export default function Tasks() {

    const [columns, setColumns] = useState<Columns>({
        column1: {
            title: 'Backlog',
            tasks: [
                {
                    id: '1',
                    imageSrc:
                        'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
                    description: 'Create content for peceland App',
                    date: 'Aug 20, 2021',
                    users: [
                        'https://randomuser.me/api/portraits/men/32.jpg',
                        'https://randomuser.me/api/portraits/women/44.jpg',
                        'https://randomuser.me/api/portraits/men/45.jpg',
                    ],
                    progress: '0/8',
                },
                {
                    id: '2',
                    imageSrc:
                        'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
                    description: 'Create content for peceland App',
                    date: 'Aug 20, 2021',
                    users: [
                        'https://randomuser.me/api/portraits/men/32.jpg',
                        'https://randomuser.me/api/portraits/women/44.jpg',
                        'https://randomuser.me/api/portraits/men/45.jpg',
                    ],
                    progress: '0/8',
                },
                {
                    id: '3',
                    imageSrc:
                        'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
                    description: 'Create content for peceland App',
                    date: 'Aug 20, 2021',
                    users: [
                        'https://randomuser.me/api/portraits/men/32.jpg',
                        'https://randomuser.me/api/portraits/women/44.jpg',
                        'https://randomuser.me/api/portraits/men/45.jpg',
                    ],
                    progress: '0/8',
                },
            ],
        },
        column2: {
            title: 'In Progress',
            tasks: [{
                id: '4',
                imageSrc:
                    'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
                description: 'Create content for peceland App',
                date: 'Aug 20, 2021',
                users: [
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/45.jpg',
                ],
                progress: '0/8',
            },
            {
                id: '5',
                imageSrc:
                    'https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA=',
                description: 'Create content for peceland App',
                date: 'Aug 20, 2021',
                users: [
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/45.jpg',
                ],
                progress: '0/8',
            },],
        },
    });

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceId = source.droppableId as keyof Columns;
        const destId = destination.droppableId as keyof Columns;

        const sourceCol = { ...columns[sourceId] };
        const destCol = { ...columns[destId] };
        const [movedTask] = sourceCol.tasks.splice(source.index, 1);

        if (sourceId === destId) {
            sourceCol.tasks.splice(destination.index, 0, movedTask);
            setColumns({
                ...columns,
                [sourceId]: sourceCol,
            });
        } else {
            destCol.tasks.splice(destination.index, 0, movedTask);
            setColumns({
                ...columns,
                [sourceId]: sourceCol,
                [destId]: destCol,
            });
        }
    };

    return (
        <DashboardLayout>
            <div className="h-full overflow-x-auto">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="flex h-full gap-4 px-4">
                        {Object.entries(columns).map(([columnId, columnData]) => (
                            <div
                                key={columnId}
                                className="flex flex-col gap-3 min-w-[250px] max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[350px] lg:max-w-[350px]"
                            >
                                <TaskCategories title={columnData.title} />
                                <Droppable droppableId={columnId}>
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="overflow-y-auto flex flex-col gap-4 max-h-[calc(100vh-12rem)] pb-3 pr-2"
                                        >
                                            {columnData.tasks.map((task, taskIndex) => (
                                                <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <TaskCard title={columnData.title} {...task} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        ))}
                    </div>
                </DragDropContext>
            </div>
        </DashboardLayout>
    );
}
