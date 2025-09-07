import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TitleUpload() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 py-1">
      <Label htmlFor={id}>
        Title is required <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="Free Type Beat" type="text" required />
    </div>
  );
}
