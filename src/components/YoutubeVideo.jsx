import React, { useState } from "react";

const YoutubeVideoWithThumbnail = ({ src, width , height }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true); // Show the iframe and hide the thumbnail immediately
  };

  return (
    <div
      className="youtube-videos"
      style={{
        position: "relative",
        width,
        height,
        borderRadius: "12px",
        overflow: "hidden", // Ensure child elements stay within bounds
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/images/man-in-frame.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          cursor: "pointer",
          opacity: isPlaying ? 0 : 1,
          transition: "opacity 0.5s ease-in-out", // Smooth fade-out
          zIndex: isPlaying ? 0 : 2, // Hide below the iframe when playing
        }}
        onClick={handlePlay}
      >
        {!isPlaying && (
          <div
            className="play-button"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3, // Ensure the play button stays on top
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="50px"
              height="50px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      {/* Video */}
      {isPlaying && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          style={{
            zIndex: 1,
            position: "relative",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeVideoWithThumbnail;
