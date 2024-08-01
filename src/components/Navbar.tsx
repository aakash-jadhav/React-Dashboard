import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
export default function Navbar() {
  return (
    <div className="bg-[#202028] flex flex-row-reverse items-center  gap-5 p-2 ">
      <Avatar className="w-6 h-6 mr-5 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="bg-[#44454a] flex justify-center items-center  p-2  rounded-full cursor-pointer">
        <IoIosNotificationsOutline size={15} />
      </div>
      <div className="bg-[#44454a] flex justify-center items-center  p-2  rounded-full cursor-pointer">
        <CiSettings size={15} />
      </div>
      <div className="bg-[#44454a] flex justify-center items-center  p-2  rounded-full cursor-pointer">
        <CiMail size={15} />
      </div>
      <div className="relative mr-auto  items-center  focus-within:text-gray-100 ml-20 sm:flex hidden ">
        <CiSearch className="absolute w-5  ml-3 pointer-events-none " />
        <Input
          name="search"
          type="search"
          placeholder="Search"
          className=" pr-3 pl-10 w-56   bg-white/10 text-gray-300  placeholder-gray-500   "
          autoComplete="off"
          aria-label="Search talk"
        />
      </div>
    </div>
  );
}
