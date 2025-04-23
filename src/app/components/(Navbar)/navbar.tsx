import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-5 shadow-md">
      <div className="flex justify-between items-center">
        
        {/* Right - Empty */}
        <div className="w-24"></div>

        {/* Center - Smaller Search Input */}
        <div className="relative w-full max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pr-10 pl-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <FaSearch />
          </span>
        </div>

        {/* Left - Sign Up / Sign In */}
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a href="#" className="hover:text-blue-500">Sign Up</a>
          <a href="#" className="hover:text-blue-500">Sign In</a>
        </div>
      </div>
    </nav>
  );
}
