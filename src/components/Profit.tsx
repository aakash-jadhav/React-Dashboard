import { IoMdArrowDropup } from "react-icons/io";
import { PyChart } from "./PyChart";

export default function Profit() {
  return (
    <div className="min-h-[150px] bg-[#202028] p-4 flex  items-center justify-around rounded-lg h-full  ">
      <div className="flex flex-col justify-between self-stretch whitespace-nowrap flex-2  ">
        <p className="text-sm text-gray-300">Net Profit</p>
        <h1 className="text-2xl font-bold">$ 6759.25</h1>
        <p className="text-green-500  font-bold flex items-center  ">
          <IoMdArrowDropup size={20} />
          3%
        </p>
      </div>
      <div className=" flex-1 sm:hidden lg:block">
        <PyChart />
      </div>
    </div>
  );
}
