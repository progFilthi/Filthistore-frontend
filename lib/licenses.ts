export interface LicenseTier {
  id: string;
  label: string;
  description: string;
  price: number;
}

export const licenseTiers: LicenseTier[] = [
  { id: "basic", label: "Basic", description: "MP3 only", price: 29.99 },
  { id: "premium", label: "Premium", description: "WAV + MP3", price: 99.99 },
  {
    id: "exclusive",
    label: "Exclusive",
    description: "Full rights",
    price: 499.99,
  },
];
