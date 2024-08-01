import { IoMdArrowDropup } from "react-icons/io";

export default function Profit() {
  return (
    <div className="min-h-[150px] bg-[#202028] p-4 flex justify-between items-center  rounded-lg ">
      <div className="flex flex-col justify-between self-stretch">
        <p className="text-sm text-gray-300">Net Profit</p>
        <h1 className="text-2xl font-bold">$ 6759.25</h1>
        <p className="text-green-500  font-bold flex items-center  ">
          <IoMdArrowDropup size={20} />
          3%
        </p>
      </div>
      <div>Chart</div>
    </div>
  );
}
