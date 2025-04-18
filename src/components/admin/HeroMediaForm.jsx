import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import MediaUploadBox from "./MediaUploadBox";

const HeroMediaForm = ({ onAddMedia }) => {
  const [type, setType] = useState("image");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const initialValues = {
    image: null,
    video: null,
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
    const media = {
      type,
      url:
        type === "image"
          ? URL.createObjectURL(values.image)
          : URL.createObjectURL(values.video),
      hero: values.hero,
    };

    console.log("Submitted Media Object:", media); // ✅ Console log added back

    onAddMedia(media);
    resetForm();
    setImagePreview(null);
    setVideoPreview(null);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-8">
          {/* Type Toggle */}
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
            <MediaUploadBox
              label="Upload Video"
              accept="video/*"
              iconType="video"
              previewUrl={videoPreview}
              onChange={(e) =>
                handleFileChange(e, setFieldValue, "video", setVideoPreview)
              }
            />
          )}

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Field type="checkbox" name="hero" className="accent-zinc-900" />
            Show in Hero
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="bg-zinc-900 text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition text-sm font-medium cursor-pointer"
          >
            Add Media
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroMediaForm;
