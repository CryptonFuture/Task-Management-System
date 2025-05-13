import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  payrollId: z.string().min(1, "Payroll ID is required"),
  employeeImage: z.any().nullable(), 
  employeeType: z.enum(["Full Time", "Part Time"]),
  department: z.enum(["Finance", "Marketing"]),
  designation: z.enum(["Front End Developer", "Content Writer"]),
  joinDate: z.string().min(1, "Join Date is required"),
  description: z.string().min(1, "Description is required"),
});
