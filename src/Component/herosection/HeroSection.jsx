import React, { useState, useEffect } from "react";
import heroimg1 from "../../../public/heroImages/herobanner1.jpg";
import heroimg2 from "../../../public/heroImages/herobanner3.jpg";

const images = [heroimg1, heroimg2,heroimg1, heroimg2,heroimg1, heroimg2]; // Add more images if needed

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="absolute w-full h-full object-cover"
            alt={`hero-${i}`}
            style={{ left: `${i * 100}%` }} // Position images side by side
          />
        ))}
      </div>
    </div>
  );
}
