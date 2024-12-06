import React, { useState } from "react";

const YoutubeVideoWithThumbnail = ({ src, thumbnail, width, height }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="youtube-video"
      style={{
        position: "relative",
        width: width || "100%",
        height: height || "auto",
        cursor: "pointer",
      }}
    >
      {!isPlaying && (
        <>
          {/* Thumbnail */}
          <img
            src='/images/man-in-frame.png'
            alt="YouTube Video Thumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onClick={handlePlay}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={handlePlay}
          ></div>
          {/* Play Button */}
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
            }}
            onClick={handlePlay}
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
        </>
      )}
      {isPlaying && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeVideoWithThumbnail;
