import React from "react";
import "./hero.css";

const Hero = ({ imageURL, data }) => {
  const sectionStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: "cover", // Ensures the image covers the entire section
    backgroundPosition: "center", // Keeps the image centered
  };

  return (
    <section className="HeroSection" style={sectionStyle}>
      <div>
        <h1>{data.title || "U V C E"}</h1>
        <p>{data.subtitle || ""}</p>
      </div>
    </section>
  );
};

export default Hero;
