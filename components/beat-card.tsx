import React from "react";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import Image from "next/image";
import { Button } from "../components/ui/button";

interface BeatProps {
  id: number;
  image: string;
  title: string;
  bpm: number;
  key: string;
  price: number;
}

const BeatData: BeatProps[] = [
  {
    id: 1,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 2,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 3,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 4,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 5,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 6,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 7,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
  {
    id: 8,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
  },
];

export default function BeatCard() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8 max-w-7xl mx-auto my-8">
      {BeatData.map((beat) => (
        <Card key={beat.id}>
          <CardContent className=" flex flex-col space-y-1">
            <Image
              src={`${beat.image || "rapper.webp"}`}
              alt="beat-image"
              width={230}
              height={230}
              className="object-cover rounded-md h-48 w-full"
            />
            <div className="space-y-1">
              <h1 className="font-bold mt-1">{`"${beat.title}"`}</h1>
              <div className="text-muted-foreground text-sm">
                <p>
                  <span>Bpm</span> {beat.bpm}
                </p>
                <p>
                  <span>Key</span> {beat.key}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full">
              <span>$ {beat.price}</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
