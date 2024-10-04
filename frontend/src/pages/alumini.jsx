import Hero from "../components/hero";
import "./alumini.css";

import React from "react";

const Alumini = () => {
  return (
    <>
      <Hero
        imageURL={"../../public/images/alumini.jpg"}
        data={{
          title: "Alumini",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Alumini;
