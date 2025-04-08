import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const NavigationMenu = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategorySelect,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    navigate("/", { replace: true });
    window.scrollTo(0, 0);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-zinc-900/95 z-50">
      {/* START VISUAL text */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8">
        <h1 className="text-lg md:text-3xl font-syncopate tracking-[0.2em] text-white">
          START VISUAL
        </h1>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 md:top-8 right-4 md:right-8 text-white hover:text-gray-300 transition-colors"
        aria-label="Close menu"
      >
        <X size={24} className="md:w-8 md:h-8" />
      </button>

      <nav className="absolute bottom-16 md:bottom-32 right-4 md:right-8 text-right">
        <ul className="space-y-6 md:space-y-8">
          <li>
            <Link
              to="/about"
              onClick={onClose}
              className="text-xl md:text-2xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block opacity-70 hover:opacity-100"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={onClose}
              className="text-xl md:text-2xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block opacity-70 hover:opacity-100"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <div className="space-y-4">
              <button
                onClick={() => handleCategoryClick("all")}
                className={`text-xl md:text-2xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block w-full text-right ${
                  selectedCategory === "all" ? "opacity-100" : "opacity-70"
                }`}
              >
                ALL WORK
              </button>
              <div className="space-y-2 pl-4">
                <button
                  onClick={() => handleCategoryClick("motion")}
                  className={`text-lg md:text-xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block w-full text-right ${
                    selectedCategory === "motion" ? "opacity-100" : "opacity-70"
                  }`}
                >
                  MOTION
                </button>
                <button
                  onClick={() => handleCategoryClick("photo")}
                  className={`text-lg md:text-xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block w-full text-right ${
                    selectedCategory === "photo" ? "opacity-100" : "opacity-70"
                  }`}
                >
                  PHOTO
                </button>
                <button
                  onClick={() => handleCategoryClick("special")}
                  className={`text-lg md:text-xl font-syncopate text-white hover:text-gray-300 transition-colors tracking-widest block w-full text-right ${
                    selectedCategory === "special"
                      ? "opacity-100"
                      : "opacity-70"
                  }`}
                >
                  SPECIAL PROJECTS
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
