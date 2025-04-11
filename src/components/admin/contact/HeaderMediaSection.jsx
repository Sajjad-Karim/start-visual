import React from "react";
import { Field, useFormikContext } from "formik";

const HeaderMediaSection = () => {
  const { values } = useFormikContext();

  return (
    <section className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Header Media</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <Field
            name="headerMedia.image.url"
            className="w-full border border-zinc-300 rounded p-2"
            placeholder="https://..."
          />
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
          <Field
            name="headerMedia.overlay.opacity"
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderMediaSection;
