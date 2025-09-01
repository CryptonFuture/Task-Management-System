"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const dailyData = [
  { name: "Mon", completed: 40, pending: 20 },
  { name: "Tue", completed: 60, pending: 30 },
  { name: "Wed", completed: 80, pending: 50 },
  { name: "Thu", completed: 70, pending: 40 },
  { name: "Fri", completed: 90, pending: 20 },
  { name: "Sat", completed: 100, pending: 10 },
  { name: "Sun", completed: 70, pending: 30 },
];

const weeklyData = [
  { name: "Week 1", completed: 300, pending: 150 },
  { name: "Week 2", completed: 400, pending: 100 },
  { name: "Week 3", completed: 350, pending: 90 },
  { name: "Week 4", completed: 380, pending: 120 },
];

const monthlyData = [
  { name: "May", completed: 90, pending: 50 },
  { name: "Jun", completed: 200, pending: 120 },
  { name: "Jul", completed: 100, pending: 220 },
  { name: "Aug", completed: 400, pending: 300 },
  { name: "Sep", completed: 250, pending: 190 },
  { name: "Oct", completed: 220, pending: 210 },
  { name: "Nov", completed: 80, pending: 70 },
  { name: "Dec", completed: 120, pending: 230 },
  { name: "Jan", completed: 170, pending: 290 },
  { name: "Feb", completed: 320, pending: 350 },
  { name: "Mar", completed: 260, pending: 250 },
  { name: "Apr", completed: 100, pending: 120 },
];

const Chart = () => {
  const [selectedTab, setSelectedTab] = useState<
    "daily" | "weekly" | "monthly"
  >("monthly");

  const getData = () => {
    switch (selectedTab) {
      case "daily":
        return dailyData;
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      default:
        return monthlyData;
    }
  };

  const tabs = ["daily", "weekly", "monthly"];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full  mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-xl font-bold text-gray-800">Task Done</h2>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as any)}
              className={`capitalize font-medium ${
                selectedTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={
          typeof window !== "undefined" && window.innerWidth < 640 ? 180 : 250
        }
      >
        <LineChart data={getData()}>
          <defs>
            <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6a5acd" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#6a5acd" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e90ff" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1e90ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="completed"
            stroke="#6a5acd"
            fill="url(#colorCompleted)"
          />
          <Area
            type="monotone"
            dataKey="pending"
            stroke="#1e90ff"
            fill="url(#colorPending)"
          />

          <Line
            type="monotone"
            dataKey="completed"
            stroke="#6a5acd"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#1e90ff"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
