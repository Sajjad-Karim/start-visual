import video from "../assets/video.mp4";
export const heroContent = [
  {
    type: "video", // REQUIRED
    url: video,
    alt: "Cinematic aerial view of a misty forest", // REQUIRED for accessibility
    posterUrl: "https://images.unsplash.com/photo-1511497584788-876760111969", // Optional but recommended
    hero: false, // ✅ NEW: REQUIRED for hero logic
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2000&q=80",
    alt: "Majestic lion portrait",
    hero: false, // ✅ NEW: REQUIRED for hero logic
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=2000&q=80",
    alt: "Wolf in winter landscape",
    hero: true, // ✅ NEW: REQUIRED for hero logic
  },
  {
    type: "video",
    url: video,
    posterUrl:
      "https://videocdn.cdnpk.net/videos/f15f9816-ef49-42b9-b1cf-a5b5be67aa9f/horizontal/previews/clear/large.mp4?token=exp=1744116384~hmac=67ee1e50c8b79779071175317bded8c1abe514e31a2cc24a678542284bc070cd",
    hero: true, // ✅ NEW: REQUIRED for hero logic
  },
];
