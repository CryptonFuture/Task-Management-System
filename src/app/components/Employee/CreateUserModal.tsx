"use client"
import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  create: string;
  children: any;
  onClose: () => void;
}) {

const ourSideModal = useRef<HTMLDivElement>(null)

useEffect(()=>{
  const outsideModal = (event:MouseEvent) => {
  if (ourSideModal.current && !ourSideModal.current.contains(event.target as Node)) {
  onClose();
}
  } 
  document.addEventListener("mousedown", outsideModal);
  return    document.addEventListener("mousedown", outsideModal);

},[onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div ref={ourSideModal} className="bg-white w-full max-w-[380px] md:max-w-[500px] xl:max-w-[510px] 2xl:max-w-[600px] rounded-xl shadow-lg flex flex-col overflow-hidden">
        <div className="bg-gray-100 flex justify-between px-4 py-3 sm:px-6 sm:py-4">
          <h1 className="text-[14px] sm:text-[16px] font-sans text-gray-800">
            {title}
          </h1>
          <IoClose
            onClick={onClose}
            className="text-gray-600 size-5 sm:size-6 cursor-pointer"
          />
        </div>

        <div className="px-4 py-3 sm:px-6 sm:py-4 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
          {children}
        </div>
        <div className="pb-4 sm:pb-6 bg-gray-100 border-t border-gray-200"></div>
      </div>
    </div>
  );
}
