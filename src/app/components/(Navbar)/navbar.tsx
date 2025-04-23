import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md h-[10vh]">
      <div className="w-[full] mx-auto flex justify-between items-center h-full">

        {/* Left: Auth Links */}
         {/* Right: Placeholder for future items */}
         <div className="w-24 text-right text-sm text-gray-500">
          {/* Add profile icon, settings, or notifications here later */}
        </div>

        {/* Center: Search */}
        <div className="relative w-full max-w-sm mx-6">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pr-10 pl-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <FaSearch />
          </span>
        </div>

      

        <div className="flex items-end space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-500">Sign Up</a>
          <a href="#" className="hover:text-blue-500">Sign In</a>
        </div>
      </div>
    </nav>
  );
}
