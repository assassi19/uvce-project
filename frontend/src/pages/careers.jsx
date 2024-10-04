import Hero from "../components/hero";
import "./careers.css";

import React from "react";

const Careers = () => {
  return (
    <>
      <Hero
        imageURL={"../../public/images/careers.jpg"}
        data={{
          title: "Careers",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Careers;
