import Hero from "../components/hero";
import "./faculty.css";
import React from "react";

const Faculty = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123657/vangoghmuseum-s0086V1962-800_jupufa.jpg"
        }
        data={{
          title: "Faculty",
          subtitle: "",
        }}
      />

      <section>
        <div className="Faculty-sec">
          <div className="faculty-image">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728099327/vangoghmuseum-s0068V1962v-800_c0kr9x.jpg"
              alt=""
            />
          </div>
          <div className="faculty-content">
            <h2>Dr. Thriveni J</h2>
            <h3>Proffessor and head</h3>
            <p className="para-1">
              Dr. Subhasish Tripathy has served as Professor (Higher
              Administrative Grade) at the Department of Geology and Geophysics,
              IIT Kharagpur. Hehas been the Dean of Faculty and Interim Dean
              (Planning & Coordination) at IIT Kharagpur. He has also been the
              Dean (Academic) and Deputy Director of IIT Bhubaneswar.
            </p>
            <p className="para-2">
              Prof. Tripathy was the Head, Rajiv Gandhi School of Intellectual
              Property Law; Head, Center for Ocean River Atmospheric and Land
              Sciences at IIT Kharagpur. He was the founding Head of the School
              of Earth, Ocean and Climate Sciences and was the lead for
              establishment of Bay of Bengal Coastal Observatory at IIT
              Bhubaneswar during his tenure from 2011-2016.
            </p>
            <button>
              <a href="#">Read more...</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
