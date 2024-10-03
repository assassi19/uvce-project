import React from "react";
import "./people.css";
import Hero from "../components/hero";

const People = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh3.googleusercontent.com/hPfa4-uwISfn3jcVRr8_aqMuzL1alynxMiHSEDf8dUY9wxNcpT3R_2L4tiTZ98hMLPno9-fcPYYsXtaX8Fh1KRg=w16383"
        }
        data={{
          title: "People",
          subtitle: "",
        }}
      />
    </>
  );
};

export default People;
