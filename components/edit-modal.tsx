"use client";

import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseUrl } from "@/lib/base-url";
import { KitsProps } from "./KitCard";

interface EditModalProps {
  kit: KitsProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setKits: React.Dispatch<React.SetStateAction<KitsProps[]>>;
}

export default function EditModal({
  kit,
  open,
  onOpenChange,
  setKits,
}: EditModalProps) {
  const [title, setTitle] = useState(kit.title);
  const [price, setPrice] = useState(kit.price.toString());
  const [description, setDescription] = useState(kit.description);
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${baseUrl}/kits/${kit.id}`, {
        title,
        price: Number(price),
        description,
      });

      // update local state without refetching
      setKits((prev) =>
        prev.map((k) =>
          k.id === kit.id
            ? { ...k, title, price: Number(price), description }
            : k
        )
      );

      onOpenChange(false);
    } catch (err) {
      console.error("Failed to update kit", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Kit</DialogTitle>
          <DialogDescription>Update drum kit details</DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSave}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
