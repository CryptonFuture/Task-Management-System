import React from 'react';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';

interface TaskCategoriesProps {
  title: string;
}

const TaskCategories: React.FC<TaskCategoriesProps> = ({ title }) => {
  return (
    <div className="w-full">
      <div className="bg-white px-4 py-4 rounded-lg shadow-sm flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-md font-bold text-gray-900">{title}</h2>
        </div>

        <div className="flex gap-5">
          <div className="bg-indigo-100 hover:bg-indigo-200 p-1 rounded-md">
            <FaEllipsisH className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="bg-indigo-100 hover:bg-indigo-200 p-1 rounded-md">
            <FaPlus className="w-4 h-4 text-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCategories;
