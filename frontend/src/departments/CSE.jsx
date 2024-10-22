import React from "react";
import "./CSE.css";
import Hero from "../components/hero";

const CSE = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Computer Science",
        }}
      />

      <section>Computer Science</section>
    </>
  );
};

export default CSE;
