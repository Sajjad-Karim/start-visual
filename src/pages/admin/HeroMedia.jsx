import React, { useState } from "react";
import HeroMediaForm from "../../components/admin/HeroMediaForm";
import MediaGrid from "../../components/admin/MediaGrid";

// Temporary mock data
const initialHeroMedia = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop",
    alt: "Lion",
    hero: true,
  },
  {
    id: 2,
    type: "video",
    url: "https://player.vimeo.com/progressive_redirect/playback/735273384/rendition/1080p/file.mp4",
    posterUrl: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
    alt: "Forest video",
    hero: false,
  },
];

const HeroMedia = () => {
  const [heroItems, setHeroItems] = useState(initialHeroMedia);

  const handleAdd = (newItem) => {
    if (heroItems.length >= 4) {
      alert("Maximum 4 hero items allowed.");
      return;
    }
    setHeroItems((prev) => [...prev, { ...newItem, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setHeroItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleHero = (id) => {
    setHeroItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, hero: !item.hero } : item
      )
    );
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">Hero Media</h2>
        <p className="text-sm text-zinc-600">
          Upload up to 4 images or videos for the homepage hero section.
        </p>
      </div>

      <HeroMediaForm onAdd={handleAdd} />
      <MediaGrid
        items={heroItems}
        onDelete={handleDelete}
        onToggleHero={handleToggleHero}
      />
    </div>
  );
};

export default HeroMedia;
