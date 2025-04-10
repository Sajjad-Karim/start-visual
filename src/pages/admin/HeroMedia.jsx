import React, { useState } from "react";
import HeroMediaForm from "../../components/admin/HeroMediaForm";
import MediaGrid from "../../components/admin/MediaGrid";

const HeroMedia = () => {
  const [mediaList, setMediaList] = useState([]);

  const handleAddMedia = (newMedia) => {
    if (mediaList.length >= 4) {
      alert("You can add a maximum of 4 media items.");
      return;
    }
    setMediaList([...mediaList, newMedia]);
  };

  const handleDelete = (index) => {
    setMediaList(mediaList.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2 ">
      {/* Page Heading */}
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
          Hero Media Management
        </h1>
        <p className="text-sm text-zinc-600 ">
          Upload and manage up to <strong>4 media files</strong> to be featured
          on your website's homepage hero section.
        </p>
      </div>

      {/* Upload Form */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-800 mb-4">
          Add New Media
        </h2>
        <HeroMediaForm onAddMedia={handleAddMedia} />
      </section>

      {/* Media Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-800">
            Current Media ({mediaList.length}/4)
          </h2>
          {mediaList.length === 0 && (
            <p className="text-sm text-zinc-500">No media added yet.</p>
          )}
        </div>
        <MediaGrid mediaList={mediaList} onDelete={handleDelete} />
      </section>
    </div>
  );
};

export default HeroMedia;
