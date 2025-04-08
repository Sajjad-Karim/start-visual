import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import MediaDisplay from "../components/MediaDisplay";
import Footer from "../components/Footer";

const ProjectView = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const sortedGallery = [...project.gallery].sort((a, b) => a.order - b.order);
  const sortedCredits = [...project.credits].sort((a, b) => a.order - b.order);

  const creditStyle = project.style.creditStyles || {
    fontSize: "0.875rem",
    fontFamily: "sans-serif",
    fontWeight: "400",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#87CEEB",
  };

  const backgroundColor = project.style.backgroundColor;
  const textColor = project.style.textColor;

  return (
    <div style={{ backgroundColor }} className="min-h-screen">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[934px]">
          <MediaDisplay
            item={project.media}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Info Column */}
        <div
          className="w-full md:w-1/2 min-h-[50vh] md:h-[934px] relative p-8 md:p-16"
          style={{ backgroundColor }}
        >
          <div className="md:absolute md:inset-16 flex flex-col justify-between">
            {/* Title and Description */}
            <div
              className="text-center mb-8 md:mb-0"
              style={{ color: textColor }}
            >
              <h1 className="text-2xl md:text-[42px] leading-tight font-bold mb-4 md:mb-8">
                {project.title}
              </h1>
              {project.description && (
                <p className="text-base md:text-lg leading-relaxed mt-4 md:mt-6">
                  {project.description}
                </p>
              )}
            </div>

            {/* Credits */}
            <div className="space-y-4 md:space-y-6">
              {sortedCredits.map((credit, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center"
                  style={{
                    fontSize: creditStyle.fontSize,
                    fontFamily: creditStyle.fontFamily,
                    fontWeight: creditStyle.fontWeight,
                    letterSpacing: creditStyle.letterSpacing,
                    textTransform: creditStyle.textTransform,
                    color: creditStyle.color,
                  }}
                >
                  <span>{credit.role}</span>
                  <span>{credit.name}</span>
                </div>
              ))}

              {/* Location & Year */}
              <div
                className="flex justify-between items-center pt-4 md:pt-6"
                style={{
                  fontSize: creditStyle.fontSize,
                  fontFamily: creditStyle.fontFamily,
                  fontWeight: creditStyle.fontWeight,
                  letterSpacing: creditStyle.letterSpacing,
                  textTransform: creditStyle.textTransform,
                  color: creditStyle.color,
                }}
              >
                <span>LOCATION</span>
                <span>{project.location}</span>
              </div>
              <div
                className="flex justify-between items-center"
                style={{
                  fontSize: creditStyle.fontSize,
                  fontFamily: creditStyle.fontFamily,
                  fontWeight: creditStyle.fontWeight,
                  letterSpacing: creditStyle.letterSpacing,
                  textTransform: creditStyle.textTransform,
                  color: creditStyle.color,
                }}
              >
                <span>YEAR</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex flex-wrap">
        {sortedGallery.map((item, index) => {
          const size = item.displaySize || "full";

          if (size === "full") {
            return (
              <div key={index} className="w-full">
                <MediaDisplay
                  item={item}
                  className="w-full h-[50vh] md:h-[1211px] object-cover"
                />
              </div>
            );
          }

          if (size === "half") {
            const next = sortedGallery[index + 2];
            return (
              <div key={index} className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 h-[50vh] md:h-[934px]">
                  <MediaDisplay
                    item={item}
                    className="w-full h-full object-cover"
                  />
                </div>
                {next && next.displaySize === "half" && (
                  <div className="w-full md:w-1/2 h-[50vh] md:h-[934px]">
                    <MediaDisplay
                      item={next}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      <Footer backgroundColor={backgroundColor} textColor={creditStyle.color} />
    </div>
  );
};

export default ProjectView;
