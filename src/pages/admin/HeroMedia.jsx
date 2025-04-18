import React, { useEffect, useState } from "react";
import HeroMediaForm from "../../components/admin/HeroMediaForm";
import MediaGrid from "../../components/admin/MediaGrid";
import { useDispatch, useSelector } from "react-redux";
import { deleteHero, getHero } from "../../features/hero/hero.actions";
import Spinner from "../../components/Spinner";
import { toast } from "react-hot-toast";
import { resetDeleteHeroState } from "../../features/hero/hero.slicer";
const HeroMedia = () => {
  // const [mediaList, setMediaList] = useState([]);
  const dispatch = useDispatch();
  const {
    heroMedia,
    isGetHeroLoading,
    isDeleteHeroLoading,
    isDeleteHeroSuccess,
    isDeleteHeroFailed,
    error,
    message,
  } = useSelector((state) => state.hero);
  const [localMedia, setLocalMedia] = useState([]);
  const handleAddMedia = (media) => {
    setLocalMedia((prev) => [...prev, media]);
  };

  const handleDelete = (id) => {
    dispatch(deleteHero(id));
  };
  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  useEffect(() => {
    if (isDeleteHeroSuccess) {
      toast.success(message || "Media deleted successfully");
      dispatch(getHero());
      dispatch(resetDeleteHeroState());
    }
    if (isDeleteHeroFailed) {
      toast.error(error || "Failed to delete media");
      dispatch(resetDeleteHeroState());
    }
  }, [
    isDeleteHeroLoading,
    isDeleteHeroSuccess,
    isDeleteHeroFailed,
    error,
    message,
  ]);

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
            Current Media ({heroMedia?.length}/4)
          </h2>
          {heroMedia?.length === 0 && (
            <p className="text-sm text-zinc-500">No media added yet.</p>
          )}
        </div>
        {isGetHeroLoading && (
          <Spinner size="md" message="Loading media..." center />
        )}
        <MediaGrid mediaList={heroMedia} onDelete={handleDelete} />
      </section>
    </div>
  );
};

export default HeroMedia;
