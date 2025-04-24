"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function AvatarDropdown() {
  const isLogin = true;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative hidden md:block">
      {!isLogin && (
        <div className="flex gap-4">
          <button className="text-[17px] text-blue-600 hover:underline">
            Sign In
          </button>
          <button className="text-[17px] text-white bg-blue-600 hover:bg-blue-600 px-3 py-1 rounded ">
            Sign Up
          </button>
        </div>
      )}
      {isLogin && (
        <>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer rounded-full p-1transition"
          >
            <Image
              src="/"
              alt="Profile"
              width={35}
              height={35}
              className="rounded-full w-11 h-10  ring-2 ring-blue-600"
            />
            <IoIosArrowDown className="text-[#000000] text-[21px]" />
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-blue-50 text-sm text-red-500">
                Logout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
