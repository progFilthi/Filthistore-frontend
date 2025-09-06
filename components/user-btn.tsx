"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { useLogOut } from "@/hooks/use-logOut";
import { useUserSession } from "@/hooks/use-session";

export default function UserBtn() {
  //this is using a custom hook for logging out
  const session = useUserSession();
  const user = session?.user;

  //this is using a custom hook for logging out
  const handleLogOut = useLogOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <Image
              width={32}
              height={32}
              src={user?.image || "avatar.png"}
              alt="Profile image"
              className="object-cover"
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
