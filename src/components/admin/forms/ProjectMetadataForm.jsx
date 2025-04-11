import React from "react";

const ProjectMetadataForm = ({ values, handleChange }) => {
  return (
    <div className="bg-white border rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Project Metadata</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "title", label: "Title" },
          {
            name: "projectType",
            label: "Project Type",
            type: "select",
            options: ["photo", "motion", "special"],
          },
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["online", "offline"],
          },
          { name: "order", label: "Order", type: "number" },
          { name: "client", label: "Client" },
          { name: "year", label: "Year", type: "number" },
          { name: "location", label: "Location", full: true },
        ].map(({ name, label, type = "text", options, full }) => (
          <div className={full ? "md:col-span-2" : ""} key={name}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            {type === "select" ? (
              <select
                name={name}
                value={values[name]}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 text-sm"
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
                className="w-full border rounded px-4 py-2 text-sm"
              />
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
};

export default ProjectMetadataForm;
