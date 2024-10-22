import React from "react";
import "./mech.css";
import Hero from "../components/hero";

const Mech = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Mechanical Engineering",
        }}
      />

      <section>Mechanical Branch</section>
    </>
  );
};

export default Mech;
