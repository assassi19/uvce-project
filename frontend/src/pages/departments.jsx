import Hero from "../components/hero";
import "./departments.css";

import React from "react";

const Departments = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh6.googleusercontent.com/Uj8pBmPPerGerxFXRRtZZh5yDzGtG8qQEtMXGCG0k4jHURskUSewWhANCzCSVUO9R7eAAm0xxyNVkStNVdM2yko=w16383"
        }
        data={{
          title: "Departments",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Departments;
