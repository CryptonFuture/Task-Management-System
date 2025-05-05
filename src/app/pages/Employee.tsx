"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/dashboardLayout";
import { IoPeople } from "react-icons/io5";
import HeaderSection from "../components/Employee/HeaderSection";
import EmployeeCard from "../components/Employee/EmployeeCard";
import Pagination from "../components/Employee/Pagination";
import type { EmployeeCardProps } from "../components/Employee/EmployeeCard";

const employees: EmployeeCardProps[] = [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    department: "Finance",
    role: "Lead Accountant",
    payroll: "221d21A232d1",
    type: "Full-time",
    date: "Feb 23, 2025",
    imgSrc: "/one.png",
    status: "Active",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    department: "HR",
    role: "Manager",
    payroll: "HR-8821",
    type: "Full-time",
    date: "Jan 10, 2023",
    imgSrc: "/two.png",
    status: "Inactive",
  },
  {
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    department: "Marketing",
    role: "SEO Expert",
    payroll: "MK-1234",
    type: "Freelance",
    date: "Mar 5, 2024",
    imgSrc: "/three.png",
    status: "Active",
  },
  {
    name: "Ali Khan",
    email: "ali.khan@example.com",
    department: "IT",
    role: "Software Engineer",
    payroll: "IT-9876",
    type: "Full-time",
    date: "May 12, 2022",
    imgSrc: "/four.png",
    status: "Inactive",
  },
  {
    name: "Ayesha Malik",
    email: "ayesha.malik@example.com",
    department: "Sales",
    role: "Sales Executive",
    payroll: "SL-5643",
    type: "Part-time",
    date: "Dec 2, 2021",
    imgSrc: "/five.png",
    status: "Active",
  },
  {
    name: "Michael Scott",
    email: "michael.scott@dundermifflin.com",
    department: "Management",
    role: "Regional Manager",
    payroll: "MG-0001",
    type: "Full-time",
    date: "Apr 15, 2020",
    imgSrc: "/six.png",
    status: "Active",
  },
  {
    name: "Pam Beesly",
    email: "pam.beesly@dundermifflin.com",
    department: "Reception",
    role: "Receptionist",
    payroll: "RC-3322",
    type: "Part-time",
    date: "Jul 9, 2019",
    imgSrc: "/seven.png",
    status: "Inactive",
  },
  {
    name: "Jim Halpert",
    email: "jim.halpert@dundermifflin.com",
    department: "Sales",
    role: "Sales Rep",
    payroll: "SL-9876",
    type: "Full-time",
    date: "Nov 1, 2020",
    imgSrc: "/eight.png",
    status: "Active",
  },
  {
    name: "Dwight Schrute",
    email: "dwight.schrute@dundermifflin.com",
    department: "Sales",
    role: "Assistant to the Regional Manager",
    payroll: "SL-1234",
    type: "Internship",
    date: "Mar 14, 2018",
    imgSrc: "/one.png",
    status: "Inactive",
  },
  {
    name: "Sarah Smith",
    email: "sarah.smith",
    department: "Marketing",
    role: "SEO Expert",
    payroll: "MK-1234",
    type: "Freelance",
    date: "Mar 5, 2024",
    imgSrc: "/three.png",
    status: "Active",
  },
  {
    name: "Ali Khan",
    email: "ali.khan",
    department: "IT",
    role: "Software Engineer",
    payroll: "IT-9876",
    type: "Full-time",
    date: "May 12, 2022",
    imgSrc: "/four.png",
    status: "Inactive",
  },
  {
    name: "Ayesha Malik",
    email: "ayesha.malik",
    department: "Sales",
    role: "Sales Executive",
    payroll: "SL-5643",
    type: "Part-time",
    date: "Dec 2, 2021",
    imgSrc: "/five.png",
    status: "Active",
  },
  {
    name: "Michael Scott",
    email: "michael.scott",
    department: "Management",
    role: "Regional Manager",
    payroll: "MG-0001",
    type: "Full-time",
    date: "Apr 15, 2020",
    imgSrc: "/six.png",
    status: "Active",
  },
  {
    name: "Pam Beesly",
    email: "pam.beesly",
    department: "Reception",
    role: "Receptionist",
    payroll: "RC-3322",
    type: "Part-time",
    date: "Jul 9, 2019",
    imgSrc: "/seven.png",
    status: "Inactive",
  },
  {
    name: "Jim Halpert",
    email: "jim.halpert",
    department: "Sales",
    role: "Sales Rep",
    payroll: "SL-9876",
    type: "Full-time",
    date: "Nov 1, 2020",
    imgSrc: "/eight.png",
    status: "Active",
  },
  {
    name: "Dwight Schrute",
    email: "dwight.schrute",
    department: "Sales",
    role: "Assistant to the Regional Manager",
    payroll: "SL-1234",
    type: "Internship",
    date: "Mar 14, 2018",
    imgSrc: "/one.png",
    status: "Inactive",
  },
  {
    name: "Sarah Smith",
    email: "sarah.smith",
    department: "Marketing",
    role: "SEO Expert",
    payroll: "MK-1234",
    type: "Freelance",
    date: "Mar 5, 2024",
    imgSrc: "/three.png",
    status: "Active",
  },
  {
    name: "Ali Khan",
    email: "ali.khan",
    department: "IT",
    role: "Software Engineer",
    payroll: "IT-9876",
    type: "Full-time",
    date: "May 12, 2022",
    imgSrc: "/four.png",
    status: "Inactive",
  },
  {
    name: "Ayesha Malik",
    email: "ayesha.malik",
    department: "Sales",
    role: "Sales Executive",
    payroll: "SL-5643",
    type: "Part-time",
    date: "Dec 2, 2021",
    imgSrc: "/five.png",
    status: "Active",
  },
  {
    name: "Michael Scott",
    email: "michael.scott",
    department: "Management",
    role: "Regional Manager",
    payroll: "MG-0001",
    type: "Full-time",
    date: "Apr 15, 2020",
    imgSrc: "/six.png",
    status: "Active",
  },
  {
    name: "Pam Beesly",
    email: "pam.beesly",
    department: "Reception",
    role: "Receptionist",
    payroll: "RC-3322",
    type: "Part-time",
    date: "Jul 9, 2019",
    imgSrc: "/seven.png",
    status: "Inactive",
  },
  {
    name: "Jim Halpert",
    email: "jim.halpert",
    department: "Sales",
    role: "Sales Rep",
    payroll: "SL-9876",
    type: "Full-time",
    date: "Nov 1, 2020",
    imgSrc: "/eight.png",
    status: "Active",
  },
  {
    name: "Dwight Schrute",
    email: "dwight.schrute",
    department: "Sales",
    role: "Assistant to the Regional Manager",
    payroll: "SL-1234",
    type: "Internship",
    date: "Mar 14, 2018",
    imgSrc: "/one.png",
    status: "Inactive",
  },
  
];


export default function EmployeePage() {
  const [itemsPerPage, setitemPerPage] = useState(9);
  const [filter,setFilter] = useState("Active")

  useEffect(() => {
    const updateitemPerPage = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setitemPerPage(6);
      } else if (window.innerWidth < 1024) {
        setitemPerPage(8);
      } else {
        setitemPerPage(9);
      }}
    };

    updateitemPerPage();
    window.addEventListener("resize", updateitemPerPage);

    return () => window.removeEventListener("resize", updateitemPerPage);
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    if (employee.status === filter){
    return employee.status === filter;}
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <DashboardLayout>
      <div className="my-auto">
        <div>
          <span className="flex items-center gap-1 pr-2">
            <IoPeople className="text-[25px]" />
            <h1 className="text-[25px] font-extralight">Employee</h1>
          </span>
          <HeaderSection filter={filter} setFilter={setFilter} title={filteredEmployees.length} />
        </div>
        <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedEmployees.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          currentitem={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </DashboardLayout>
  );
}
