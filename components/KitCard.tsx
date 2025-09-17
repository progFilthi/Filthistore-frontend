"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface KitsProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  audio?: string; // path to audio file
}

const KitsData: KitsProps[] = [
  {
    id: 1,
    image: "/drum-kit.jpg",
    title: "Loop Hole",
    description: "High quality dark sounds for your dark beats.",
    price: 30,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 2,
    image: "/drum-kit.jpg",
    title: "Streets Chosen",
    description: "Premium no recycled sounds just hits.",
    price: 70,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 3,
    image: "/drum-kit.jpg",
    title: "Loop Hole Vol.2",
    description: "High quality dark sounds for your dark beats.",
    price: 30,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 4,
    image: "/drum-kit.jpg",
    title: "Streets Chosen Vol.2",
    description: "Premium no recycled sounds just hits.",
    price: 70,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
];

export default function KitCard() {
  const [hoveredKitAudioId, setHoveredKitAudioId] = useState<number | null>(
    null
  );
  const [playingKitAudioId, setPlayingKitAudioId] = useState<number | null>(
    null
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (kitAudio: KitsProps) => {
    if (!audioRef.current) return;
    if (playingKitAudioId === kitAudio.id) {
      audioRef.current.pause();
      setPlayingKitAudioId(null);
    } else {
      audioRef.current.src = kitAudio.audio || "";
      audioRef.current.play();
      setPlayingKitAudioId(kitAudio.id);
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8 max-w-7xl mx-auto my-32">
        {KitsData.map((kit) => (
          <Card
            key={kit.id}
            onMouseEnter={() => setHoveredKitAudioId(kit.id)}
            onMouseLeave={() => setHoveredKitAudioId(null)}
          >
            <CardContent className="flex flex-col space-y-1 relative">
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image
                  src={kit.image}
                  alt="kit-image"
                  fill
                  className="object-cover"
                />

                {/* Play/Pause icons */}
                {hoveredKitAudioId === kit.id && (
                  <button
                    onClick={() => handlePlayPause(kit)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
                  >
                    {playingKitAudioId === kit.id ? (
                      <Pause size={32} />
                    ) : (
                      <Play size={32} />
                    )}
                  </button>
                )}
              </div>

              <div className="space-y-1 mt-2">
                <div className="flex justify-between">
                  <h1 className="font-bold">{kit.title}</h1>
                  <h1 className="font-bold">
                    <span>$</span>
                    {kit.price}
                  </h1>
                </div>
                <p className="text-muted-foreground">{kit.description}</p>
              </div>
            </CardContent>
            <CardFooter className="gap-1 w-full">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <audio ref={audioRef} onEnded={() => setPlayingKitAudioId(null)} />
    </>
  );
}
