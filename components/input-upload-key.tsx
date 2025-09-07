import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function KeyUpload() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 py-1">
      <Label htmlFor={id}>
        Key is required <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="F#m, C#m, Cm" type="text" required />
    </div>
  );
}
