import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { aboutContent } from "../data/about";
import { useColors } from "../contexts/ColorContext";

const About = () => {
  const { updateColors } = useColors();

  useEffect(() => {
    updateColors(
      aboutContent.hero.style.backgroundColor,
      aboutContent.hero.style.textColor
    );

    return () => {
      updateColors("#1A1A1A", "#FFFFFF");
    };
  }, [updateColors]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* START VISUAL text */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 z-10">
        <h1 className="text-lg md:text-xl lg:text-3xl font-syncopate tracking-[0.2em]">
          START VISUAL
        </h1>
      </div>

      {/* Hero Section */}
      <div
        className="w-full min-h-[400px] md:h-[605px] flex items-center justify-center px-4 md:px-0 pt-24 md:pt-0 pb-16 md:pb-0"
        style={{
          backgroundColor: aboutContent.hero.style.backgroundColor,
        }}
      >
        <div
          className="w-full text-center py-16 md:py-0"
          style={{
            maxWidth: "64rem",
            padding: `0 4rem`,
          }}
        >
          {aboutContent.hero.style.showTitle !== false &&
            aboutContent.hero.title && (
              <h2
                style={{
                  fontFamily: aboutContent.hero.style.titleFont.family,
                  fontSize: aboutContent.hero.style.titleFont.size,
                  fontWeight: aboutContent.hero.style.titleFont.weight,
                  letterSpacing:
                    aboutContent.hero.style.titleFont.letterSpacing,
                  color: aboutContent.hero.style.textColor,
                }}
                className="mb-8 text-2xl md:text-4xl"
              >
                {aboutContent.hero.title}
              </h2>
            )}
          <p
            style={{
              fontFamily: aboutContent.hero.style.textFont.family,
              fontWeight: aboutContent.hero.style.textFont.weight,
              letterSpacing: aboutContent.hero.style.textFont.letterSpacing,
              color: aboutContent.hero.style.textColor,
              textAlign: "justify",
              hyphens: "auto",
            }}
            className="text-sm md:text-base lg:text-lg px-4 md:px-0"
          >
            {aboutContent.hero.text}
          </p>
        </div>
      </div>

      {/* Checkered Sections */}
      {aboutContent.sections.map((section, index) => (
        <div key={section.id} className="grid grid-cols-1 md:grid-cols-2">
          {/* Text Section */}
          <div
            className={`flex items-center justify-center p-8 md:p-0 ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
            style={{
              backgroundColor: section.style.backgroundColor,
              color: section.style.textColor,
            }}
          >
            <div
              className="w-full"
              style={{
                maxWidth: "32rem",
                padding: `2rem "4rem"`,
              }}
            >
              {section.style.showTitle !== false && (
                <h2
                  style={{
                    fontFamily: section.style.titleFont.family,
                    fontWeight: section.style.titleFont.weight,
                    letterSpacing: section.style.titleFont.letterSpacing,
                  }}
                  className="mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl"
                >
                  {section.title}
                </h2>
              )}
              <p
                style={{
                  fontFamily: section.style.textFont.family,
                  fontWeight: section.style.textFont.weight,
                  letterSpacing: section.style.textFont.letterSpacing,
                  textAlign: "justify",
                  hyphens: "auto",
                }}
                className="text-sm md:text-base"
              >
                {section.text}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`h-[300px] md:h-[600px] ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <img
              src={section.image.url}
              alt={section.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      <Footer
        backgroundColor={aboutContent.hero.style.backgroundColor}
        textColor={aboutContent.hero.style.textColor}
      />
    </div>
  );
};

export default About;
