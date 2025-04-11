import React from "react";

const StyleForm = ({ values, handleChange }) => {
  return (
    <div className="bg-white border rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Style Settings</h2>

      <div className="flex gap-6">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Background Color : </label>
          <input
            type="color"
            name="style.backgroundColor"
            value={values.style.backgroundColor}
            onChange={handleChange}
            className="w-12 h-10 border rounded-md cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium ">Text Color : </label>
          <input
            type="color"
            name="style.textColor"
            value={values.style.textColor}
            onChange={handleChange}
            className="w-12 h-10 border rounded-md cursor-pointer"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Credit Styles</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "fontSize",
            "fontFamily",
            "fontWeight",
            "letterSpacing",
            "textTransform",
            "color",
          ].map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-1">
                {key === "color" ? "Font Color" : key}
              </label>
              {key === "textTransform" ? (
                <select
                  name={`style.creditStyles.${key}`}
                  value={values.style.creditStyles[key]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="none">None</option>
                  <option value="uppercase">Uppercase</option>
                  <option value="lowercase">Lowercase</option>
                  <option value="capitalize">Capitalize</option>
                </select>
              ) : (
                <input
                  type={key === "color" ? "color" : "text"}
                  name={`style.creditStyles.${key}`}
                  value={values.style.creditStyles[key]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleForm;
