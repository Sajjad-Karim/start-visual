import React from "react";
import PropTypes from "prop-types";

const Spinner = ({
  size = "md",
  color = "zinc-900",
  message = "",
  fullScreen = false,
  center = false,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-4",
    xl: "w-12 h-12 border-4",
  };

  const spinner = (
    <div
      className={`flex flex-col items-center ${center ? "justify-center" : ""}`}
    >
      <div
        className={`${sizeClasses[size]} border-${color} border-t-transparent rounded-full animate-spin`}
      />
      {message && <p className="mt-2 text-sm text-zinc-500">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60">
        {spinner}
      </div>
    );
  }

  return spinner;
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  color: PropTypes.string,
  message: PropTypes.string,
  fullScreen: PropTypes.bool,
  center: PropTypes.bool,
};

export default Spinner;
