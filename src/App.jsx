import React, { useState, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { portfolios } from "./data/projects";
import NavigationMenu from "./components/NavigationMenu";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import { ColorProvider } from "./contexts/ColorContext";
import Dashboard from "./pages/admin/Dashboard";
import HeroMedia from "./pages/admin/HeroMedia";
import ProjectsList from "./pages/admin/ProjectsList";

import AboutEditor from "./pages/admin/AboutEditor";
import ContactEditor from "./pages/admin/ContactEditor";
import AdminLayout from "./components/admin/AdminLayout";
import AddProjects from "./pages/admin/AddProjects";
import EditProject from "./pages/admin/EditProject";
import { aboutContent } from "./data/about";
import ReduxProvider from "./store/Provider";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "./features/about/about.action";
// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const ProjectView = React.lazy(() => import("./pages/ProjectView"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));

function StarButton({ color = "white", onMenuToggle }) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    aboutData,
    isSaveAboutLoading,
    isSaveAboutSuccess,
    isSaveAboutFailed,
    error,
    message,
  } = useSelector((state) => state.about);
  const handleClick = () => {
    setRotation((prev) => prev + 90);
    onMenuToggle();
  };
  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  console.log(aboutData);

  const isAdminRoute = pathname.startsWith("/admin");

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
    !isAdminRoute && (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-12 md:w-16 h-12 md:h-16 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out relative"
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
    )
  );
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { pathname } = useLocation();

  const { aboutData } = useSelector((state) => state.about);

  let starColor = "white";

  if (pathname.startsWith("/project/")) {
    const id = pathname.split("/")[2];
    const allProjects = portfolios.flatMap((portfolio) => portfolio.projects);
    const project = allProjects.find((p) => p.id === Number(id));
    if (project?.style?.creditStyles?.color) {
      starColor = project.style.creditStyles.color;
    }
  } else if (pathname === "/about" && aboutData?.[0]) {
    starColor = aboutData[0]?.hero?.style?.textColor || "white";
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
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="hero-media" element={<HeroMedia />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="add-project" element={<AddProjects />} />
              <Route path="edit-project/:id" element={<EditProject />} />
              <Route path="about" element={<AboutEditor />} />
              <Route path="contact" element={<ContactEditor />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <ReduxProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <ColorProvider>
          <ScrollToTop />
          <AppContent />
        </ColorProvider>
      </Router>
    </ReduxProvider>
  );
}

export default App;
