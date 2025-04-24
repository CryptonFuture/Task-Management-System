// "use client";

// import { CiSearch } from "react-icons/ci";
// import { GiHamburgerMenu } from "react-icons/gi";
// import AvatarDropdown from "./avator";

// export default function Navbar({
//   setIsOpen,
// }: {
//   setIsOpen: (value: boolean) => void;
// }) {
//   return (
//     <nav className="bg-white text-black px-6 py-3 shadow-md">
//       <div className="flex justify-between items-center">
//         {/* Hamburger - only on mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(true)}>
//             <GiHamburgerMenu className="text-2xl" />
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="relative w-full max-w-80 px-4 mx-auto">
//           <input
//             type="text"
//             placeholder="Search anything..."
//             className="w-full pl-4 pr-10 py-3 rounded-[10px] bg-[#F3F7FA] placeholder:text-gray-500 text-sm outline-gray-300"
//           />
//           <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#94A2BC] text-[25px]">
//             <CiSearch />
//           </span>
//         </div>

//         {/* Avatar */}
//         <AvatarDropdown />
//       </div>
//     </nav>
//   );
// }
"use client";

import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import AvatarDropdown from "./avator";

export default function Navbar({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <nav className="bg-white text-black px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Hamburger only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative w-full max-w-80 px-4 mx-auto">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-4 pr-10 py-3 rounded-[10px] bg-[#F3F7FA] placeholder:text-gray-500 text-sm outline-gray-300"
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#94A2BC] text-[25px]">
            <CiSearch />
          </span>
        </div>

        {/* Avatar */}
        <AvatarDropdown />
      </div>
    </nav>
  );
}
