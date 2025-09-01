import { useId } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface LicenseOptionsProps {
  value: string;
  onChange: (val: string) => void;
}

const licenses = [
  { id: "basic", name: "Basic Lease", price: 29.99 },
  { id: "unlimited", name: "Unlimited Lease", price: 99.99 },
  { id: "exclusive", name: "Exclusive Rights", price: 499.99 },
];

export default function LicenseOptions({
  value,
  onChange,
}: LicenseOptionsProps) {
  const id = useId();

  return (
    <RadioGroup className="gap-2" value={value} onValueChange={onChange}>
      {licenses.map((license) => (
        <div
          key={license.id}
          className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex w-full items-center gap-2 rounded-md border px-4 py-3 shadow-xs outline-none"
        >
          <RadioGroupItem
            value={license.id}
            id={`${id}-${license.id}`}
            aria-describedby={`${id}-${license.id}-description`}
            className="order-1 after:absolute after:inset-0"
          />
          <div className="grid grow gap-1">
            <Label htmlFor={`${id}-${license.id}`}>{license.name}</Label>
            <p
              id={`${id}-${license.id}-description`}
              className="text-muted-foreground text-xs"
            >
              ${license.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
}
