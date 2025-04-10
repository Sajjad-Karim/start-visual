// GalleryUploadForm.jsx
import React, { useState } from "react";
import { Formik } from "formik";
import { useDropzone } from "react-dropzone";

const GalleryUploadForm = () => {
  return (
    <Formik
      initialValues={{ gallery: [] }}
      onSubmit={(values) => {
        const cleaned = values.gallery.map(({ file, ...rest }) => rest);
        console.log("gallery:", cleaned);
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => {
        const handleDrop = (acceptedFiles) => {
          const newItems = acceptedFiles.map((file, i) => {
            const url = URL.createObjectURL(file);
            const isVideo = file.type.startsWith("video");

            return {
              type: isVideo ? "video" : "image",
              url,
              file,
              width: "",
              height: "",
              alt: "",
              order: values.gallery.length + i,
              displaySize: "full",
              isMain: false,
            };
          });

          setFieldValue("gallery", [...values.gallery, ...newItems]);
        };

        const setMainImage = (index) => {
          const updated = values.gallery.map((item, i) => ({
            ...item,
            isMain: i === index,
          }));
          setFieldValue("gallery", updated);
        };

        const updateField = (i, field, val) => {
          const copy = [...values.gallery];
          copy[i][field] = val;
          setFieldValue("gallery", copy);
        };

        const { getRootProps, getInputProps } = useDropzone({
          onDrop: handleDrop,
          accept: { "image/*": [], "video/*": [] },
          multiple: true,
        });

        return (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl border"
          >
            <h2 className="text-xl font-semibold text-zinc-900 mb-6">
              Upload Images
            </h2>
            <div
              {...getRootProps()}
              className="border-2 border-dashed p-6 text-center cursor-pointer rounded-lg bg-zinc-50"
            >
              <input {...getInputProps()} />
              <p className="text-zinc-500">
                Drag and drop or click to upload images/videos
              </p>
            </div>

            {values.gallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="border p-3 rounded space-y-2 text-sm"
                  >
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
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Alt"
                      value={item.alt}
                      onChange={(e) =>
                        updateField(index, "alt", e.target.value)
                      }
                      className="w-full border px-2 py-1 rounded"
                    />

                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Width"
                        value={item.width}
                        onChange={(e) =>
                          updateField(index, "width", e.target.value)
                        }
                        className="w-full border px-2 py-1 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Height"
                        value={item.height}
                        onChange={(e) =>
                          updateField(index, "height", e.target.value)
                        }
                        className="w-full border px-2 py-1 rounded"
                      />
                    </div>

                    <div className="flex space-x-2">
                      <input
                        type="number"
                        placeholder="Order"
                        value={item.order}
                        onChange={(e) =>
                          updateField(index, "order", parseInt(e.target.value))
                        }
                        className="w-full border px-2 py-1 rounded"
                      />
                      <select
                        value={item.displaySize}
                        onChange={(e) =>
                          updateField(index, "displaySize", e.target.value)
                        }
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="full">Full</option>
                        <option value="half">Half</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setMainImage(index)}
                      className={`w-full cursor-pointer text-sm font-medium py-1 rounded ${
                        item.isMain
                          ? "bg-zinc-900 text-white"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {item.isMain
                        ? "Main Media (Selected)"
                        : "Set as Main Media"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="">
              <button
                type="submit"
                className="bg-zinc-900 text-white px-6 py-2 rounded hover:bg-zinc-800 text-sm"
              >
                Upload Images
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default GalleryUploadForm;
