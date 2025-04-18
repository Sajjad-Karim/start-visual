import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import MediaUploadBox from "./MediaUploadBox";
import { useDispatch, useSelector } from "react-redux";
import { getHero, uploadHero } from "../../features/hero/hero.actions";
import { toast } from "react-hot-toast";
import { resetUploadHeroState } from "../../features/hero/hero.slicer";

const HeroMediaForm = () => {
  const [type, setType] = useState("image");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const dispatch = useDispatch();
  const {
    isUploadHeroLoading,
    isUploadHeroSuccess,
    isUploadHeroFailed,
    message,
    error,
  } = useSelector((state) => state.hero);
  const initialValues = {
    image: null,
    video: null,
    poster: null,
    hero: true,
  };

  const handleFileChange = (e, setFieldValue, fieldName, setPreview) => {
    const file = e.currentTarget.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    const selectedFile = type === "image" ? values.image : values.video;

    if (!selectedFile) {
      toast.error(`Please upload a ${type} before submitting.`);
      return;
    }
    const formData = new FormData();
    formData.append("type", type);
    formData.append("hero", JSON.stringify(values.hero));

    if (type === "image" && values.image) {
      formData.append("file", values.image);
    } else if (type === "video" && values.video) {
      formData.append("file", values.video);
    }

    dispatch(uploadHero(formData));

    // const media = {
    //   type,
    //   file:
    //     type === "image"
    //       ? URL.createObjectURL(values.image)
    //       : URL.createObjectURL(values.video),
    //   hero: values.hero,
    // };
    // onAddMedia(media);
    resetForm();
    setImagePreview(null);
    setVideoPreview(null);
  };

  useEffect(() => {
    if (isUploadHeroSuccess) {
      toast.success(message);
      dispatch(resetUploadHeroState());

      dispatch(getHero());
    }
    if (isUploadHeroFailed) {
      toast.error(error?.message || String(error) || "Upload failed");
      dispatch(resetUploadHeroState());
    }
  }, [dispatch, isUploadHeroSuccess, isUploadHeroFailed, message, error]);
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-8">
          {/* Toggle */}
          <div className="flex space-x-4">
            {["image", "video"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                  type === t
                    ? "bg-zinc-900 text-white shadow"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {t === "image" ? "Image" : "Video"}
              </button>
            ))}
          </div>

          {/* Upload Fields */}
          {type === "image" && (
            <MediaUploadBox
              label="Upload Image"
              accept="image/*"
              iconType="image"
              previewUrl={imagePreview}
              onChange={(e) =>
                handleFileChange(e, setFieldValue, "image", setImagePreview)
              }
            />
          )}

          {type === "video" && (
            <div className="space-y-6 md:flex md:gap-7 ">
              <MediaUploadBox
                label="Upload Video"
                accept="video/*"
                iconType="video"
                previewUrl={videoPreview}
                onChange={(e) =>
                  handleFileChange(e, setFieldValue, "video", setVideoPreview)
                }
              />
              <MediaUploadBox
                label="Upload Poster (optional)"
                accept="image/*"
                iconType="image"
                previewUrl={posterPreview}
                onChange={(e) =>
                  handleFileChange(e, setFieldValue, "poster", setPosterPreview)
                }
              />
            </div>
          )}

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Field type="checkbox" name="hero" className="accent-zinc-900" />
            Show in Hero
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isUploadHeroLoading}
            className={`bg-zinc-900 text-white px-6 py-2 rounded-lg text-sm font-medium transition ${
              isUploadHeroLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-zinc-800 cursor-pointer"
            }`}
          >
            {isUploadHeroLoading ? "Uploading..." : "Add Media"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroMediaForm;
