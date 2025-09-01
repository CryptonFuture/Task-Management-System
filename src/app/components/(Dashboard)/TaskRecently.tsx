"use client";
import React, { useState, useMemo } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskRecently() {
  const [showTask, setShowTask] = useState(false);

  const tasks = useMemo(
    () => [
      { id: 1, name: "Design Homepage", date: "2025-04-27", assigned: "John", status: "In Progress" },
      { id: 2, name: "Build Backend", date: "2025-04-28", assigned: "Alice", status: "Completed" },
      { id: 3, name: "Test Website", date: "2025-04-29", assigned: "Bob", status: "In Progress" },
      { id: 4, name: "Deploy to Server", date: "2025-04-30", assigned: "Charlie", status: "Pending" },
      { id: 5, name: "Update UI", date: "2025-05-01", assigned: "David", status: "In Progress" },
      { id: 6, name: "Fix Bugs", date: "2025-05-02", assigned: "Eve", status: "Completed" },
    ],
    []
  );

  const toggleTaskList = () => setShowTask((prev) => !prev);

  return (
    <div className="fixed bottom-0 right-2 sm:right-4 md:right-8 lg:right-16 w-full max-w-xs sm:max-w-sm md:max-w-md z-50 font-sans px-2">
      <AnimatePresence>
        {showTask && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.68, -0.55, 0.27, 1.55] }}
            className="flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-200 shadow-xl rounded-t-xl p-4 max-h-[60vh] overflow-y-auto border-x border-t border-gray-200/50 dark:border-gray-700/50 scrollbar-thin scrollbar-thumb-gray-400/50 dark:scrollbar-thumb-gray-600/50 scrollbar-track-transparent"
            role="region"
            aria-label="Recent Tasks List"
          >
            {tasks.length === 0 ? (
              <div className="p-4 text-center text-gray-600 dark:text-gray-400">No tasks available</div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="mb-3 p-4 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:scale-[1.02] cursor-pointer transition-all duration-300"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => e.key === "Enter" && console.log(`Task ${task.name} clicked`)}
                  onClick={() => console.log(`Task ${task.name} clicked`)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-sm font-semibold hover:text-blue-500">{task.name}</h1>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{task.date}</span>
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      Assigned to: <span className="font-medium">{task.assigned}</span>
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        task.status === "Completed"
                          ? "bg-green-400 text-green-900"
                          : task.status === "In Progress"
                          ? "bg-amber-400 text-amber-900"
                          : "bg-gray-400 text-gray-900"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={toggleTaskList}
        onKeyDown={(e) => e.key === "Enter" && toggleTaskList()}
        className={`flex items-center justify-between ${
          showTask
            ? "bg-blue-500/90 backdrop-blur-md shadow-lg border-x border-t border-blue-500/50 dark:bg-blue-800/80 dark:border-blue-600/50"
            : "bg-blue-500 shadow-md dark:bg-blue-600"
        } text-white dark:text-gray-200 rounded-t-xl px-6 py-2 cursor-pointer hover:scale-100 hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 hover:text-white focus:outline-none`}
        role="button"
        tabIndex={0}
        aria-expanded={showTask}
        aria-label="Toggle Recent Tasks"
      >
        <h1 className="text-base font-semibold tracking-wide text-shadow-black text-shadow-xs hover:text-white">Recent Tasks</h1>
        <motion.div
          animate={{ rotate: showTask ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowUp className="text-2xl text-white hover:text-white" />
        </motion.div>
      </div>
    </div>
  );
}
