import React, { useEffect, useState } from "react";
import HeroMediaForm from "../../components/admin/HeroMediaForm";
import MediaGrid from "../../components/admin/MediaGrid";
import { useDispatch, useSelector } from "react-redux";
import { getHero } from "../../features/hero/hero.actions";

const HeroMedia = () => {
  const [mediaList, setMediaList] = useState([]);
  const dispatch = useDispatch();
  const { heroMedia, isGetHeroLoading } = useSelector((state) => state.hero);
  const [localMedia, setLocalMedia] = useState([]);
  const handleAddMedia = (media) => {
    setLocalMedia((prev) => [...prev, media]);
  };

  const handleDelete = (index) => {
    setMediaList(mediaList.filter((_, i) => i !== index));
  };
  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  return (
    <div className="space-y-2 px-6">
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
