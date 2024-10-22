import React from "react";
import "./EEE.css";
import Hero from "../components/hero";

const EEE = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Electrical and Electronics Engineering",
        }}
      />

      <section>Electronics Branch</section>
    </>
  );
};

export default EEE;
