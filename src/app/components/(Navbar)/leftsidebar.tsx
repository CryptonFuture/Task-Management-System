import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import Image from "next/image";

export default function LeftSidebar() {
  return (
    <div className="bg-[#FBFAFF] text-gray-700 w-20 h-[90vh] flex flex-col gap-36 p py-4 shadow-md">
      {/* Logo */}
      <div className="flex flex-col items-center space-y-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-xs font-bold">T $ M</h1>
      </div>

      {/* Menu Icons */}
      <ul className="flex flex-col items-center space-y-8 text-2xl">
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            <RiDashboardHorizontalLine />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            <FaTasks />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            <MdPeopleAlt />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition">
            <IoSettingsOutline />
          </a>
        </li>
      </ul>
    </div>
  );
}
