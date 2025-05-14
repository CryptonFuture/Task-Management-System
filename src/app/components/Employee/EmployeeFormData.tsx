
import React, { useState } from "react";
import { ImUpload2 } from "react-icons/im";
import { employeeSchema } from "../Validation/createEmployeeValidation";

export default function EmployeeFormData({onClose}:any) {
  const [formData, setFormData] = useState({
    name: "",
    payrollId: "",
    employeeImage: null,
    employeeType: "Full Time",
    department: "Finance",
    designation: "Front End Developer",
    joinDate: "",
    description: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const result = employeeSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: any = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("Valid data:", result.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-[14px]">
        <div>
          <label className="font-light text-black ml-1 mb-1 text-[17px]">
            Employee Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Employee Name"
            className={`w-full rounded-[5px] border p-2 placeholder:text-[16px] ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="employeeImage"
            className="text-black font-light ml-1 mb-1 text-[17px] block"
          >
            Upload Image
          </label>
          <div className="relative">
            <input
              type="file"
              id="employeeImage"
              name="employeeImage"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="w-full flex justify-between border-dashed border-2 border-gray-400 rounded-[6px] p-2 text-blue-500 bg-white pointer-events-none">
              Upload Picture Related to Project
              <ImUpload2 className="text-2xl text-black" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col">
            <label className="text-black">Employee Type</label>
            <select
              name="employeeType"
              value={formData.employeeType}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            {errors.employeeType && <p className="text-red-500 text-sm">{errors.employeeType}</p>}
          </div>

          <div className="w-1/2 flex flex-col">
            <label className="text-black">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col">
            <label className="text-black">Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="Front End Developer">Front End Developer</option>
              <option value="Content Writer">Content Writer</option>
            </select>
            {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
          </div>

          <div className="w-1/2 flex flex-col">
            <label className="text-black">Join Date</label>
            <input
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              type="date"
              className={`p-[6px] border ${errors.joinDate ? "border-red-500" : ""}`}
            />
            {errors.joinDate && <p className="text-red-500 text-sm">{errors.joinDate}</p>}
          </div>
        </div>

        <div>
          <label className="font-light text-black ml-1 mb-1 text-[17px]">
            Payroll ID
          </label>
          <input
            type="text"
            name="payrollId"
            value={formData.payrollId}
            onChange={handleChange}
            placeholder="Enter Payroll ID"
            className={`w-full rounded-[5px] border p-2 placeholder:text-[16px] ${errors.payrollId ? "border-red-500" : ""}`}
          />
          {errors.payrollId && <p className="text-red-500 text-sm">{errors.payrollId}</p>}
        </div>

        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please share your main reason ..."
            className={`p-2 border ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>


          <div className="flex justify-between  py-2 bg-white">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 cursor-pointer text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-blue-600 transition text-[12px] sm:text-[14px]"
            >
              Create Employee
            </button>
            <button
              className="bg-white border cursor-pointer text-gray-800 px-3 sm:px-6 py-1.5 sm:py-2 rounded transition text-[12px] sm:text-[14px]"
              onClick={onClose}
            >
              Close
            </button>
          </div>
   

      </form>
    </div>
  );
}
