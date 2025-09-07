import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BpmUpload() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 py-1">
      <Label htmlFor={id}>
        Bpm is required <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="Bpm: 120" type="text" required />
    </div>
  );
}
