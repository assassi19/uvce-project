import { Outlet } from "react-router-dom";
import Hero from "../components/hero";
import "./departments.css";

import React from "react";

const Departments = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123657/vangoghmuseum-s0086V1962-800_jupufa.jpg"
        }
        data={{
          title: "Departments",
          subtitle: "",
        }}
      />
      <section>
        <div className="depart-sec-1">
          <div className="sec">
            <h3>Dept of Electrical Engineering</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Dept of Computer Sciences</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Dept of Electronics and Communications</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="depart-sec-3">
          <div className="sec">
            <h3>Dept of Mechanical Engineering</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Dept of Civil Engineering</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt=""
            />
          </div>
          <div className="sec">
            <h3>Dept of Architecture</h3>
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

export default Departments;
