import { Field } from "formik";
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

// ✅ Color Input Component
export const ColorInput = ({ name, label }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              {...field}
              className="h-10  border border-zinc-300 rounded  text-sm w-16 cursor-pointer"
            />
            <input
              type="text"
              {...field}
              className={` border  md:w-full w-16 border-zinc-300 rounded px-4 py-2 text-sm ${
                meta.touched && meta.error
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
          </div>
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  </div>
);

// ✅ Font Input Group Component
export const FontInputs = ({ prefix, label }) => (
  <div className="space-y-2 border-2 border-zinc-200 p-4 rounded-md">
    <h3 className="font-medium">{label}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        name={`${prefix}.family`}
        label="Font Family"
        placeholder="e.g. Inter, sans-serif"
      />
      <InputField
        name={`${prefix}.size`}
        label="Font Size"
        placeholder="e.g. 1.5rem"
      />
      <InputField
        name={`${prefix}.weight`}
        label="Font Weight"
        placeholder="e.g. 600"
      />
      <InputField
        name={`${prefix}.letterSpacing`}
        label="Letter Spacing"
        placeholder="e.g. 0.05em"
      />
    </div>
  </div>
);

// ✅ Image Upload Field Component
export const ImageUploadField = ({ name, label }) => (
  <Field name={name}>
    {({ form, field, meta }) => {
      const file = field.value;
      const previewUrl =
        file && typeof file === "object" ? URL.createObjectURL(file) : null;

      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>

          {!previewUrl ? (
            <div className="relative border-2 border-dashed border-zinc-300 bg-zinc-50 rounded-lg p-6 text-center hover:border-zinc-400 transition">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  if (file) form.setFieldValue(name, file);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <p className="text-sm text-zinc-500">
                Click or drag an image to upload
              </p>
            </div>
          ) : (
            <div className="relative rounded-md overflow-hidden border border-zinc-300">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-48 object-contain bg-zinc-100"
              />

              <div className="flex justify-between items-center p-2 bg-zinc-50 border-t border-zinc-200">
                <span className="text-sm text-zinc-600 truncate">
                  {file.name}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => form.setFieldValue(name, null)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                  <label className="text-blue-600 text-xs cursor-pointer hover:underline">
                    Replace
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) form.setFieldValue(name, file);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </div>
      );
    }}
  </Field>
);
