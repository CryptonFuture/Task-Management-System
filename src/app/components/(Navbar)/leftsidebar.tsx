// components/LeftSidebar.js
export default function LeftSidebar() {
    return (
      <div className="bg-gray-800 text-white w-20 flex flex-col justify-between min-h-screen ">
        <div>
            <h1>Logo</h1>
        </div>

        <div>
        <ul>
          <li><a href="#" className=" py-1">Dashboard</a></li>
          <li><a href="#" className=" py-1">Settings</a></li>
          <li><a href="#" className=" py-1">Profile</a></li>
          <li><a href="#" className=" py-1">Profile</a></li>
        </ul></div>
        <div>
            <ul>
                <li><a href="#" className=" py-1">Logout</a></li>
            </ul>
        </div>

      </div>
    );
  }
  