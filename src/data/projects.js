import ProVideo from "../assets/project.mp4";
export const portfolios = [
  {
    id: 1,
    title: "Nature Portfolio",
    slug: "nature-portfolio",
    description:
      "A diverse showcase of nature-focused photography and motion visuals.",
    projects: [
      {
        id: 1,
        title: "NORTHERN LIGHTS",
        description:
          "A mesmerizing display of nature's light show in the Arctic sky.",
        projectType: "motion",
        status: "online",
        type: "portrait",
        media: {
          type: "video",
          url: ProVideo,
          posterUrl:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",

          alt: "Nature video content",
          order: 416,
          displaySize: "half",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Serengeti",
        credits: [
          {
            role: "Lighting Assistant",
            name: "Neil Tucker",
            order: 0,
          },
          {
            role: "Wildlife Expert",
            name: "Jason Stewart",
            order: 1,
          },
          {
            role: "Field Guide",
            name: "Cheryl Brown",
            order: 2,
          },
        ],
        style: {
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
        order: 1,
      },
      {
        id: 2,
        title: "OCEAN WONDERS",
        description:
          "Exploring the dynamic relationship between sea and shore.",
        projectType: "photo",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=570&h=428&fit=crop",

          alt: "Nature photography",
          order: 265,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Arctic Circle",
        credits: [
          {
            role: "Equipment Specialist",
            name: "Mr. Jacob Randolph",
            order: 0,
          },
          {
            role: "Photographer",
            name: "Christina Rogers",
            order: 1,
          },
          {
            role: "Local Expert",
            name: "Gina Castillo",
            order: 2,
          },
        ],
        style: {
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
        order: 2,
      },
      {
        id: 3,
        title: "MOUNTAIN MAJESTY",
        description:
          "Towering peaks pierce the clouds in this dramatic landscape series.",
        projectType: "photo",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=570&h=428&fit=crop",
          alt: "Nature photography",
          order: 775,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Serengeti",
        credits: [
          {
            role: "Photographer",
            name: "Linda Hanson",
            order: 0,
          },
          {
            role: "Drone Operator",
            name: "Elizabeth Wood",
            order: 1,
          },
          {
            role: "Wildlife Expert",
            name: "Pamela Rodriguez",
            order: 2,
          },
        ],
        style: {
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
        order: 3,
      },
      {
        id: 4,
        title: "FOREST DEPTHS",
        description:
          "Journey through ancient woodlands and their hidden mysteries.",
        projectType: "motion",
        status: "online",
        type: "portrait",
        media: {
          type: "video",
          url: "https://player.vimeo.com/progressive_redirect/playback/735273384/rendition/1080p/file.mp4",
          posterUrl:
            "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",

          alt: "Nature video content",
          order: 237,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Serengeti",
        credits: [
          {
            role: "Location Scout",
            name: "Laura Morales",
            order: 0,
          },
          {
            role: "Equipment Specialist",
            name: "Todd Peterson",
            order: 1,
          },
          {
            role: "Lighting Assistant",
            name: "Jamie Nguyen",
            order: 2,
          },
        ],
        style: {
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
        order: 4,
      },
      {
        id: 5,
        title: "NORTHERN LIGHTS",
        description:
          "A mesmerizing display of nature's light show in the Arctic sky.",
        projectType: "special",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=570&h=428&fit=crop",

          alt: "Nature photography",
          order: 264,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1623476408624-721c9185d569?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Himalayas",
        credits: [
          {
            role: "Local Expert",
            name: "Rodney Ball",
            order: 0,
          },
          {
            role: "Photographer",
            name: "Taylor Mendoza",
            order: 1,
          },
          {
            role: "Wildlife Expert",
            name: "Shawn Lopez",
            order: 2,
          },
        ],
        style: {
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
        order: 5,
      },
      {
        id: 6,
        title: "MOUNTAIN MAJESTY",
        description:
          "Towering peaks pierce the clouds in this dramatic landscape series.",
        projectType: "special",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=570&h=428&fit=crop",

          alt: "Nature photography",
          order: 93,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Sahara Desert",
        credits: [
          {
            role: "Lighting Assistant",
            name: "Peter Henry",
            order: 0,
          },
          {
            role: "Photographer",
            name: "Jeremiah King",
            order: 1,
          },
          {
            role: "Safety Coordinator",
            name: "Vicki Martin",
            order: 2,
          },
        ],
        style: {
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
        order: 6,
      },
      {
        id: 7,
        title: "MOUNTAIN MAJESTY",
        description:
          "Towering peaks pierce the clouds in this dramatic landscape series.",
        projectType: "motion",
        status: "online",
        type: "portrait",
        media: {
          type: "video",
          url: "https://player.vimeo.com/progressive_redirect/playback/742274899/rendition/1080p/file.mp4",
          posterUrl:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",

          alt: "Nature video content",
          order: 861,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",
            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Himalayas",
        credits: [
          {
            role: "Location Scout",
            name: "Kevin Jones",
            order: 0,
          },
          {
            role: "Photographer",
            name: "Margaret Wong",
            order: 1,
          },
          {
            role: "Conservation Specialist",
            name: "David Valencia",
            order: 2,
          },
        ],
        style: {
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
        order: 7,
      },
      {
        id: 8,
        title: "WILD SPIRITS",
        description:
          "Capturing the untamed beauty of African wildlife in their natural habitat.",
        projectType: "photo",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=570&h=428&fit=crop",
          alt: "Nature photography",
          order: 934,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",
            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=1509&h=1211&fit=crop",
            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop&w=755&h=934&fit=crop",
            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Serengeti",
        credits: [
          {
            role: "Wildlife Expert",
            name: "Cristina Cunningham",
            order: 0,
          },
          {
            role: "Location Scout",
            name: "Patricia Bailey",
            order: 1,
          },
          {
            role: "Equipment Specialist",
            name: "Kevin Palmer",
            order: 2,
          },
        ],
        style: {
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
        order: 8,
      },
      {
        id: 9,
        title: "NORTHERN LIGHTS",
        description:
          "A mesmerizing display of nature's light show in the Arctic sky.",
        projectType: "motion",
        status: "online",
        type: "portrait",
        media: {
          type: "video",
          url: "https://player.vimeo.com/progressive_redirect/playback/742274899/rendition/1080p/file.mp4",
          posterUrl:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",

          alt: "Nature video content",
          order: 197,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Himalayas",
        credits: [
          {
            role: "Conservation Specialist",
            name: "John Flores",
            order: 0,
          },
          {
            role: "Drone Operator",
            name: "Michael Robinson",
            order: 1,
          },
          {
            role: "Safety Coordinator",
            name: "Stacy Peterson",
            order: 2,
          },
        ],
        style: {
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
        order: 9,
      },
      {
        id: 10,
        title: "MOUNTAIN MAJESTY",
        description:
          "Towering peaks pierce the clouds in this dramatic landscape series.",
        projectType: "photo",
        status: "online",
        type: "portrait",
        media: {
          type: "image",
          url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=570&h=428&fit=crop",

          alt: "Nature photography",
          order: 232,
          displaySize: "full",
        },
        gallery: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 0,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 1,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 2,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 3,
            displaySize: "half",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1509&h=1211&fit=crop",

            alt: "Nature photography",
            order: 4,
            displaySize: "full",
          },
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=755&h=934&fit=crop",

            alt: "Nature photography",
            order: 5,
            displaySize: "half",
          },
        ],
        client: "National Geographic",
        year: 2024,
        location: "Serengeti",
        credits: [
          {
            role: "Local Expert",
            name: "Laura Le",
            order: 0,
          },
          {
            role: "Conservation Specialist",
            name: "Claudia Robertson",
            order: 1,
          },
          {
            role: "Location Scout",
            name: "Monica Barnes",
            order: 2,
          },
        ],
        style: {
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
        order: 10,
      },
    ],
  },
];
