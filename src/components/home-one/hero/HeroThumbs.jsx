import React, { useEffect, useRef } from "react";
import HeroThumbVideo from "../../../assets/images/v1/orgits-hero-img.mp4";

function HeroThumbs() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video starts playing programmatically
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

  return (
    <div className="orgits-hero-thumb jos" data-jos_animation="fade-right">
      <video
        ref={videoRef}
        src={HeroThumbVideo}
        autoPlay
        loop
        muted
        playsInline
        width="640"
        height="360"
      >
        
      </video>
    </div>
  );
}

export default HeroThumbs;