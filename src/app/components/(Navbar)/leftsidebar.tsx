"use client";

import { usePathname } from "next/navigation";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "/", label: "dashboard", icon: <RiDashboardHorizontalLine /> },
    { name: "/Dashboard/tasks", label: "task", icon: <FaTasks /> },
    { name: "employee", label: "employee", icon: <MdPeopleAlt /> },
    { name: "settings", label: "setting", icon: <IoSettingsOutline /> },
  ];

  return (
    <aside
      className={`
        fixed z-50 top-0 left-0 h-screen w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-24 bg-[#FBFAFF] shadow-md p-4 text-gray-700 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-20"}
        md:translate-x-0 md:relative
      `}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full w-8 h-8 xl:w-8 xl:h-8"
          />
          <h1 className="text-[14px] font-bold">OCTOM.</h1>
        </div>

        <nav className="flex-grow flex items-center justify-center mb-28">
          <ul className="flex flex-col items-center gap-5 md:gap-5 xl:gap-6 text-[16px] lg:text-[16px] xl:text-[19px] 2xl:text-[24px]">
            {menuItems.map((item) => (
              <Link href={item.name} key={item.name}>
                <div className="relative group">
                  <button
                    className={`p-[5px] lg:p-[8px] rounded-[10px] transition duration-200 transform ${
                      pathname === item.name
                        ? "bg-blue-500 text-white scale-105 xl:scale-95"
                        : "hover:text-blue-500 hover:scale-105"
                    }`}
                  >
                    {item.icon}
                  </button>
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap z-10">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="md:hidden flex justify-center mb-20">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </aside>
  );
}
