import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  const isLogin = true;
  const [isOpenAvator, setIsOpenAvator] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenAvator(false);
      }
    };

    if (isOpenAvator) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenAvator]);

  return (
    <nav className="bg-white text-black px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

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

        <div className="relative hidden md:block" ref={dropdownRef}>
          {!isLogin && (
            <div className="flex gap-4">
              <button className="text-[17px] text-blue-600 hover:underline">
                Sign In
              </button>
              <button className="text-[17px] text-white bg-blue-600 hover:bg-blue-600 px-3 py-1 rounded">
                Sign Up
              </button>
            </div>
          )}
          {isLogin && (
            <>
              <div
                onClick={() => setIsOpenAvator(!isOpenAvator)}
                className={`flex items-center gap-2 cursor-pointer rounded-full p-1 transition`}
              >
                <Image
                  src="/navbar-images/avator.png"
                  alt="Profile"
                  width={35}
                  height={35}
                  className="rounded-full w-10 h-10  ring-blue-600"
                />
                <IoIosArrowDown className="text-[#5250F9] text-[21px] mt-1" />
              </div>

              {isOpenAvator && (
                <div className="absolute right-0 mt-2 w-40 bg-white  rounded-lg shadow-xs hover:overflow-hidden  shadow-black z-50">
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
      </div>
    </nav>
  );
}
