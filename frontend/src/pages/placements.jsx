import Hero from "../components/hero";
import "./placements.css";

import React from "react";

const Placements = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg"
        }
        data={{
          title: "Placements",
          subtitle: "Training and Placement Office",
        }}
      />

      <section>
        <div className="place-section">
          <div className="sec">
            <h3>Why UVCE ?</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728139435/Screenshot_2024-09-23_234428_cl3fxl.jpg"
              alt=""
            />
          </div>

          <div className="sec">
            <h3>Placement Stats</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728139443/vangoghmuseum-s0039V1962-800_xnkiql.jpg"
              alt=""
            />
          </div>

          <div className="sec">
            <h3>Placement Team</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728139460/Roses_-_The_Metropolitan_Museum_of_Art_xltmy4.jpg"
              alt=""
            />
          </div>

          <div className="sec">
            <h3>Upskillment Activities</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="depart-sec-3 placement-sec-2">
          <div className="sec">
            <h3>Recruiters' Corner</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728139460/Roses_-_The_Metropolitan_Museum_of_Art_xltmy4.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Students' Corner</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Placements;
