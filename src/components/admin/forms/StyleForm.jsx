import React from "react";
import { Formik } from "formik";

const StyleForm = () => {
  return (
    <Formik
      initialValues={{
        style: {
          backgroundColor: "#1A1A1A",
          textColor: "#FFFFFF",
          creditStyles: {
            fontSize: "0.875rem",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FF69B4",
          },
        },
      }}
      onSubmit={(values) => {
        console.log("🎨 Style Object:", values.style);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            Project Style Settings
          </h2>

          {/* General Styling */}
          <div className="flex gap-12 ">
            <div className="flex  items-center gap-2">
              <label className="block text-sm font-medium mb-1">
                Background Color :
              </label>
              <input
                type="color"
                name="style.backgroundColor"
                value={values.style.backgroundColor}
                onChange={handleChange}
                className="w-12 h-10 cursor-pointer border rounded"
              />
            </div>

            <div className="flex  items-center gap-2">
              <label className="block font-bold text-sm font-medium mb-1">
                Text Color :
              </label>
              <input
                type="color"
                name="style.textColor"
                value={values.style.textColor}
                onChange={handleChange}
                className="w-12 h-10 border cursor-pointer rounded"
              />
            </div>
          </div>

          {/* Credits Styling */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-800 pt-4">
              Credits Styling
            </h3>
            <p className="text-sm text-zinc-500 mb-3">
              Customize how the credit section appears
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Font Size (e.g. 0.875rem)
                </label>
                <input
                  type="text"
                  name="style.creditStyles.fontSize"
                  value={values.style.creditStyles.fontSize}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Font Family
                </label>
                <input
                  type="text"
                  name="style.creditStyles.fontFamily"
                  value={values.style.creditStyles.fontFamily}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Font Weight
                </label>
                <input
                  type="text"
                  name="style.creditStyles.fontWeight"
                  value={values.style.creditStyles.fontWeight}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Letter Spacing
                </label>
                <input
                  type="text"
                  name="style.creditStyles.letterSpacing"
                  value={values.style.creditStyles.letterSpacing}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Text Transform
                </label>
                <select
                  name="style.creditStyles.textTransform"
                  value={values.style.creditStyles.textTransform}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="none">None</option>
                  <option value="uppercase">Uppercase</option>
                  <option value="lowercase">Lowercase</option>
                  <option value="capitalize">Capitalize</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Font Color
                </label>
                <input
                  type="color"
                  name="style.creditStyles.color"
                  value={values.style.creditStyles.color}
                  onChange={handleChange}
                  className="w-12 h-10 border rounded"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 text-right">
            <button
              type="submit"
              className="bg-zinc-900 text-white px-6 py-2 rounded hover:bg-zinc-800 text-sm"
            >
              Save Style
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default StyleForm;
