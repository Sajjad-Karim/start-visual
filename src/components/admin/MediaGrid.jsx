import React from 'react';
import { Trash2 } from 'lucide-react';

const MediaGrid = ({ mediaList, onDelete }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mediaList.map((media, index) => (
        <div
          key={index}
          className="relative bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
        >
          {/* Media Preview */}
          <div className="w-full h-48 bg-zinc-100">
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={media.alt || 'Uploaded Image'}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={media.url}
                poster={media.posterUrl}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Metadata */}
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-100 text-zinc-700 uppercase tracking-wide">
                {media.type}
              </span>
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${
                  media.hero
                    ? 'bg-green-100 text-green-700'
                    : 'bg-zinc-100 text-zinc-400'
                }`}
              >
                {media.hero ? 'Hero' : 'Not Hero'}
              </span>
            </div>

            {/* {media.posterUrl && media.type === "video" && (
              <div className="text-[11px] text-zinc-500 break-all">
                <strong className="text-zinc-600">Poster:</strong>{" "}
                <span className="text-blue-600 underline">
                  {media.posterUrl}
                </span>
              </div>
            )} */}
          </div>

          {/* Delete Button */}
          <div className="absolute top-3 right-3">
            <button
              onClick={() => onDelete(media._id)}
              className="flex items-center cursor-pointer gap-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-md text-xs font-semibold shadow-sm transition-all"
              title="Delete Media"
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
