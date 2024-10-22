import Hero from "../components/hero";
import "./students.css";

import React from "react";

const Students = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "Students",
          subtitle: "",
        }}
      />

      <section>
        <div className="depart-sec-1">
          <div className="sec">
            <h3>Academics</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Sports</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>R&D Activities</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="depart-sec-3">
          <div className="sec">
            <h3>Student Clubs and Associations</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Competitions & Hackathons</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3></h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
