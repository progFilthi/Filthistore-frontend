"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LicenseOptions from "./LicenseOptions";

interface Beat {
  id: number;
  title: string;
}

interface BeatLicenseModalProps {
  open: boolean;
  onClose: () => void;
  beat: Beat | null;
  onBuy: (beatId: number, licenseType: string) => void;
}

export default function BeatLicenseModal({
  open,
  onClose,
  beat,
  onBuy,
}: BeatLicenseModalProps) {
  const [selected, setSelected] = useState("basic");

  if (!beat) return null;

  const handleBuy = () => {
    onBuy(beat.id, selected);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Purchase License</DialogTitle>
          <DialogDescription>
            Select a license for <strong>{beat.title}</strong>.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5">
          <LicenseOptions value={selected} onChange={setSelected} />

          <div className="grid gap-2">
            <Button type="button" className="w-full" onClick={handleBuy}>
              Buy License
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="w-full">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
