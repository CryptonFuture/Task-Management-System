import React from "react";
import { IoReorderThreeOutline, IoPeople } from "react-icons/io5";

export default function HeaderSection({ title }: { title: number }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 md:px-6 bg-white mt-4 py-3 rounded-[10px] w-full">
      <div className="flex gap-3 items-center flex-wrap">
        <IoReorderThreeOutline className="text-[28px] md:text-[35px]" />
        <IoPeople className="text-[24px] md:text-[28px] border p-[2px] rounded-[6px] border-gray-300 border-2" />
        <h1 className="text-gray-600 text-sm md:text-base">
          Total Employee:{" "}
          <span className="text-black font-bold">{title} persons</span>
        </h1>
      </div>
      <div className="flex gap-2 items-center w-full md:w-auto">
        <IoPeople className="text-[20px] md:text-[22px]" />
        <input
          type="text"
          placeholder="Search payroll or name"
          className="flex-1 md:flex-none placeholder:text-gray-600 py-1 px-3 w-full md:w-[250px] border rounded-[6px] border-2 border-[#E5E9F0] focus:outline-[#d4d7dc]"
        />
      </div>
    </div>
  );
}
