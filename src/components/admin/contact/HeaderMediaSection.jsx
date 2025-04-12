import React from "react";
import { Field, useFormikContext } from "formik";

const HeaderMediaSection = () => {
  const { values } = useFormikContext();

  return (
    <section className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Header Media</h3>
      {values.headerMedia.image.url && (
        <img
          src={values.headerMedia.image.url}
          alt="Preview"
          className="w-[fit-content] h-[200px] object-contain   mt-2 "
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alt Text
          </label>
          <Field
            name="headerMedia.image.alt"
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Header Height
          </label>
          <Field
            name="headerMedia.height"
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Overlay Gradient
          </label>
          <Field
            name="headerMedia.overlay.gradient"
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>
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
              className=" w-full md:w-[30%] h-2 rounded-lg appearance-none bg-zinc-200 accent-indigo-600 cursor-pointer"
            />
            <span className="text-sm text-zinc-600">
              {values.headerMedia.overlay.opacity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMediaSection;
