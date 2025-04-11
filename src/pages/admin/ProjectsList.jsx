import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolios as staticPortfolios } from "../../data/projects";

const ProjectList = () => {
  const navigate = useNavigate();

  // Clone static data into local state for interactivity
  const [projects, setProjects] = useState(() => {
    return staticPortfolios.flatMap((portfolio) => portfolio.projects || []);
  });

  // Sort projects by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  // Toggle status handler
  const handleToggleStatus = (id) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id
          ? { ...proj, status: proj.status === "online" ? "offline" : "online" }
          : proj
      )
    );
  };

  const handleDelete = (project) => {
    console.log("Delete:", project.id);
  };

  // const handlePreview = (project) => {
  //   console.log("Preview:", project.id);
  // };

  return (
    <section className="px-6 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
          Project List
        </h2>
        <p className="text-sm text-zinc-600">
          Browse and manage all projects. You can edit, delete, or toggle their
          online status.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => {
          const thumbnail =
            project.media?.posterUrl || project.media?.url || "";

          return (
            <li
              key={project.id}
              className="bg-white rounded-xl shadow overflow-hidden flex flex-col"
            >
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt={project.media?.alt || project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.projectType} &bull; {project.year} &bull;{" "}
                  {project.client}
                </p>
                <p
                  className={`text-sm font-medium mb-3 ${
                    project.status === "online"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Status: {project.status}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/admin/edit-project/${project.id}`)
                    }
                    className="bg-black text-white px-4 py-2 cursor-pointer rounded hover:bg-gray-800 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleStatus(project.id)}
                    className={`cursor-pointer ${
                      project.status === "online"
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white px-4 py-2 rounded text-sm`}
                  >
                    {project.status === "online" ? "Set Offline" : "Set Online"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(project)}
                    className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>

                  {/* <button
                    type="button"
                    onClick={() => handlePreview(project)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm"
                  >
                    Preview
                  </button> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectList;
