"use client";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  currentitem: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  currentitem,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-4 gap-4 w-full text-center sm:text-left">
      <div className="text-sm sm:text-base">
        Showing {(currentPage - 1) * currentitem + 1} to{" "}
        {Math.min(currentPage * currentitem, totalPages * currentitem)} of{" "}
        {totalPages * currentitem}
      </div>
      <ul className="flex flex-wrap justify-center gap-1 bg-white shadow overflow-hidden">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer px-3 py-1 rounded text-sm  ${
              page === currentPage
                ? "border border-amber-500 text-black font-semibold"
                : "bg-white "
            }`}
          >
            {page}
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-1 bg-white text-black disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <MdKeyboardArrowLeft className="text-lg" />
          Back
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-1 bg-white text-black disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Next
          <MdKeyboardArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
