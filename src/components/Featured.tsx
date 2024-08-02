import { FaShoppingBasket } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
export default function Featured() {
  return (
    <div className="grid sm:grid-cols-12 gap-3 ">
      <div className="sm:col-span-6 md:col-span-3 bg-[#202028] rounded-lg p-4">
        <div className="p-2  bg-[#293368] inline-block items-center justify-center rounded-lg relative ">
          <FaShoppingBasket size={24} color="#4167ff" />
          <div className="absolute  bottom-1 right-1 text-white ">
            <FaCirclePlus
              size={12}
              color="#738af9"
              className=" bg-white rounded-full"
            />
          </div>
        </div>
        <p className="text-sm">Total Orders</p>
        <div className="flex items-center justify-between mt-5">
          <h1 className="font-bold">75</h1>

          <p className="text-green-500  font-bold text-sm flex items-center justify-end ">
            <IoMdArrowDropup size={20} />
            3%
          </p>
        </div>
      </div>

      <div className="sm:col-span-6 md:col-span-3 bg-[#202028] rounded-lg p-4">
        <div className="p-2  bg-[#165246] inline-block items-center justify-center rounded-lg relative ">
          <GiShoppingBag size={24} color="#00c98d" />
          <div className="absolute  bottom-1 right-1 text-white ">
            <FaCheckCircle
              size={12}
              color="#72e1c0"
              className=" bg-white rounded-full"
            />
          </div>
        </div>
        <p className="text-sm">Total Delivered</p>
        <div className="flex items-center justify-between mt-5">
          <h1 className="font-bold">70</h1>

          <p className="text-red-500  font-bold flex items-center justify-end text-sm ">
            <MdOutlineArrowDropDown size={20} />
            3%
          </p>
        </div>
      </div>

      <div className="sm:col-span-6 md:col-span-3 bg-[#202028] rounded-lg p-4">
        <div className="p-2  bg-[#5f3237] inline-block items-center justify-center rounded-lg relative">
          <GiShoppingBag size={24} color="#f25e5e" />
          <div className="absolute  bottom-1 right-1 text-white ">
            <FaCircleXmark
              size={12}
              color="#fd8589"
              className=" bg-white rounded-full"
            />
          </div>
        </div>
        <p className="text-sm">Total Cancelled</p>
        <div className="flex items-center justify-between mt-5">
          <h1 className=" font-bold">05</h1>

          <p className="text-green-500  font-bold flex items-center justify-end text-sm">
            <IoMdArrowDropup size={20} />
            3%
          </p>
        </div>
      </div>

      <div className="sm:col-span-6 md:col-span-3 bg-[#202028] rounded-lg p-4">
        <div className="p-2  bg-[#5b2a4a] inline-block items-center justify-center rounded-lg ">
          <AiFillDollarCircle size={24} color="#e9419b" />
        </div>
        <p className="text-sm">Total Revenue</p>
        <div className="flex items-center justify-between mt-5">
          <h1 className="font-bold">$12k</h1>

          <p className="text-red-500  font-bold flex items-center justify-end text-sm">
            <MdOutlineArrowDropDown size={20} />
            3%
          </p>
        </div>
      </div>
    </div>
  );
}
