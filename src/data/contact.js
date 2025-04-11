export const contactConfig = {
  style: {
    backgroundColor: "#1A1A1A", // still dynamic
    textColor: "#FFFFFF", // still dynamic
    titleFont: {
      family: "Syncopate, sans-serif",
      fontStyle: "normal",
    },
    textFont: {
      family: "Inter, sans-serif",
      fontStyle: "normal",
    },
  },
  headerMedia: {
    type: "image",
    height: "322px",
    image: {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1473&h=322",
      alt: "World Map",
    },
    overlay: {
      opacity: 0.6,
      gradient: "linear-gradient(to bottom, #1A1A1A, transparent, #1A1A1A)",
    },
  },

  locations: [
    {
      city: "NEW YORK",
      address: ["99 Wall Street, Suite 3336"],
      phones: ["+1 212-951-0359", "+1 212-555-0123"],
      zipCode: "10005",
      email: ["info@start-visual.xyz", "ny@start-visual.xyz"],
      order: 1,
    },
    {
      city: "LOS ANGELES",
      address: ["456 Sunset Boulevard"],
      zipCode: "90028",
      email: ["la@start-visual.xyz"],
      phones: ["+1 323-555-0189"],
      order: 2,
    },
    {
      city: "MIAMI",
      address: ["123 Ocean Drive"],
      zipCode: "33139",
      phones: ["+1 305-555-0123", "+1 305-555-0124"],
      email: ["miami@start-visual.xyz", "info.mia@start-visual.xyz"],
      order: 3,
    },
    {
      city: "CHICAGO",
      address: ["789 Michigan Avenue"],
      zipCode: "60601",
      phones: ["+1 312-555-0189"],
      email: ["chicago@start-visual.xyz"],
      order: 4,
    },
  ],
};

// Alternate version: solid color header background
export const colorBoxExample = {
  ...contactConfig,
  headerMedia: {
    type: "color",
    height: "322px",
    color: {
      background: "#2C5530",
      pattern:
        "linear-gradient(45deg, #2C5530 25%, #234226 25%, #234226 50%, #2C5530 50%, #2C5530 75%, #234226 75%, #234226 100%)",
    },
  },
};
