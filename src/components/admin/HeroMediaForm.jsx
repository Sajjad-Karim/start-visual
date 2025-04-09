import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const HeroMediaForm = ({ onAdd }) => {
  const [mediaType, setMediaType] = useState("image");
  const [mediaFile, setMediaFile] = useState(null);
  const [posterFile, setPosterFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      alt: "",
      hero: false,
    },
    validationSchema: Yup.object({
      alt: Yup.string().required("Alt text is required"),
    }),
    onSubmit: () => {
      if (!mediaFile) {
        alert("Please upload a media file.");
        return;
      }

      const newItem = {
        id: Date.now(),
        type: mediaType,
        url: URL.createObjectURL(mediaFile),
        alt: formik.values.alt,
        hero: formik.values.hero,
        ...(mediaType === "video" && posterFile
          ? { posterUrl: URL.createObjectURL(posterFile) }
          : {}),
      };

      onAdd(newItem);
      formik.resetForm();
      setMediaFile(null);
      setPosterFile(null);
    },
  });

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMediaFile(file || null);
  };

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    setPosterFile(file || null);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white border border-zinc-200 rounded-lg shadow-sm p-6 space-y-6"
    >
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-900">
          Add New Hero Media
        </h3>
        <p className="text-sm text-zinc-500">
          Upload an image or a video to display in the hero section.
        </p>
      </div>

      {/* Media Type Tabs */}
      <div className="border-b border-zinc-200">
        <nav className="-mb-px flex space-x-6">
          {["image", "video"].map((type) => (
            <button
              key={type}
              type="button"
              className={`cursor-pointer whitespace-nowrap px-4 py-2 border-b-2 text-sm font-medium ${
                mediaType === type
                  ? "border-zinc-900 text-zinc-900"
                  : "border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300"
              }`}
              onClick={() => {
                setMediaType(type);
                setMediaFile(null);
                setPosterFile(null);
              }}
            >
              {type === "image" ? "Image Upload" : "Video Upload"}
            </button>
          ))}
        </nav>
      </div>

      {/* Upload Fields */}
      {mediaType === "image" && (
        <div className="space-y-4 pt-4">
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Upload Image
          </label>

          <label className="flex flex-col items-center justify-center w-full h-40 px-4 py-6 text-center border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 transition">
            <svg
              className="w-8 h-8 mb-2 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l4-4 4 4m0 0l4-4 4 4M4 12h16"
              />
            </svg>
            <span className="text-sm text-zinc-500">Click to upload</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleMediaChange}
              className="hidden"
            />
          </label>

          {mediaFile && (
            <p className="text-xs text-zinc-500 mt-1">
              Selected: {mediaFile.name}
            </p>
          )}
        </div>
      )}

      {mediaType === "video" && (
        <div className="space-y-4 pt-4">
          {/* Upload Video */}
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Upload Video
          </label>
          <label className="flex flex-col items-center justify-center w-full h-40 px-4 py-6 text-center border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer hover:border-zinc-400 transition">
            <svg
              className="w-8 h-8 mb-2 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0-4v4m0-4L9 8m6 4l-6 4"
              />
            </svg>
            <span className="text-sm text-zinc-500">Click to upload</span>
            <input
              type="file"
              accept="video/mp4"
              onChange={handleMediaChange}
              className="hidden"
            />
          </label>
          {mediaFile && (
            <p className="text-xs text-zinc-500 mt-1">
              Selected: {mediaFile.name}
            </p>
          )}

          {/* Poster Upload */}
          <label className="block text-sm font-medium text-zinc-700 mt-4 mb-1">
            Poster Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePosterChange}
            className="w-full cursor-pointer text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-zinc-300 file:text-white hover:file:bg-zinc-400"
          />
          {posterFile && (
            <p className="text-xs text-zinc-500 mt-1">
              Selected: {posterFile.name}
            </p>
          )}
        </div>
      )}

      {/* Alt Text */}
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Alt Text
        </label>
        <input
          type="text"
          name="alt"
          value={formik.values.alt}
          onChange={formik.handleChange}
          className="w-full p-2.5 border border-zinc-300 rounded-md text-sm focus:ring-2 focus:ring-zinc-800 focus:outline-none"
          placeholder="Describe this media (for accessibility)"
        />
        {formik.errors.alt && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.alt}</p>
        )}
      </div>

      {/* Show in Hero Toggle */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="hero"
          id="hero"
          checked={formik.values.hero}
          onChange={formik.handleChange}
          className="w-4 h-4 text-zinc-800 border-zinc-300 rounded focus:ring-zinc-800"
        />
        <label htmlFor="hero" className="text-sm text-zinc-700">
          Show in Hero Section
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition"
      >
        Add Media
      </button>
    </form>
  );
};

export default HeroMediaForm;
