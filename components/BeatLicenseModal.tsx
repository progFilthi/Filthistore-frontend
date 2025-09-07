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
import { toast } from "sonner";
import { useCart } from "@/lib/cart-store";
import { licenseTiers } from "@/lib/licenses";

interface Beat {
  id: number;
  title: string;
  image: string;
}

interface BeatLicenseModalProps {
  open: boolean;
  onClose: () => void;
  beat: Beat | null;
}

export default function BeatLicenseModal({
  open,
  onClose,
  beat,
}: BeatLicenseModalProps) {
  const [selected, setSelected] = useState("basic");
  const addItem = useCart((s) => s.addItem);

  if (!beat) return null;

  const handleBuy = () => {
    const tier = licenseTiers.find((t) => t.id === selected);
    if (!tier) return;

    addItem({
      id: beat.id,
      title: beat.title,
      image: beat.image,
      license: tier.label,
      price: tier.price,
    });

    toast.success(`${beat.title} (${tier.label}) added to cart`);
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
              Add to Cart
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
