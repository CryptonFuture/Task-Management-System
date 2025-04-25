import Image from "next/image";

export default function Card({ Link, title, value, difference }: any) {
  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm md:text-base text-gray-500">{title}</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          {value}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative w-22 sm:h-30 sm:w-36 h-22 md:w-38 md:h-24">
          <Image src={Link} alt={title} fill className="object-contain " />
        </div>

        <div className=" relative right-1 sm:left-2 text-right flex">
          <p className="text-[10px] sm:text-xs md:text-sm text-green-600">
            <strong className=" text-[12px] sm:text-[14px] md:text-[16px] text-green-600">
              {" "}
              {difference}
            </strong>{" "}
            <span className="text-[#768396]">
              {" "}
              more <br /> from last week
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
