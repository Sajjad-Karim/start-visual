import { Field } from "formik";
import { useField } from "formik";
import { useCallback, useEffect, useState } from "react";
export const SectionComponent = ({ index, remove }) => (
  <div className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Section {index + 1}</h2>
      <button
        type="button"
        onClick={() => remove(index)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>

    <div className="space-y-4">
      <InputField
        name={`sections[${index}].title`}
        label="Title"
        placeholder="e.g. Our Mission"
      />
      <TextAreaField
        name={`sections[${index}].text`}
        label="Text"
        placeholder="e.g. We create visual experiences..."
      />

      <ImageUploadField
        name={`sections[${index}].image`}
        label="Upload Image"
      />

      <div className="grid grid-cols-2 gap-4">
        <ColorInput
          name={`sections[${index}].style.backgroundColor`}
          label="Background Color"
        />
        <ColorInput
          name={`sections[${index}].style.textColor`}
          label="Text Color"
        />
      </div>

      <FontInputs
        prefix={`sections[${index}].style.titleFont`}
        label="Title Font"
      />
      <FontInputs
        prefix={`sections[${index}].style.textFont`}
        label="Text Font"
      />
    </div>
  </div>
);
export const SelectField = ({ name, label, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <select
            {...field}
            className={`w-full border cursor-pointer border-zinc-300 rounded px-4 py-2 text-sm focus:ring-2 ${
              meta.touched && meta.error
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          >
            <option value="">Select...</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  </div>
);

export const InputField = ({ name, label, placeholder, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <input
            {...field}
            placeholder={placeholder}
            className={`w-full   border border-zinc-300 rounded px-4 py-2 text-sm focus:ring-2 ${
              meta.touched && meta.error
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
            {...props}
          />
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  </div>
);
export const TextAreaField = ({ name, label, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <textarea
            {...field}
            placeholder={placeholder}
            className={`w-full  border border-zinc-300 rounded px-4 py-2 text-sm focus:ring-2 h-32 ${
              meta.touched && meta.error
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            }`}
          />
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  </div>
);

const normalizeHex = (value) => {
  if (!value) return "#ffffff";
  const hex = value.replace(/^#/, "").replace(/[^0-9a-fA-F]/g, "");
  if (hex.length === 3) {
    return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  return `#${hex.padEnd(6, "0").slice(0, 6)}`;
};

const isValidHex = (value) => /^#([A-Fa-f0-9]{3}){1,2}$/i.test(value);

export const ColorInput = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const [localColor, setLocalColor] = useState(field.value || "#ffffff");
  const [isDragging, setIsDragging] = useState(false);

  // Sync with Formik's value
  useEffect(() => {
    setLocalColor(field.value);
  }, [field.value]);

  const handleColorChange = useCallback(
    (e) => {
      const newColor = normalizeHex(e.target.value);
      setLocalColor(newColor);
      if (!isDragging) helpers.setValue(newColor);
    },
    [helpers, isDragging]
  );

  const handleTextChange = (e) => {
    const value = e.target.value;
    setLocalColor(value);
  };

  const handleTextBlur = () => {
    const normalized = isValidHex(localColor)
      ? normalizeHex(localColor)
      : field.value;
    setLocalColor(normalized);
    helpers.setValue(normalized);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex gap-2 items-center">
        <input
          type="color"
          value={normalizeHex(localColor)}
          onChange={handleColorChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => {
            setIsDragging(false);
            helpers.setValue(normalizeHex(localColor));
          }}
          className="h-10 border border-zinc-300 rounded text-sm w-16 cursor-pointer"
        />
        <input
          type="text"
          value={localColor}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          placeholder="#FFFFFF"
          className={`border md:w-full w-16 border-zinc-300 rounded px-4 py-2 text-sm ${
            meta.touched && meta.error
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
        />
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

// ✅ Font Input Group Component
export const FontInputs = ({ prefix, label }) => (
  <div className="space-y-2 border-2 border-zinc-200 p-4 rounded-md">
    <h3 className="font-medium">{label}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Font Family */}
      <SelectField
        name={`${prefix}.family`}
        label="Font Family"
        options={[
          "Inter, sans-serif",
          "Syncopate, sans-serif",
          "Arial, sans-serif",
          "Georgia, serif",
          "Roboto, sans-serif",
        ]}
      />

      {/* Font Size */}
      <SelectField
        name={`${prefix}.size`}
        label="Font Size"
        options={["1rem", "1.25rem", "1.5rem", "2rem", "3rem", "3.5rem"]}
      />

      {/* Font Weight */}
      <SelectField
        name={`${prefix}.weight`}
        label="Font Weight"
        options={["400", "500", "600", "700", "800", "900"]}
      />

      {/* Letter Spacing */}
      <SelectField
        name={`${prefix}.letterSpacing`}
        label="Letter Spacing"
        options={["0em", "0.02em", "0.05em", "0.1em", "0.2em"]}
      />
    </div>
  </div>
);

// ✅ Image Upload Field Component
export const ImageUploadField = ({ name, label }) => (
  <Field name={name}>
    {({ form, field, meta }) => {
      const file = field.value;

      // Generate preview URL for both File and string
      const previewUrl =
        file && typeof file === "object"
          ? URL.createObjectURL(file)
          : typeof file === "string"
          ? file
          : null;

      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>

          {/* 🔁 Conditional Preview or Upload */}
          {!previewUrl ? (
            <div className="relative border-2 border-dashed border-zinc-300 bg-zinc-50 rounded-lg p-6 text-center hover:border-zinc-400 transition">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const selectedFile = event.currentTarget.files[0];
                  if (selectedFile) {
                    form.setFieldValue(name, selectedFile);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <p className="text-sm text-zinc-500">
                Click or drag an image to upload
              </p>
            </div>
          ) : (
            <div className="relative rounded-md overflow-hidden border border-zinc-300">
              {/* 🖼️ Preview Image */}
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-48 object-contain bg-zinc-100"
              />

              {/* 🛠️ Filename + Replace + Remove */}
              <div className="flex justify-between items-center p-2 bg-zinc-50 border-t border-zinc-200">
                <span className="text-sm text-zinc-600 truncate">
                  {typeof file === "string"
                    ? file.split("/").pop()
                    : file?.name}
                </span>
                <div className="flex gap-2">
                  {/* ❌ Remove */}
                  <button
                    type="button"
                    onClick={() => form.setFieldValue(name, null)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>

                  {/* 🔁 Replace */}
                  <label className="text-blue-600 text-xs cursor-pointer hover:underline">
                    Replace
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const selectedFile = event.currentTarget.files[0];
                        if (selectedFile) {
                          form.setFieldValue(name, selectedFile);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* 🚨 Validation Error */}
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </div>
      );
    }}
  </Field>
);
