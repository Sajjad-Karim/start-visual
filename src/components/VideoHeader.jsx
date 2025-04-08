import React, { useState, useEffect } from "react";
import { heroContent } from "../data/hero";
import MediaDisplay from "./MediaDisplay";

const VideoHeader = () => {
  const [selectedMedia, setSelectedMedia] = useState(heroContent[0]);

  useEffect(() => {
    // Select a random media item on mount
    const randomIndex = Math.floor(Math.random() * heroContent.length);
    setSelectedMedia(heroContent[randomIndex]);
  }, []);

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
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default VideoHeader;
