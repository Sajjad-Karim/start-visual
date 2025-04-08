export const defaultTitleBarStyle = {
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
  fontSize: "1rem",
  padding: "1rem 3rem",
  fontWeight: "500",
  letterSpacing: "0.1em",
};

// Preset styles that admin can choose from
export const titleBarPresets = {
  default: defaultTitleBarStyle,
  minimal: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    fontSize: "0.875rem",
    padding: "0.75rem 2rem",
    fontWeight: "400",
    letterSpacing: "0.05em",
  },
  bold: {
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
    fontSize: "1.125rem",
    padding: "1.25rem 3rem",
    fontWeight: "600",
    letterSpacing: "0.15em",
  },
  accent: {
    backgroundColor: "#2C5530",
    textColor: "#FFFFFF",
    fontSize: "1rem",
    padding: "1rem 3rem",
    fontWeight: "500",
    letterSpacing: "0.1em",
  },
};
