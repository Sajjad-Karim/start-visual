import React, { useEffect } from "react";
import { Field, useFormikContext } from "formik";

const gradientDirections = [
  { label: "Top to Bottom", value: "to bottom" },
  { label: "Bottom to Top", value: "to top" },
  { label: "Left to Right", value: "to right" },
  { label: "Right to Left", value: "to left" },
  { label: "Top Left to Bottom Right", value: "to bottom right" },
  { label: "Top Right to Bottom Left", value: "to bottom left" },
];

const HeaderMediaSection = () => {
  const { values, setFieldValue } = useFormikContext();

  const generateGradient = () => {
    const direction = values.gradientDirection || "to bottom";
    const color1 = values.gradientColor1 || "#1A1A1A";
    const color2 = values.gradientColor2 || "transparent";
    const gradientString = `linear-gradient(${direction}, ${color1}, ${color2})`;
    setFieldValue("headerMedia.overlay.gradient", gradientString);
  };

  useEffect(() => {
    generateGradient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.gradientDirection, values.gradientColor1, values.gradientColor2]);

  return (
    <section className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Header Media</h3>

      {values.headerMedia.image.url && (
        <img
          src={values.headerMedia.image.url}
          alt="Preview"
          className="w-fit h-[200px] object-contain mt-2"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <Field name="headerMedia.image.url">
            {({ form }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    form.setFieldValue("headerMedia.image.url", url);
                  }
                }}
                className="w-full border border-zinc-300 rounded p-2 bg-white cursor-pointer"
              />
            )}
          </Field>
        </div>

        {/* Alt Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alt Text
          </label>
          <Field
            name="headerMedia.image.alt"
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>

        {/* Header Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Header Height
          </label>
          <Field
            name="headerMedia.height"
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>

        {/* Overlay Opacity */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Overlay Opacity: {values.headerMedia.overlay.opacity}
          </label>
          <div className="flex items-center gap-4">
            <Field
              name="headerMedia.overlay.opacity"
              type="range"
              min="0"
              max="1"
              step="0.01"
              className="w-full md:w-[30%] h-2 rounded-lg appearance-none bg-zinc-200 accent-indigo-600 cursor-pointer"
            />
            <span className="text-sm text-zinc-600">
              {values.headerMedia.overlay.opacity}
            </span>
          </div>
        </div>
      </div>

      {/* Gradient Builder UI */}
      <div className="border-t pt-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Overlay Gradient
        </label>

        <div className="flex flex-wrap gap-4">
          {/* Direction Select */}
          <div className="w-48">
            <label className="block text-xs mb-1">Direction</label>
            <Field
              as="select"
              name="gradientDirection"
              className="w-full border p-2 rounded"
            >
              {gradientDirections.map((dir) => (
                <option key={dir.value} value={dir.value}>
                  {dir.label}
                </option>
              ))}
            </Field>
          </div>

          {/* Color 1 Picker */}
          <div className="w-36">
            <label className="block text-xs mb-1">Color 1</label>
            <Field name="gradientColor1">
              {({ field, form }) => (
                <input
                  type="color"
                  value={field.value || "#1A1A1A"}
                  onChange={(e) => {
                    form.setFieldValue("gradientColor1", e.target.value);
                  }}
                  className="w-full h-10 border rounded cursor-pointer"
                />
              )}
            </Field>
          </div>

          {/* Color 2 Picker */}
          <div className="w-36">
            <label className="block text-xs mb-1">Color 2</label>
            <Field name="gradientColor2">
              {({ field, form }) => (
                <input
                  type="color"
                  value={field.value || "#000000"}
                  onChange={(e) => {
                    form.setFieldValue("gradientColor2", e.target.value);
                  }}
                  className="w-full h-10 border rounded cursor-pointer"
                />
              )}
            </Field>
          </div>
        </div>

        {/* Live Gradient Preview */}
        <div
          className="w-full h-16 mt-2 rounded border"
          style={{
            background: values.headerMedia.overlay.gradient,
          }}
        ></div>

        {/* Show final string for debugging if needed */}
        <p className="text-sm text-zinc-600 mt-1">
          <strong>CSS:</strong> {values.headerMedia.overlay.gradient}
        </p>
      </div>
    </section>
  );
};

export default HeaderMediaSection;
