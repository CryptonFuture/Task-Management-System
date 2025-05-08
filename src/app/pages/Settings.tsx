"use client"
import React, { useState } from 'react';
import DashboardLayout from '../Layouts/dashboardLayout';

export default function Settings() {

    const [edit, setIsEdit] = useState(false);

    return (
        <DashboardLayout>
            <div className="w-full">
                {/* Banner */}
                <div className="relative w-full h-[200px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1629277152917-966a1f1705cd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9sb2dyYW18ZW58MHx8MHx8fDA="
                        alt="Banner"
                    />

                    <div className="absolute -bottom-20 left-10 flex items-end w-[calc(100%-2.5rem)] space-x-4 pr-10">
                        {/* Profile Picture */}
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img
                                className="w-full h-full object-cover"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Profile"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold text-black">Settings</h2>

                        {
                            edit ? (
                                <div className="ml-auto flex space-x-2">
                                    <button className="px-4 py-2 border rounded text-gray-700">Cancel</button>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                                </div>
                            ) : (
                                <div className="ml-auto flex space-x-2">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Edit</button>
                                </div>
                            )

                        }

                    </div>
                </div>

                <div className="mt-35 px-10 w-[59rem]">
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 text-sm font-bold text-gray-700">First name</label>
                            <input type="text" value="Kilian" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-bold text-gray-700">Last name</label>
                            <input type="text" value="James" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div className="col-span-2">
                            <label className="block mb-1 text-sm font-bold text-gray-700">Email</label>
                            <input type="email" value="kilianjames@gmail.com" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>

                        <div className="w-full max-w-md">
                            <input
                                type="file"
                                id="profilePicture"
                                className="hidden"
                                accept=".jpg,.jpeg,.png,.gif,.svg"
                            />

                            <label
                                htmlFor="profilePicture"
                                className="flex flex-col items-center justify-center h-40 rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
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
                                <p className="mt-4 text-sm text-gray-700 text-center">
                                    Click to upload or drag and drop <br />
                                    <span className="text-gray-500">
                                        SVG, PNG, JPG or GIF (max, 800x400px)
                                    </span>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout >
    );
}
