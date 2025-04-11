import React from "react";
import { Field } from "formik";

const fontOptions = [
  "Syncopate, sans-serif",
  "Inter, sans-serif",
  "Arial, sans-serif",
  "Georgia, serif",
  "Courier New, monospace",
];

const PageStyleSection = () => (
  <section className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">Page Style</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Background Color
        </label>
        <Field
          name="style.backgroundColor"
          type="color"
          className="w-full h-10 border cursor-pointer border-zinc-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Text Color
        </label>
        <Field
          name="style.textColor"
          type="color"
          className="w-full h-10 border cursor-pointer border-zinc-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Title Font
        </label>
        <Field
          as="select"
          name="style.titleFont.family"
          className="w-full border cursor-pointer border-zinc-300 rounded p-2"
        >
          {fontOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </Field>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Text Font
        </label>
        <Field
          as="select"
          name="style.textFont.family"
          className="w-full border cursor-pointer border-zinc-300 rounded p-2"
        >
          {fontOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </Field>
      </div>
    </div>
  </section>
);

export default PageStyleSection;
