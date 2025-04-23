import React from 'react'

interface TaskCardProps {
  title: string
  imageSrc: string
  description: string
  date: string
  users: string[]
  progress: string
}

export default function TaskCard({
  title,
  imageSrc,
  description,
  date,
  users,
  progress
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      <div className="mb-2">
        <span className="text-xs font-semibold text-white bg-blue-600 rounded-md px-2 py-1">{title}</span>
      </div>

      <div className="w-full h-36 rounded-lg overflow-hidden mb-4">
        <img className="w-full h-full object-cover" src={imageSrc} alt="Task" />
      </div>

      <h2 className="text-md font-semibold text-gray-900">Create styleguide foundation</h2>
      <p className="text-sm text-gray-500 mb-3">{description}</p>

      <div className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-md mb-4 text-gray-700">
        {date}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {users.map((user, index) => (
            <img key={index} className="w-8 h-8 rounded-full border-2 border-white" src={user} alt={`User ${index + 1}`} />
          ))}
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {progress}
        </div>
      </div>
    </div>
  )
}
