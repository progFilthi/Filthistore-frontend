"use client";

import { useState } from "react";
import { EllipsisIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditModal from "./edit-modal";
import { KitsProps } from "./KitCard";

interface KitEllipsisProps {
  kit: KitsProps;
  setKits: React.Dispatch<React.SetStateAction<KitsProps[]>>;
}

export default function KitEllipsis({ kit, setKits }: KitEllipsisProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full shadow-none"
          >
            <EllipsisIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditModal
        kit={kit}
        open={open}
        onOpenChange={setOpen}
        setKits={setKits}
      />
    </>
  );
}
