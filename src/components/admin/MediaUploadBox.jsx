import React from "react";
import { ImageIcon, Video } from "lucide-react";

const MediaUploadBox = ({ label, accept, onChange, previewUrl, iconType }) => {
  const fileInputRef = React.useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-2">
      <div
        onClick={handleClick}
        className="w-[300px] h-[200px] bg-zinc-50 border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-500 flex items-center justify-center transition relative overflow-hidden"
      >
        {previewUrl ? (
          accept.startsWith("image") ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={previewUrl}
              controls
              className="w-full h-full object-cover"
            />
          )
        ) : (
          <div className="flex flex-col items-center text-zinc-500 text-sm">
            {iconType === "image" ? (
              <ImageIcon size={32} />
            ) : (
              <Video size={32} />
            )}
            <span className="mt-2">{label}</span>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

export default MediaUploadBox;
