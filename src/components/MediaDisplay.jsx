import React, { useEffect, useRef, useState } from "react";

const MediaDisplay = ({ item, priority = false, className = "", onLoad }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const loadMedia = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (!response.ok) {
        throw new Error(`Failed to load media: ${response.statusText}`);
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleRetry = async () => {
    if (retryCount < maxRetries) {
      setError(null);
      setIsLoading(true);
      setRetryCount((prev) => prev + 1);

      const mediaAvailable = await loadMedia(item.url);
      if (!mediaAvailable) {
        setError("Media unavailable");
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    let mounted = true;

    const checkMedia = async () => {
      if (!mounted) return;

      const mediaAvailable = await loadMedia(item.url);
      if (!mediaAvailable && mounted) {
        setError("Media unavailable");
        setIsLoading(false);
      }
    };

    if (item.type === "video" && videoRef.current) {
      const video = videoRef.current;

      const handleLoadedData = () => {
        if (mounted) {
          setIsLoading(false);
          setError(null);
          onLoad?.();
        }
      };

      const handleError = () => {
        if (mounted) {
          checkMedia();
        }
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);

      return () => {
        mounted = false;
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
      };
    } else {
      checkMedia();
    }

    return () => {
      mounted = false;
    };
  }, [item.url, onLoad, retryCount]);

  if (error) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-zinc-900/50`}
      >
        {retryCount < maxRetries ? (
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-white text-sm transition-colors"
          >
            Retry Loading
          </button>
        ) : (
          <div className="text-white/50 text-sm text-center px-4">
            Unable to load media
          </div>
        )}
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className={`relative ${className}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={item.posterUrl}
          preload="metadata"
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={item.url}
        alt={item.alt}
        className={`w-full h-full object-cover object-top ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => {
          setIsLoading(false);
          setError(null);
          onLoad?.();
        }}
        onError={() => {
          handleRetry();
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default MediaDisplay;
