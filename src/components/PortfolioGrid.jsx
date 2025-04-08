import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import MediaDisplay from "./MediaDisplay";

const PortfolioGrid = ({ onHover, onLeave, selectedCategory = "all" }) => {
  // Filter projects by selected category
  const filteredProjects = projects.filter(
    (project) =>
      (project.status !== "offline" && selectedCategory === "all") ||
      project.projectType === selectedCategory
  );

  // Sort by admin-defined order
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="magazine-grid">
      {sortedProjects.map((project) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="magazine-item block relative"
          onMouseEnter={() => onHover(project.title)}
          onMouseLeave={onLeave}
        >
          <MediaDisplay
            item={{
              ...project.media,
              url: project.media.previewUrl || project.media.url, // use gif if available
            }}
            className="w-full h-auto"
          />
          <div className="magazine-overlay" />
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;
