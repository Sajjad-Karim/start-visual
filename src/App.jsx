import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { projects } from "./data/projects";
import NavigationMenu from "./components/NavigationMenu";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import { ColorProvider } from "./contexts/ColorContext";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const ProjectView = React.lazy(() => import("./pages/ProjectView"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));

function StarButton({ color = "white", onMenuToggle }) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((prev) => prev + 90);
    onMenuToggle();
  };

  const generateStarPoints = () => {
    const outer = 40,
      inner = 20,
      center = 50,
      points = [];
    for (let i = 0; i < 9; i++) {
      const a = (i * 40 * Math.PI) / 180;
      const b = ((i * 40 + 20) * Math.PI) / 180;
      points.push(center + outer * Math.cos(a), center + outer * Math.sin(a));
      points.push(center + inner * Math.cos(b), center + inner * Math.sin(b));
    }
    return points.join(" ");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-12 md:w-16 h-12 md:h-16 hover:scale-110 transition-all duration-300 ease-in-out relative"
      aria-label="Toggle menu"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-all duration-500"
        style={{
          transform: `rotate(${rotation + (isHovering ? 45 : 0)}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <polygon
          points={generateStarPoints()}
          fill={color}
          stroke={color}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="54"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color === "white" ? "#000" : "#fff"}
          style={{
            fontSize: "16px",
            fontFamily: "Didot, serif",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          transform={`rotate(${-rotation - (isHovering ? 45 : 0)}, 50, 50)`}
        >
          SV
        </text>
      </svg>
    </button>
  );
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { pathname } = useLocation();

  let starColor = "white";
  if (pathname.startsWith("/project/")) {
    const id = pathname.split("/")[2];
    const project = projects.find((p) => p.id === Number(id));
    if (project?.style?.creditStyles?.color) {
      starColor = project.style.creditStyles.color;
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="fixed top-12 md:top-16 right-4 md:right-8 z-50">
        <StarButton color={starColor} onMenuToggle={toggleMenu} />
      </div>

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={<Home selectedCategory={selectedCategory} />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio selectedCategory={selectedCategory} />}
            />
            <Route path="/project/:id" element={<ProjectView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <Router>
      <ColorProvider>
        <ScrollToTop />
        <AppContent />
      </ColorProvider>
    </Router>
  );
}

export default App;
