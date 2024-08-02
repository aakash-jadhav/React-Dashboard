import { PiSquaresFourFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { BiBarChartSquare } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
export default function Sidebar() {
  return (
    <div className="fixed px-4 mt-2 bg-[#202028] h-full hidden md:block">
      <PiSquaresFourFill size={30} color="#7294fe" className="cursor-pointer" />
      <div className="mt-10 flex flex-col gap-y-8  [&>*]:cursor-pointer   h-[80dvh]">
        <div className="relative flex ">
          <IoMdHome size={24} color="#7294fe" />
          <div className="absolute right-10 top-0  rounded-full  h-full w-1   bg-[#7293fe]"></div>
        </div>

        <BiBarChartSquare size={24} />
        <BsClipboardCheck size={24} />
        <BiWalletAlt size={24} />
        <IoBagCheckOutline size={24} />
        <IoMdLogOut
          size={24}
          className="justify-self-end justify-self-end mt-auto"
        />
      </div>
    </div>
  );
}
