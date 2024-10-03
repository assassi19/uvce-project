import Hero from "../components/hero";
import "./library.css";

import React from "react";

const Library = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh6.googleusercontent.com/Uj8pBmPPerGerxFXRRtZZh5yDzGtG8qQEtMXGCG0k4jHURskUSewWhANCzCSVUO9R7eAAm0xxyNVkStNVdM2yko=w16383"
        }
        data={{
          title: "Library",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Library;
