import React, { useEffect, useState } from "react";
import MediaDisplay from "./MediaDisplay";
import { useDispatch, useSelector } from "react-redux";
import { getHero } from "../features/hero/hero.actions";
import Spinner from "./Spinner";

const VideoHeader = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const dispatch = useDispatch();
  const { heroMedia, isGetHeroLoading } = useSelector((state) => state?.hero);

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  useEffect(() => {
    if (heroMedia?.length > 0) {
      const heroItems = heroMedia.filter((item) => item.hero === true);
      if (heroItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * heroItems.length);
        setSelectedMedia(heroItems[randomIndex]);
      }
    }
  }, [heroMedia]);

  if (isGetHeroLoading || !selectedMedia) {
    return (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
        <Spinner size="md" center />
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
      {/* <div className="absolute inset-0 bg-black/50" /> */}
    </div>
  );
};

export default VideoHeader;
