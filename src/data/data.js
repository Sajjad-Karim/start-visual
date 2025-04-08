// Collection of nature-related media
const mediaContent = {
  images: [
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop",
  ],
  videos: [
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/735273384/rendition/1080p/file.mp4?loc=external&signature=e0fb71e52c0ebd4eacf9659fee24c25cde12725e2f787d1b543757505ed82991",
      poster: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/742274899/rendition/1080p/file.mp4?loc=external&signature=0f394d66c7614dd5fc46325d7c3c6d4f5d8c8d0a6c0d5e97a9296b5a0f42f8f1",
      poster: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    },
  ],
};

// Generate a random media item
const generateMediaItem = (size) => {
  const isVideo = Math.random() > 0.7;

  if (isVideo) {
    const randomVideo =
      mediaContent.videos[
        Math.floor(Math.random() * mediaContent.videos.length)
      ];
    return {
      type: "video",
      url: randomVideo.url,
      posterUrl: randomVideo.poster,
      width: size.width,
      height: size.height,
      alt: "Nature video content",
      order: Math.floor(Math.random() * 1000),
    };
  }

  const randomImage =
    mediaContent.images[Math.floor(Math.random() * mediaContent.images.length)];
  return {
    type: "image",
    url: `${randomImage}&w=${size.width}&h=${size.height}&fit=crop`,
    width: size.width,
    height: size.height,
    alt: "Nature photography",
    order: Math.floor(Math.random() * 1000),
    displaySize: "half", // or 'full
  };
};

// Generate gallery media items
const generateGallery = () => {
  return Array.from({ length: 10 }, () => {
    const isLandscape = Math.random() > 0.7;
    const size = isLandscape ? projectImageSizes[1] : projectImageSizes[0];
    return generateMediaItem(size);
  });
};

// Generate random credits
const generateCredits = (count) => {
  const shuffledRoles = [...roles].sort(() => Math.random() - 0.5);
  return shuffledRoles.slice(0, count).map((role, index) => ({
    role,
    name: `${
      ["Sarah", "John", "Maria", "Alex", "Emma"][Math.floor(Math.random() * 5)]
    } ${
      ["Johnson", "Smith", "Brown", "Davis", "Wilson"][
        Math.floor(Math.random() * 5)
      ]
    }`,
    order: index,
  }));
};

const natureThemes = [
  {
    title: "WILD SPIRITS",
    description:
      "Capturing the untamed beauty of African wildlife in their natural habitat.",
  },
  {
    title: "NORTHERN LIGHTS",
    description:
      "A mesmerizing display of nature's light show in the Arctic sky.",
  },
  {
    title: "FOREST DEPTHS",
    description:
      "Journey through ancient woodlands and their hidden mysteries.",
  },
  {
    title: "MOUNTAIN MAJESTY",
    description:
      "Towering peaks pierce the clouds in this dramatic landscape series.",
  },
  {
    title: "DESERT DREAMS",
    description:
      "The stark beauty of arid landscapes and their resilient inhabitants.",
  },
  {
    title: "OCEAN WONDERS",
    description: "Exploring the dynamic relationship between sea and shore.",
  },
];

const gridImageSizes = [
  { width: 570, height: 428 },
  { width: 570, height: 696 },
  { width: 570, height: 321 },
  { width: 570, height: 570 },
];

const projectImageSizes = [
  { width: 755, height: 934 },
  { width: 1509, height: 1211 },
];

const roles = [
  "Photographer",
  "Wildlife Expert",
  "Location Scout",
  "Conservation Specialist",
  "Drone Operator",
  "Field Guide",
  "Equipment Specialist",
  "Lighting Assistant",
  "Safety Coordinator",
  "Local Expert",
];

const styleSchemes = [
  {
    backgroundColor: "#2C5530",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Helvetica Neue, sans-serif",
      fontWeight: "400",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "#9FE2BF",
    },
  },
  {
    backgroundColor: "#2B4B5C",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.75rem",
      fontFamily: "Futura, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#87CEEB",
    },
  },
  {
    backgroundColor: "#8B4513",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Georgia, serif",
      fontWeight: "400",
      letterSpacing: "0.025em",
      textTransform: "none",
      color: "#FFA07A",
    },
  },
  {
    backgroundColor: "#4A5568",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.75rem",
      fontFamily: "Avenir, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#87CEEB",
    },
  },
  {
    backgroundColor: "#1A1A1A",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#FF69B4",
    },
  },
  {
    backgroundColor: "#4B0082",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.75rem",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#98FB98",
    },
  },
  {
    backgroundColor: "#2D3436",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#E84393",
    },
  },
  {
    backgroundColor: "#006D77",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.75rem",
      fontFamily: "DM Sans, sans-serif",
      fontWeight: "400",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#FFD93D",
    },
  },
  {
    backgroundColor: "#540B0E",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.875rem",
      fontFamily: "Playfair Display, serif",
      fontWeight: "500",
      letterSpacing: "0.08em",
      textTransform: "none",
      color: "#E2C044",
    },
  },
  {
    backgroundColor: "#2F3E46",
    textColor: "#FFFFFF",
    creditStyles: {
      fontSize: "0.75rem",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#CAD2C5",
    },
  },
];

export const projects = Array.from({ length: 30 }, (_, i) => {
  const randomSize =
    gridImageSizes[Math.floor(Math.random() * gridImageSizes.length)];
  const theme = natureThemes[Math.floor(Math.random() * natureThemes.length)];
  const style = styleSchemes[Math.floor(Math.random() * styleSchemes.length)];
  const mediaItem = generateMediaItem(randomSize);

  let projectType;
  if (mediaItem.type === "video") {
    projectType = "motion";
  } else {
    projectType = Math.random() > 0.7 ? "special" : "photo";
  }

  return {
    id: i + 1,
    title: theme.title,
    type: "portrait",
    projectType,
    media: mediaItem,
    description: theme.description,
    client: "National Geographic",
    year: 2024,
    location: [
      "Serengeti",
      "Arctic Circle",
      "Amazon Rainforest",
      "Himalayas",
      "Sahara Desert",
    ][Math.floor(Math.random() * 5)],
    credits: generateCredits(Math.floor(Math.random() * 8) + 3),
    gallery: generateGallery(),
    style: style,
    order: i,
  };
});
