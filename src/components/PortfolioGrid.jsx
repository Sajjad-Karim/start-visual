import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import MediaDisplay from "./MediaDisplay";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../features/project/project.actions";

const PortfolioGrid = ({ onHover, onLeave, selectedCategory = "all" }) => {
  const dispatch = useDispatch();
  const { projectMedia } = useSelector((state) => state?.project);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const allProjects = projectMedia?.flatMap((portfolio) => portfolio);
  // Apply category filter
  const filteredProjects = allProjects.filter(
    (project) =>
      project.status !== "offline" &&
      (selectedCategory === "all" || project.projectType === selectedCategory)
  );

  // Sort by admin-defined order
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="magazine-grid">
      {sortedProjects.map((project) => (
        <Link
          key={project._id}
          to={`/project/${project._id}`}
          className={`magazine-item block relative ${
            project?.media?.displaySize === "full"
              ? "magazine-full"
              : "magazine-half"
          }`}
          onMouseEnter={() => onHover(project.title)}
          onMouseLeave={onLeave}
        >
          <MediaDisplay
            item={{
              ...project.media,
              url: project?.media?.previewUrl || project?.media?.url, // use gif if available
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
