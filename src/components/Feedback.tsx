import { FaStar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Feedback() {
  return (
    <div className="bg-[#202028] rounded-lg mt-5 p-4 text-gray-300 ">
      <h1 className="text-xl font-semibold">Customer's Feedback</h1>

      <div className="mt-5">
        <div className="flex gap-2 ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <span>Jenny Wilson</span>
        </div>
        <div className="flex gap-1 mt-2">
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="white" />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          The food was excellent and so was the service. I had the mushroom
          risotto with scallops which was awesome. I had a burger over greens
          (gluten-free) which was also very good. They were very conscientious
          about gluten allergies.
        </p>
      </div>
      <Separator className="h-1 w-full bg-[#303038] my-5 shadow rounded-lg" />

      <div>
        <div className="flex gap-2 ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <span>Dianne Russell</span>
        </div>
        <div className="flex gap-1 mt-2">
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot
          coffe. Perfect service.
        </p>
      </div>
      <Separator className="h-1 w-full bg-[#303038] my-5 shadow rounded-lg" />
      <div>
        <div className="flex gap-2 ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <span>Devon Lane</span>
        </div>
        <div className="flex gap-1 mt-2">
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="yellow" />
          <FaStar size={15} color="white" />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          Normally wings are wings but theirs are lean meaty and tender and
          delicious. The sauce is delicious and the fries are crispy.
        </p>
      </div>
    </div>
  );
}
