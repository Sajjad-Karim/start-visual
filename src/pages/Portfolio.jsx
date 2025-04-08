import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioGrid from "../components/PortfolioGrid";
import Footer from "../components/Footer";
import { defaultTitleBarStyle } from "../data/titleBarStyles";

function Portfolio({ selectedCategory }) {
  const [hoveredTitle, setHoveredTitle] = useState(
    selectedCategory === "motion"
      ? "MOTION"
      : selectedCategory === "photo"
      ? "PHOTO"
      : "ALL WORK"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [titleBarStyle, setTitleBarStyle] = useState(defaultTitleBarStyle);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHoveredTitle(
      selectedCategory === "motion"
        ? "MOTION"
        : selectedCategory === "photo"
        ? "PHOTO"
        : "ALL WORK"
    );
  }, [selectedCategory]);

  const handleGridItemLeave = () => {
    setHoveredTitle(
      selectedCategory === "motion"
        ? "MOTION"
        : selectedCategory === "photo"
        ? "PHOTO"
        : "ALL WORK"
    );
  };

  return (
    <div className="bg-zinc-900 text-white">
      {/* Navigation Header */}
      <div
        className={`sticky top-0 z-20 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        style={{
          backgroundColor: titleBarStyle.backgroundColor,
        }}
      >
        <div className="h-16 flex items-center justify-between px-8">
          {/* Left: Title */}
          <div className="flex-1">
            <Link
              to="/portfolio"
              className="tracking-wider uppercase transition-all duration-300"
              style={{
                color: titleBarStyle.textColor,
                fontSize: titleBarStyle.fontSize,
                fontWeight: titleBarStyle.fontWeight,
                letterSpacing: titleBarStyle.letterSpacing,
              }}
            >
              {hoveredTitle}
            </Link>
          </div>

          {/* Right: Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/about"
              className="tracking-wider uppercase opacity-70 hover:opacity-100 transition-all duration-300"
              style={{ color: titleBarStyle.textColor }}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="tracking-wider uppercase opacity-70 hover:opacity-100 transition-all duration-300"
              style={{ color: titleBarStyle.textColor }}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      <main>
        <section id="work">
          <PortfolioGrid
            onHover={(title) => setHoveredTitle(title)}
            onLeave={handleGridItemLeave}
            selectedCategory={selectedCategory}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
