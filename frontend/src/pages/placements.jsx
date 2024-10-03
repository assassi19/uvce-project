import Hero from "../components/hero";
import "./placements.css";

import React from "react";

const Placements = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh6.googleusercontent.com/Uj8pBmPPerGerxFXRRtZZh5yDzGtG8qQEtMXGCG0k4jHURskUSewWhANCzCSVUO9R7eAAm0xxyNVkStNVdM2yko=w16383"
        }
        data={{
          title: "Placements",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Placements;
