// import { CardProps } from "@/app/types";
import Image from "next/image";

export default function Card({ Link, title, value, difference }: any) {
  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm text-gray-500">{title}</h2>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Larger Image on the left */}
        <div className="w-36 h-24 relative flex-shrink-0">
          <Image src={Link} alt={title} fill className="object-contain" />
        </div>

        {/* Text on the right side of the image */}
        <p className="text-sm text-green-600">
          {difference} more <br /> from last week
        </p>
      </div>
    </div>
  );
}
