
// "use client";

// import { useState } from "react";
// import { RiDashboardHorizontalLine } from "react-icons/ri";
// import { FaTasks } from "react-icons/fa";
// import { IoSettingsOutline, IoClose } from "react-icons/io5";
// import { MdPeopleAlt } from "react-icons/md";
// import Image from "next/image";

// export default function LeftSidebar({
//   isOpen,
//   setIsOpen,
// }: {
//   isOpen: boolean;
//   setIsOpen: (value: boolean) => void;
// }) {
//   const [active, setActive] = useState("dashboard");

//   const menuItems = [
//     { name: "dashboard", icon: <RiDashboardHorizontalLine /> },
//     { name: "tasks", icon: <FaTasks /> },
//     { name: "users", icon: <MdPeopleAlt /> },
//     { name: "settings", icon: <IoSettingsOutline /> },
//   ];

//   return (
//     <>
//       {/* Overlay for mobile when sidebar open */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//         />
//       )}

//       <aside
//         className={`
//           fixed z-50 top-0 left-0 h-screen w-20 md:w-20 lg:w-24 xl:w-28 bg-[#FBFAFF] shadow-md p-4 text-gray-700 transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-20"}
//           md:translate-x-0 md:relative
//         `}
//       >
//         <div className="flex flex-col h-full justify-between">
//           {/* Logo */}
//           <div className="flex flex-col items-center gap-2">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <h1 className="text-xs font-bold">T $ M</h1>
//           </div>

//           {/* Navigation Icons */}
//           <nav className="flex-grow flex items-center justify-center mb-28">
//             <ul className="flex flex-col items-center gap-6 text-xl lg:text-2xl xl:text-3xl">
//               {menuItems.map((item) => (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => setActive(item.name)}
//                     className={`p-2 lg:p-3 rounded-2xl transition duration-200 ${
//                       active === item.name
//                         ? "bg-blue-500 text-white"
//                         : "hover:text-blue-500"
//                     }`}
//                   >
//                     {item.icon}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Close Button - only mobile */}
//           <div className="md:hidden flex justify-center mb-4">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-2xl text-gray-500 hover:text-red-500"
//             >
//               <IoClose />
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";

import { useState } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline, IoClose } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import Image from "next/image";

export default function LeftSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "dashboard", icon: <RiDashboardHorizontalLine /> },
    { name: "tasks", icon: <FaTasks /> },
    { name: "users", icon: <MdPeopleAlt /> },
    { name: "settings", icon: <IoSettingsOutline /> },
  ];

  return (
    <>
      {/* Removed overlay */}

      <aside
        className={`
          fixed z-50 top-0 left-0 h-screen w-20 md:w-20 lg:w-24 xl:w-28 bg-[#FBFAFF] shadow-md p-4 text-gray-700 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-20"}
          md:translate-x-0 md:relative
        `}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xs font-bold">T $ M</h1>
          </div>

          {/* Navigation Icons */}
          <nav className="flex-grow flex items-center justify-center mb-28">
            <ul className="flex flex-col items-center gap-6 text-xl lg:text-2xl xl:text-3xl">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActive(item.name)}
                    className={`p-2 lg:p-3 rounded-2xl transition duration-200 ${
                      active === item.name
                        ? "bg-blue-500 text-white"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {item.icon}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Close Button - only on mobile */}
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
    </>
  );
}
