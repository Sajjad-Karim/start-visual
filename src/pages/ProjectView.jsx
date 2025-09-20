import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MediaDisplay from "../components/MediaDisplay";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProjectBySlug } from "../features/project/project.actions";
import Spinner from "../components/Spinner";

const ProjectView = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const {
    // projectMedia,
    projectBySlug,
    isGetProjectBySlugLoading,
  } = useSelector((state) => state?.project);
  useEffect(() => {
    dispatch(getProjectBySlug(slug));
  }, [dispatch, slug]);

  // const allProjects = projectMedia?.flatMap((p) => p);
  // const project = allProjects.find((p) => p._id === id);

  if (isGetProjectBySlugLoading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!projectBySlug && !isGetProjectBySlugLoading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        Project not found
      </div>
    );
  }

  const sortedGallery = [...projectBySlug.gallery]
    .filter((item) => !item.isMain) // exclude isMain === true
    .sort((a, b) => a.order - b.order);
  const sortedCredits = [...projectBySlug.credits].sort(
    (a, b) => a.order - b.order
  );

  const creditStyle = projectBySlug.style.creditStyles || {
    fontSize: "0.875rem",
    fontFamily: "sans-serif",
    fontWeight: "400",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#87CEEB",
  };
  const backgroundColor = projectBySlug.style.backgroundColor;
  const textColor = projectBySlug.style.textColor;

  return (
    <div style={{ backgroundColor }} className="min-h-screen">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
          <MediaDisplay
            item={projectBySlug?.media}
            priority={true}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Info Column */}
        <div
          className="w-full md:w-1/2 min-h-[50vh] md:h-[100vh] relative p-8 md:p-16"
          style={{ backgroundColor }}
        >
          <div className="md:absolute md:inset-16 flex flex-col justify-between">
            {/* Title and Description */}
            <div
              className="text-center mb-8 md:mb-0"
              style={{ color: textColor }}
            >
              <h1 className="text-2xl md:text-[42px] leading-tight font-bold mb-4 md:mb-8">
                {projectBySlug?.title}
              </h1>
              {projectBySlug?.description && (
                <p className="text-base md:text-lg leading-relaxed mt-4 md:mt-6">
                  {projectBySlug?.description}
                </p>
              )}
            </div>

            {/* Credits */}
            <div className="space-y-4 md:space-y-6">
              {sortedCredits?.map((credit, index) => (
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
              {projectBySlug?.location && (
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
                  <span>{projectBySlug?.location}</span>
                </div>
              )}
              {projectBySlug?.year && (
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
                  <span>{projectBySlug?.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex flex-wrap">
        {(() => {
          const elements = [];

          for (let i = 0; i < sortedGallery.length; i++) {
            const item = sortedGallery[i];

            if (item.displaySize === "full") {
              elements.push(
                // For full images (previously h-[50vh] md:h-[1211px]) //aspect-[1509/1211] md:aspect-[1509/1211]
                <div
                  key={i}
                  className="w-full flex items-center justify-center bg-black"
                >
                  <MediaDisplay
                    item={item}
                    className="w-full h-auto object-contain"
                  />
                </div>
              );
            } else if (item.displaySize === "half") {
              const next = sortedGallery[i + 1];

              // If next exists and is also half, render both
              if (next && next.displaySize === "half") {
                elements.push(
                  <div key={i} className="flex w-full">
                    <div className="w-1/2 flex items-center justify-center bg-black">
                      <MediaDisplay
                        item={item}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="w-1/2 flex items-center justify-center bg-black">
                      <MediaDisplay
                        item={next}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                );
                i++; // skip next since it's already rendered
              } else {
                // If there's no next half, center it
                elements.push(
                  <div key={i} className="flex w-full justify-center">
                    <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
                      <MediaDisplay
                        item={item}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                );
              }
            }
          }

          return elements;
        })()}
      </div>

      <Footer backgroundColor={backgroundColor} textColor={creditStyle.color} />
    </div>
  );
};

export default ProjectView;
