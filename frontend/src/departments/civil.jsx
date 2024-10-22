import React from "react";
import "./civil.css";
import Hero from "../components/hero";

const Civil = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Civil Engineering",
        }}
      />

      <section>Civil Branch</section>
    </>
  );
};

export default Civil;
