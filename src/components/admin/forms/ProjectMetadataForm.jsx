// ProjectMetadataForm.jsx

import React from "react";

const ProjectMetadataForm = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
      <h2 className="text-xl font-semibold text-zinc-900">Project Metadata</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "title",
            label: "Project Title",
            placeholder: "e.g. Wild Forest Expedition",
          },
          {
            name: "projectType",
            label: "Project Type",
            type: "select",
            options: ["photo", "motion", "special"],
          },
          {
            name: "status",
            label: "Project Status",
            type: "select",
            options: ["online", "offline"],
          },
          {
            name: "order",
            label: "Grid Order",
            type: "number",
            placeholder: "e.g. 1",
          },
          {
            name: "client",
            label: "Client Name",
            placeholder: "e.g. National Geographic",
          },
          {
            name: "year",
            label: "Project Year",
            type: "number",
            placeholder: "e.g. 2024",
          },
          {
            name: "location",
            label: "Project Location",
            full: true,
            placeholder: "e.g. Arctic Circle",
          },
        ].map(({ name, label, type = "text", options, full, placeholder }) => (
          <div className={full ? "md:col-span-2" : ""} key={name}>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              {label}
            </label>
            {type === "select" ? (
              <select
                name={name}
                value={values[name]}
                onChange={handleChange}
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
              >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                name={name}
                value={values[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
              />
            )}
            {errors[name] && touched[name] && (
              <div className="text-sm text-red-500 mt-1">{errors[name]}</div>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">
          Project Description
        </label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Brief summary of the project..."
          rows={4}
          className="w-full border border-zinc-300 rounded px-4 py-2 text-sm"
        />
        {errors.description && touched.description && (
          <div className="text-sm text-red-500 mt-1">{errors.description}</div>
        )}
      </div>
    </div>
  );
};

export default ProjectMetadataForm;
