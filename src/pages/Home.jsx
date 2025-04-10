import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VideoHeader from "../components/VideoHeader";
import PortfolioGrid from "../components/PortfolioGrid";
import Footer from "../components/Footer";
import { defaultTitleBarStyle } from "../data/titleBarStyles";

function Home({ selectedCategory }) {
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
      {/* Only show hero section when no category is selected */}
      {selectedCategory === "all" && (
        <div className="fixed inset-0 z-0">
          <VideoHeader />
        </div>
      )}

      <div
        className={`relative ${
          selectedCategory === "all" ? "min-h-screen" : ""
        }`}
      >
        {selectedCategory === "all" && (
          <div className="h-screen" aria-hidden="true" />
        )}

        {/* Navigation Header */}
        <div
          className={`sticky top-0 z-20 transition-all duration-300 ${
            isScrolled ? "shadow-md" : ""
          }`}
          style={{ backgroundColor: titleBarStyle.backgroundColor }}
        >
          <div className="h-16 flex items-center justify-between px-8">
            {/* Left: ABOUT + CONTACT */}
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

            {/* Right: ALL WORK or hovered project title */}
            <div className="flex-1 text-right">
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
          </div>
        </div>

        <main className="relative bg-zinc-900 z-10">
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
    </div>
  );
}

export default Home;
