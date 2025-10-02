"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { baseUrl } from "@/lib/base-url";
import KitEllipsis from "./kit-ellipsis";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export interface KitsProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  audioUrl: string;
}

export default function KitCard() {
  const [kits, setKits] = useState<KitsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchKits() {
      try {
        const res = await fetch(`${baseUrl}/kits`);
        const data = await res.json();
        setKits(data.kits || []);
      } catch (err) {
        console.error("Failed to fetch kits", err);
      } finally {
        setLoading(false);
      }
    }
    fetchKits();
  }, []);

  if (loading) return <p>Loading kits...</p>;

  if (kits.length === 0) {
    return (
      <div className="flex flex-col min-h-screen space-y-8 items-center justify-center">
        <p className="text-muted-foreground">No kits yet, please upload ...</p>
        <Link href={"/dashboard/upload"}>
          <Button size={"sm"}>Upload a kit here</Button>
        </Link>
      </div>
    );
  }

  //creates a payment checkout page for dodo payments
  const handlePayments = async () => {
    const { data: checkout } = await authClient.dodopayments.checkout({
      slug: "premium-plan",
      customer: {
        email: "customer@example.com",
        name: "John Doe",
      },
      billing: {
        city: "San Francisco",
        country: "US",
        state: "CA",
        street: "123 Market St",
        zipcode: "94103",
      },
      referenceId: "order_123",
    });

    if (!checkout) {
      toast.error("Error in check out page");
    } else {
      window.open(checkout.url, "_blank");
      // window.location.href = checkout.url;
    }
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8 max-w-7xl mx-auto my-32">
      {kits.map((kit) => (
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
                <KitEllipsis kit={kit} setKits={setKits} />
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
              <p className="text-muted-foreground text-sm">{kit.description}</p>
            </div>
          </CardContent>
          <CardFooter className="gap-1 w-full">
            <Button onClick={handlePayments} className="w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
