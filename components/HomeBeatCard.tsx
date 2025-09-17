"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BeatLicenseModal from "./BeatLicenseModal";
import { Play, Pause } from "lucide-react";

interface BeatProps {
  id: number;
  image: string;
  title: string;
  bpm: number;
  key: string;
  price: number;
  audio?: string; // path to audio file
}

const BeatData: BeatProps[] = [
  {
    id: 1,
    image: "/young-producer.png",
    title: "Mask Off",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 2,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 3,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 4,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 5,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 6,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 7,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
  {
    id: 8,
    image: "/young-producer.png",
    title: "Trap Galaxy",
    bpm: 142,
    key: "F#m",
    price: 24.99,
    audio: "/Blictionary 147 gm @prodbyfilthi.mp3",
  },
];

export default function HomeBeatCard() {
  const [selectedBeat, setSelectedBeat] = useState<BeatProps | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredBeatId, setHoveredBeatId] = useState<number | null>(null);
  const [playingBeatId, setPlayingBeatId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (beat: BeatProps) => {
    if (!audioRef.current) return;
    if (playingBeatId === beat.id) {
      audioRef.current.pause();
      setPlayingBeatId(null);
    } else {
      audioRef.current.src = beat.audio || "";
      audioRef.current.play();
      setPlayingBeatId(beat.id);
    }
  };

  // const handleBuy = (beatId: number, licenseType: string) => {
  //   console.log("Buying:", { beatId, licenseType });
  // };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 gap-8 max-w-7xl mx-auto">
        {BeatData.map((beat) => (
          <Card
            key={beat.id}
            onMouseEnter={() => setHoveredBeatId(beat.id)}
            onMouseLeave={() => setHoveredBeatId(null)}
          >
            <CardContent className="flex flex-col space-y-1 relative">
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image
                  src={beat.image}
                  alt="beat-image"
                  fill
                  className="object-cover"
                />

                {/* Play/Pause icons */}
                {hoveredBeatId === beat.id && (
                  <button
                    onClick={() => handlePlayPause(beat)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/30 hover:bg-black/50"
                  >
                    {playingBeatId === beat.id ? (
                      <Pause size={32} />
                    ) : (
                      <Play size={32} />
                    )}
                  </button>
                )}
              </div>

              <div className="space-y-1 mt-2">
                <h1 className="font-bold">{beat.title}</h1>
                <div className="text-muted-foreground">
                  <p>
                    <span>Bpm:</span> {beat.bpm}
                  </p>
                  <p className="text-sm">
                    <span>Key:</span> {beat.key}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-1 w-full">
              <Button
                className="w-full"
                onClick={() => {
                  setSelectedBeat(beat);
                  setModalOpen(true);
                }}
              >
                Buy
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <audio ref={audioRef} onEnded={() => setPlayingBeatId(null)} />

      <BeatLicenseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        beat={selectedBeat}
        // onBuy={handleBuy}
      />
    </>
  );
}
