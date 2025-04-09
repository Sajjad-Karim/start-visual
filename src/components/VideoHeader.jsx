import React, { useEffect, useState } from "react";
import { heroContent } from "../data/hero";
import MediaDisplay from "./MediaDisplay";

const VideoHeader = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const heroItems = heroContent.filter((item) => item.hero);
    const randomIndex = Math.floor(Math.random() * heroItems.length);
    setSelectedMedia(heroItems[randomIndex]);
  }, []);

  if (!selectedMedia) {
    return (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <MediaDisplay
        item={{
          ...selectedMedia,
          width: 1920,
          height: 1080,
        }}
        priority={true}
      />
      {/* Overlay (like Rosco dark gradient) */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default VideoHeader;
