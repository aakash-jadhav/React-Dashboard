import { PiSquaresFourFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { BiBarChartSquare } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="fixed px-4 mt-2 bg-[#202028] h-full hidden md:block">
      <PiSquaresFourFill size={30} color="#7294fe" className="cursor-pointer" />
      <div className="mt-10 flex  items-center flex-col justify-around  gap-y-8  [&>*]:cursor-pointer ">
        <IoMdHome size={24} color="#7294fe" />
        <BiBarChartSquare size={24} />
        <BsClipboardCheck size={24} />
        <BiWalletAlt size={24} />
        <IoBagCheckOutline size={24} />
      </div>
    </div>
  );
}
