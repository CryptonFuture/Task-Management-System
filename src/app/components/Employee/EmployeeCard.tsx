import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

type EmploymentType = "Full-time" | "Freelance" | "Part-time" | "Internship";

export interface EmployeeCardProps {
  name: string;
  email: string;
  department: string;
  role: string;
  payroll: string;
  date: string;
  imgSrc?: string;
  type: EmploymentType;
  status:string;
}

const typeColors = {
  "Full-time": "bg-[#6643FF]",
  "Part-time": "bg-[#E56C1C]",
  Freelance: "bg-[#119E63]",
  Internship: "bg-[#EF4A6E]",
};

export default function EmployeeCard({
  name,
  email,
  department,
  role,
  payroll,
  date,
  type,
  imgSrc,
  status
}: EmployeeCardProps) {
  return (
    <div className="w-full flex flex-col justify-between bg-white rounded-lg shadow p-3 text-xs">
      <div className="flex justify-between items-center mb-2">
        <button
          className={`text-white text-[10px] px-2 py-[2px] rounded ${typeColors[type]}`}
        >
          {type}  
        </button>
        <BsThreeDotsVertical className="text-gray-400 text-lg" />
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-200 pb-2">
        <div className="flex justify-between items-center gap-2">
        <div className="flex ">  <Image
            className="rounded-full object-cover"
            src={imgSrc || "/logo.png"}
            width={30}
            height={30}
            alt={name}
          />
          <span>
            <h1 className="font-semibold text-gray-800">{name}</h1>
            <p className="text-[10px] text-gray-500">{email}</p></span>
          </div>
          <h1
  className={`inline-block px-2 py-1 text mt-1-xs font-semibold text-white rounded-[3px] ${
    status === "Active" ? "bg-green-500" : "bg-red-500"
  }`}
>
  {status}
</h1>

        </div>
        <div className="flex flex-wrap gap-1">
          <span className="flex items-center gap-1 border border-gray-300 px-2 py-[2px] rounded text-gray-700">
            <GoDotFill className="text-[8px] text-amber-600" /> {department}
          </span>
          <span className="bg-gray-100 text-gray-700 px-2 py-[2px] rounded">
            {role}
          </span>
        </div>
        
      </div>
      <div className="mt-2 space-y-1 text-[11px]">
        <div className="flex justify-between text-gray-600">
          <span>Payroll:</span>
          <span className="font-medium text-gray-800">{payroll}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Join Date:</span>
          <span className="font-medium text-gray-800">{date}</span>
        </div>
      </div>
    </div>
  );
}
