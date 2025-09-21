import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { baseUrl } from "@/lib/base-url";
import ShareEllipsis from "./share-ellipsis";

interface KitsProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  audioUrl: string;
}

interface KitsApiResponse {
  kits: KitsProps[];
}

export default async function KitCard() {
  const res = await fetch(`${baseUrl}/api/kits`, {
    cache: "no-store",
  });
  const data: KitsApiResponse = await res.json();
  const KitsData = data.kits || [];

  if (KitsData.length === 0) {
    return (
      <div className="flex flex-col min-h-screen space-y-8 items-center justify-center">
        <p className="text-muted-foreground">No kits yet, please upload ...</p>
        <Link href={"/dashboard/upload"}>
          <Button size={"sm"}>Upload a kit here</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8 max-w-7xl mx-auto my-32">
        {KitsData.map((kit) => (
          <Card key={kit.id}>
            <CardContent className="flex flex-col space-y-1 relative">
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image
                  src={kit.imageUrl}
                  alt="kit-image"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-1">
                  <ShareEllipsis />
                </span>
              </div>
              <div className="space-y-1 mt-2">
                <div className="flex justify-between">
                  <h1 className="font-bold">{kit.title}</h1>
                  <h1 className="font-bold">
                    <span>$</span>
                    {(kit.price / 100).toFixed(2)}
                  </h1>
                </div>
                <p className="text-muted-foreground text-sm">
                  {kit.description}
                </p>
              </div>
            </CardContent>
            <CardFooter className="gap-1 w-full">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
