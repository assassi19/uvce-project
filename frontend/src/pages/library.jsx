import Hero from "../components/hero";
import Slider from "../components/slider";
import "./library.css";

import React from "react";

const Library = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "Library",
          subtitle: "",
        }}
      />

      <section>
        <div className="library-section">
          <div className="carousel-section">
            <h3>New Arrivals</h3>
            <Slider
              dataURLS={[
                "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728141070/vangoghmuseum-s0102V1962-800_ofsdqr.jpg",
              ]}
            />
          </div>

          <div className="search-section">
            <h3>Search books</h3>
            <p>Web OPAC - Koha</p>
            <span>Search Book/Author/Keywords</span>
          </div>

          <div>Hello</div>
        </div>
      </section>

      <section className="library-section-2">
        <h3>Library Resources</h3>
      </section>
    </>
  );
};

export default Library;
