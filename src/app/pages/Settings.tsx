"use client";
import React, { useState } from "react";
import DashboardLayout from "../Layouts/dashboardLayout";
import Image from "next/image";

export default function Settings() {
  const [edit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Kilian",
    lastName: "James",
    email: "kilianjames@gmail.com",
    profilePicture: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    setIsEdit(false);
  };

  return (
    <DashboardLayout>
      <div className="w-full">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
          <Image
            width={300}
            height={300}
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA="
            alt="Banner"
          />

          <div className="absolute -bottom-20 left-5 sm:left-10 flex flex-wrap items-end space-x-4 pr-5 sm:pr-10 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)]">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <Image
                width={300}
                height={300}
                className="w-full h-full object-cover"
                src={
                  formData.profilePicture
                    ? URL.createObjectURL(formData.profilePicture)
                    : "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt="Profile"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-black mt-2 sm:mt-0">
              Settings
            </h2>

            {edit ? (
              <div className="ml-auto flex flex-wrap gap-1 md:gap-2 mt-2 sm:mt-0 max-w-xs sm:max-w-none">
                <button
                  onClick={handleCancel}
                  className="flex-1 min-w-[80px] px-1 py-1 md:px-6 md:py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 min-w-[80px] px-1 py-1 md:px-6 md:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="ml-auto flex flex-wrap mt-2 sm:mt-0 max-w-xs sm:max-w-none">
                <button
                  onClick={() => setIsEdit(true)}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-36 px-5 md:px-10 max-w-5xl">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-bold text-gray-700">
                First name
              </label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!edit}
                className={`w-full border rounded px-3 py-2 ${
                  edit
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-bold text-gray-700">
                Last name
              </label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!edit}
                className={`w-full border rounded px-3 py-2 ${
                  edit
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!edit}
                className={`w-full border rounded px-3 py-2 ${
                  edit
                    ? "border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            <div className="w-full max-w-md col-span-1 md:col-span-2 shadow-md rounded-lg overflow-hidden">
              <input
                type="file"
                id="profilePicture"
                className="hidden"
                accept=".jpg,.jpeg,.png,.gif,.svg"
                disabled={!edit}
                onChange={handleFileChange}
              />

              <label
                htmlFor="profilePicture"
                className={`flex flex-col items-center justify-center h-40 rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer ${
                  !edit ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-6-6h.01M6.938 4.938a10 10 0 0114.124 0"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-900 text-center">
                  Click to upload or drag and drop <br />
                  <span className="text-gray-500">
                    SVG, PNG, JPG or GIF (max, 800x400px)
                  </span>
                </p>
                {formData.profilePicture && (
                  <p className="mt-2 text-xs text-gray-900">
                    Selected file: {formData.profilePicture.name}
                  </p>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
