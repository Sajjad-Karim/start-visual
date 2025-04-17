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
            <div key={index} className="space-y-2 border p-3 rounded">
              <div className="h-40 overflow-hidden rounded">
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.url}
                    className="w-full h-full object-cover"
                    alt="preview"
                  />
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Alt text"
                  value={item.alt}
                  onChange={(e) => updateField(index, "alt", e.target.value)}
                  className="w-full border rounded px-2 py-1"
                />
                {errors.gallery?.[index]?.alt && (
                  <div className="text-xs text-red-500">
                    {errors.gallery[index].alt}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Order"
                  value={item.order}
                  onChange={(e) =>
                    updateField(index, "order", parseInt(e.target.value))
                  }
                  className="w-full border rounded px-2 py-1"
                />
                <select
                  value={item.displaySize}
                  onChange={(e) =>
                    updateField(index, "displaySize", e.target.value)
                  }
                  className="w-full border rounded px-2 py-1"
                >
                  <option value="full">Full</option>
                  <option value="half">Half</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setMain(index)}
                className={`w-full cursor-pointer py-1 rounded text-sm font-medium ${
                  item.isMain
                    ? "bg-black text-white"
                    : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
                }`}
              >
                {item.isMain ? "Main Media (Selected)" : "Set as Main Media"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryUploadForm;
