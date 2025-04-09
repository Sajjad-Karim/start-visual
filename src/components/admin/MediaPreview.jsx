import React from "react";
import { Trash2, Star } from "lucide-react";

const MediaPreview = ({ item, onDelete, onToggleHero }) => {
  return (
    <div className="relative bg-white border border-zinc-200 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 group">
      {/* Media Display */}
      <div className="aspect-video bg-black relative">
        {item.type === "video" ? (
          <video
            src={item.url}
            poster={item.posterUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.url}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
        )}
        {/* Delete Button (visible on hover) */}
        <button
          onClick={() => {
            if (confirm("Are you sure you want to delete this item?")) {
              onDelete(item.id);
            }
          }}
          className="absolute cursor-pointer top-2 right-2   text-white bg-red-500 hover:bg-red-600 rounded-full p-1 shadow transition-all duration-200 "
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Info Block */}
      <div className="p-4 space-y-2 text-sm text-zinc-700">
        <div className="flex items-center justify-between">
          <span className="font-medium text-zinc-500">Type</span>
          <span className="font-semibold capitalize">{item.type}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium text-zinc-500">Show in Hero</span>
          <button
            onClick={() => onToggleHero(item.id)}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
              item.hero
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300"
            }`}
          >
            <Star size={14} />
            {item.hero ? "Yes" : "No"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPreview;
