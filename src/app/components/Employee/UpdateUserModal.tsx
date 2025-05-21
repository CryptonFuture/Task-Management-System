"use client";
import React, { useState, useEffect } from "react";
import { ImUpload2 } from "react-icons/im";
import { employeeSchema } from "../Validation/createEmployeeValidation";
import Image from "next/image";

type FormDataType = {
  name: string;
  email: string;
  payrollId: string;
  employeeImage: File[];
  employeeType: string;
  department: string;
  designation: string;
  joinDate: string;
  description: string;
  status: string;
  isActive: string;
};

type Props = {
  onClose: () => void;
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  payroll: string;
  date: string;
  type: string;
  imgSrc?: string;
  status?: string;
};

export default function EmployeeFormData({
  onClose,
  id,
  name,
  email,
  department,
  role,
  payroll,
  date,
  type,
  imgSrc,
  status,
}: Props) {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    payrollId: "",
    employeeImage: [],
    employeeType: "Full Time",
    department: "Finance",
    designation: "Front End Developer",
    joinDate: "",
    description: "",
    status: "Active",
    isActive: "No",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: name || "",
      email: email || "",
      payrollId: payroll || "",
      employeeType: type || "Full Time",
      department: department || "Finance",
      designation: role || "Front End Developer",
      joinDate: date || "",
      status: status || "Active",
      isActive: "No",
    }));
  }, [name, email, payroll, type, department, role, date, status]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        setFormData((prev) => ({
          ...prev,
          employeeImage: [...prev.employeeImage, ...Array.from(files)],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      employeeImage: prev.employeeImage.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = employeeSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    console.log("Submitted Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
      <div>
        <label className="text-black font-medium">Employee Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Employee Name"
          className={`w-full rounded border p-2 mt-1 placeholder:text-gray-400 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="font-light text-black ml-1 mb-1 text-[17px]">
          Employee Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className={`w-full rounded-[5px] border p-2 placeholder:text-[16px] ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label className="text-black font-medium">Upload Image</label>
        <div className="relative mt-1">
          <input
            type="file"
            name="employeeImage"
            onChange={handleChange}
            multiple
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          <div className="w-full flex justify-between items-center border-dashed border-2 border-gray-400 rounded p-2 text-blue-500 bg-white pointer-events-none">
            Upload Image
            <ImUpload2 className="text-2xl text-black" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {imgSrc && (
            <div className="relative w-[100px] h-[100px] border border-gray-300 rounded overflow-hidden">
              <Image
                src={imgSrc}
                width={100}
                height={100}
                alt="Employee"
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
          {formData.employeeImage.map((file, idx) => (
            <div
              key={idx}
              className="relative w-[100px] h-[100px] border border-gray-300 rounded overflow-hidden"
            >
              <Image
                width={100}
                height={100}
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full text-sm w-5 h-5 flex items-center justify-center shadow hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-black">Employee Type</label>
          <select
            name="employeeType"
            value={formData.employeeType}
            onChange={handleChange}
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="Full Time">Full Time</option>
            <option value="Part-time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="text-black">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Management">Management</option>
            <option value="Reception">Reception</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-black">Designation</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="Lead Accountant">Lead Accountant</option>
            <option value="Manager">Manager</option>
            <option value="SEO Expert">SEO Expert</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="Regional Manager">Regional Manager</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Sales Rep">Sales Rep</option>
            <option value="Assistant to the Regional Manager">
              Assistant to the Regional Manager
            </option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="text-black">Join Date</label>
          <input
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
            className={`p-2 border rounded w-full mt-1 ${
              errors.joinDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.joinDate && (
            <p className="text-red-500 text-xs mt-1">{errors.joinDate}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-black font-medium">Payroll ID</label>
        <input
          type="text"
          name="payrollId"
          value={formData.payrollId}
          onChange={handleChange}
          placeholder="Enter Payroll ID"
          className={`w-full border rounded p-2 mt-1 ${
            errors.payrollId ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.payrollId && (
          <p className="text-red-500 text-xs mt-1">{errors.payrollId}</p>
        )}
      </div>

      <div>
        <label className="text-black font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write some description..."
          rows={3}
          className="w-full border rounded p-2 mt-1"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-black font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="text-black font-medium">Is Active</label>
          <select
            name="isActive"
            value={formData.isActive}
            onChange={handleChange}
            className="w-full border p-2 mt-1 rounded"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between py-2 bg-white">
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-blue-600 transition text-[12px] sm:text-[14px]"
        >
          Update
        </button>
        <button
          type="button"
          className="bg-white border cursor-pointer text-gray-800 px-3 sm:px-6 py-1.5 sm:py-2 rounded transition text-[12px] sm:text-[14px]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
}
