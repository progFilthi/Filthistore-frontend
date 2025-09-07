"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { licenseTiers } from "@/lib/licenses";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function LicenseOptions({ value, onChange }: Props) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
      {licenseTiers.map((tier) => (
        <div
          key={tier.id}
          className="flex items-center gap-2 border rounded-md p-3 cursor-pointer"
        >
          <RadioGroupItem id={tier.id} value={tier.id} />
          <div>
            <Label
              htmlFor={tier.id}
              className="font-medium flex justify-between"
            >
              <div>{tier.label}</div>
              <div>${tier.price}</div>
            </Label>
            <p className="text-sm text-muted-foreground">{tier.description}</p>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
}
