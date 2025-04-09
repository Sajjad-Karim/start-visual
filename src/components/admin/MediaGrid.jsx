import React from "react";
import MediaPreview from "./MediaPreview";

const MediaGrid = ({ items, onDelete, onToggleHero }) => {
  if (!items.length) {
    return <p className="text-sm text-zinc-500">No hero media added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <MediaPreview
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggleHero={onToggleHero}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
