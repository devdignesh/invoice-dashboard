import { Chevron } from "../assets/Icons/Chevron";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="p-4  flex justify-between items-center w-full ">
      <div className="flex justify-center items-center sm:hidden space-x-2">
        <Chevron />
        <span className="text-[17px]">Back</span>
      </div>
      <div>
        <span className="text-[17px] text-black font-bold">Dashboard</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src="src/assets/ProfileIcon.png" alt="Profile" />
            <AvatarFallback>PI</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
