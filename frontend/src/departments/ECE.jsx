import React from "react";
import "./ECE.css";
import Hero from "../components/hero";

const ECE = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Electrical Engineering",
        }}
      />

      <section>Civil Branch</section>
    </>
  );
};

export default ECE;
