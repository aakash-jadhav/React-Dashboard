import { PiCrosshair } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
export default function Goals() {
  return (
    <div className="min-h-[300px] bg-[#202028] rounded-lg mt-5 p-4 flex flex-col justify-around ">
      <div className="flex items-center  gap-2">
        <div className="p-2  bg-[#5f3237]   rounded-[50%] ">
          <PiCrosshair size={28} color="#fe6b1e" />
        </div>
        <h1 className="text-gray-300">Goals</h1>
        <div className="p-1  bg-[#48494e]   rounded-[50%] ml-auto cursor-pointer">
          <IoIosArrowForward size={20} />
        </div>
      </div>

      <div className="flex items-center  gap-2 mb-2 ">
        <div className="p-2  bg-[#293368]   rounded-[50%] ">
          <LiaHamburgerSolid size={28} color="#6c8aeb" />
        </div>
        <h1 className="text-gray-300">Popular Dishes</h1>
        <div className="p-1  bg-[#48494e]   rounded-[50%] ml-auto cursor-pointer">
          <IoIosArrowForward size={20} />
        </div>
      </div>

      <div className="flex items-center  gap-2 mb-2 ">
        <div className="p-2  bg-[#214a60]   rounded-[50%] ">
          <BiDish size={28} color="#2aabea" />
        </div>
        <h1 className="text-gray-300">Menus</h1>
        <div className="p-1  bg-[#48494e]   rounded-[50%] ml-auto cursor-pointer">
          <IoIosArrowForward size={20} />
        </div>
      </div>
    </div>
  );
}
