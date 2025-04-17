import React from "react";
import { useDropzone } from "react-dropzone";

const GalleryUploadForm = ({ values, setFieldValue, errors, touched }) => {
  const handleDrop = (acceptedFiles) => {
    const newItems = acceptedFiles.map((file, i) => {
      const url = URL.createObjectURL(file);
      return {
        file,
        url,
        type: file.type.startsWith("video") ? "video" : "image",
        alt: "",
        order: values.gallery.length + i,
        displaySize: "full",
        isMain: false,
      };
    });

    setFieldValue("gallery", [...values.gallery, ...newItems]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/*": [], "video/*": [] },
  });

  const updateField = (index, key, val) => {
    const gallery = [...values.gallery];
    gallery[index][key] = val;
    setFieldValue("gallery", gallery);
  };

  const setMain = (index) => {
    const gallery = values.gallery.map((item, i) => ({
      ...item,
      isMain: i === index,
    }));
    setFieldValue("gallery", gallery);
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
      <h2 className="text-xl font-semibold text-zinc-900">Gallery Upload</h2>

      <div
        {...getRootProps()}
        className="  p-6 text-center bg-zinc-50 border-2 border-dashed border-zinc-300 rounded-lg cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-sm   text-zinc-500">
          Drag and drop or click to upload media
        </p>
      </div>

      {typeof errors.gallery === "string" && touched.gallery && (
        <div className="text-sm text-red-500">{errors.gallery}</div>
      )}

      {values.gallery.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.gallery.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-1 border-[#cecdcd] rounded-xl overflow-hidden  bg-white"
            >
              {/* Media preview */}
              <div className="relative aspect-video bg-zinc-100">
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.url}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="preview"
                  />
                )}
              </div>

              {/* Form Fields */}
              <div className="p-4 space-y-3">
                {/* Alt Text */}
                <div>
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    placeholder="Describe the image or video"
                    value={item.alt}
                    onChange={(e) => updateField(index, "alt", e.target.value)}
                    className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                  {errors.gallery?.[index]?.alt && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.gallery[index].alt}
                    </p>
                  )}
                </div>

                {/* Order and Display Size */}
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-zinc-700 mb-1 block">
                      Order
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 1"
                      value={item.order}
                      onChange={(e) =>
                        updateField(index, "order", parseInt(e.target.value))
                      }
                      className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-sm font-medium text-zinc-700 mb-1 block">
                      Display Size
                    </label>
                    <select
                      value={item.displaySize}
                      onChange={(e) =>
                        updateField(index, "displaySize", e.target.value)
                      }
                      className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    >
                      <option value="full">Full</option>
                      <option value="half">Half</option>
                    </select>
                  </div>
                </div>

                {/* Set as Main Button */}
                <button
                  type="button"
                  onClick={() => setMain(index)}
                  className={`w-full mt-2 py-2 rounded-lg text-sm font-medium transition ${
                    item.isMain
                      ? "bg-black text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {item.isMain ? "Main Media (Selected)" : "Set as Main Media"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryUploadForm;
