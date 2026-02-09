"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}
