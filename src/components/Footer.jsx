import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({
  backgroundColor = "#1A1A1A",
  textColor = "#FFFFFF",
  setSelectedCategory,
}) => {
  return (
    <footer style={{ backgroundColor }}>
      {/* START VISUAL Text */}
      <div className="mx-4 md:mx-12 pt-16 md:pt-24">
        <div className="pb-6">
          <Link
            to={"/"}
            onClick={() => setSelectedCategory("all")}
            className="text-lg md:text-3xl  font-syncopate tracking-[0.2em]"
            style={{ color: textColor }}
          >
            START VISUAL
          </Link>
        </div>
      </div>

      {/* First Line */}
      <div className="mx-4 md:mx-12">
        <div style={{ borderColor: textColor }} className="border-t"></div>
      </div>

      {/* Cities, Contact Info, and Instagram */}
      <div className="mx-4 md:mx-12">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-[14px]">
          {/* Left Side - New York */}
          <div className="w-full md:w-[200px] text-center md:text-left mb-4 md:mb-0">
            <Link
              to="/contact"
              className="text-xs md:text-sm tracking-widest hover:opacity-70 transition-colors"
              style={{ color: textColor }}
            >
              NEW YORK
            </Link>
          </div>

          {/* Center - Contact Info and Instagram */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <a
              href="mailto:info@start-visual.xyz"
              className="text-xs md:text-sm tracking-widest hover:opacity-70 transition-colors"
              style={{ color: textColor }}
            >
              info@start-visual.xyz
            </a>
            <a
              href="https://www.instagram.com/start_visual.xyz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-colors"
              aria-label="Instagram"
              style={{ color: textColor }}
            >
              <Instagram size={16} />
            </a>
            <a
              href="tel:+12129520359"
              className="text-xs md:text-sm tracking-widest hover:opacity-70 transition-colors"
              style={{ color: textColor }}
            >
              +1 (212) 952-0359
            </a>
          </div>

          {/* Right Side - Los Angeles */}
          <div className="w-full md:w-[200px] text-center md:text-right">
            <Link
              to="/contact"
              className="text-xs md:text-sm tracking-widest hover:opacity-70 transition-colors"
              style={{ color: textColor }}
            >
              LOS ANGELES
            </Link>
          </div>
        </div>
      </div>

      {/* Second Line */}
      <div className="mx-4 md:mx-12">
        <div style={{ borderColor: textColor }} className="border-t"></div>
      </div>

      {/* Copyright */}
      <div className="mx-4 md:mx-12">
        <div className="py-6 md:pt-8">
          <div
            className="text-[10px] md:text-xs opacity-50"
            style={{ color: textColor }}
          >
            © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
