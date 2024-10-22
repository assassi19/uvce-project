import React from "react";
import "./Arch.css";
import Hero from "../components/hero";

const Arch = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          subtitle: "Department of Architecture",
        }}
      />

      <section>Architecture Branch</section>
    </>
  );
};

export default Arch;
