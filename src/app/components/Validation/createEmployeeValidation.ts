import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  payrollId: z.string().min(1, "Payroll ID is required"),
  employeeImage: z.any().nullable(), 
  joinDate: z.string().min(1, "Join Date is required"),
  description: z.string().optional(),
});
