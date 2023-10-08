"use client";
import React from "react";

export default function useAnimation() {
  const [isMobile, setIsMobile] = React.useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const animate = !isMobile;
  return { animate };
}
