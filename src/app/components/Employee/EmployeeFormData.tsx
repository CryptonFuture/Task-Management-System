import React, { useState } from "react";
import { ImUpload2 } from "react-icons/im";
import { employeeSchema } from "../Validation/createEmployeeValidation";

type FormDataType = {
  name: string;
  payrollId: string;
  employeeImage: File[];
  employeeType: string;
  department: string;
  designation: string;
  joinDate: string;
  description: string;
};

export default function EmployeeFormData({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    payrollId: "",
    employeeImage: [],
    employeeType: "Full Time",
    department: "Finance",
    designation: "Front End Developer",
    joinDate: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      const files = fileInput.files;
      if (files) {
        const selectedFiles = Array.from(files);
        setFormData((prev) => ({
          ...prev,
          [name]: [...prev.employeeImage, ...selectedFiles],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      employeeImage: prev.employeeImage.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = employeeSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onClose();
    console.log("Valid data:", result.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-[14px]">

        <div>
          <label className="font-light text-black ml-1 mb-1 text-[17px]">Employee Name</label>
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
          <label htmlFor="employeeImage" className="text-black font-light ml-1 mb-1 text-[17px] block">
            Upload Image
          </label>
          <div className="relative">
            <input
              type="file"
              id="employeeImage"
              name="employeeImage"
              onChange={handleChange}
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="w-full flex justify-between border-dashed border-2 border-gray-400 rounded-[6px] p-2 text-blue-500 bg-white pointer-events-none">
              Upload Image
              <ImUpload2 className="text-2xl text-black" />
            </div>
          </div>
        </div>


        {formData.employeeImage.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.employeeImage.map((image, index) => (
              <div key={index} className="relative w-[80px] h-[80px]">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  onClick={() => handleRemoveImage(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}


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
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              className={`p-[6px] border ${errors.joinDate ? "border-red-500" : ""}`}
            />
            {errors.joinDate && <p className="text-red-500 text-sm">{errors.joinDate}</p>}
          </div>
        </div>


        <div>
          <label className="font-light text-black ml-1 mb-1 text-[17px]">Payroll ID</label>
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
          <label className="text-black">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please share your main reason ..."
            className={`p-2 border ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="flex justify-between py-2 bg-white">
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-blue-600 transition text-[12px] sm:text-[14px]"
          >
            Create Employee
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
    </div>
  );
}
