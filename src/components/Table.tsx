import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Tables() {
  return (
    <div className="bg-[#202028]  rounded-lg mt-5 p-4 text-gray-300 grid grid-rows-1">
      <h1 className="text-xl font-semibold">Recent Orders</h1>
      <Table className="border-separate border-spacing-y-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Customer</TableHead>
            <TableHead>Order No.</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Wade Warren
            </TableCell>
            <TableCell>15478256</TableCell>
            <TableCell>$124.00</TableCell>
            <TableCell>
              <Badge variant={"success"}>Delivered</Badge>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Jane Cooper
            </TableCell>
            <TableCell>48965786</TableCell>
            <TableCell>$365.02</TableCell>
            <TableCell>
              <Badge variant={"success"}>Delivered</Badge>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Guy Hawkins
            </TableCell>
            <TableCell>78958215</TableCell>
            <TableCell>$45.88</TableCell>
            <TableCell>
              <Badge variant={"destructive"}>Cancelled</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Kristin Watson
            </TableCell>
            <TableCell>20965732</TableCell>
            <TableCell>$65.00</TableCell>
            <TableCell>
              <Badge variant={"destructive"}>Pending</Badge>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Cody Fisher
            </TableCell>
            <TableCell>95715620</TableCell>
            <TableCell>$545.00</TableCell>
            <TableCell>
              <Badge variant={"success"}>Delivered</Badge>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center  gap-2 whitespace-nowrap ">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Savannah Nguyen
            </TableCell>
            <TableCell>78514568</TableCell>
            <TableCell>$128.20</TableCell>
            <TableCell>
              <Badge variant={"success"}>Delivered</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
