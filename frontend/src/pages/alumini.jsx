import Hero from "../components/hero";
import Slider from "../components/slider";
import Slider3 from "../components/slider3";
import "./alumini.css";

import React from "react";

const Alumini = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123608/vangoghmuseum-s0195V1962-800_cgu0zn.jpg"
        }
        data={{
          title: "Alumini",
          subtitle: "",
        }}
      />

      <section>
        <div className="home_main">
          <div className="left_part">
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
          <div className="right_part">
            <p style={{ color: "gray" }}>
              Vincent Willem van Gogh was a Dutch Post-Impressionist painter who
              is among the most famous and influential figures in the history of
              Western art. In just over a decade, he created approximately 2100
              artworks, including around 860 oil paintings, most of them in the
              last two years of his life.
            </p>
          </div>
        </div>
      </section>

      <section className="library-section-2">
        <h3>Activities</h3>
        <div className="library-main">
          <Slider3
            slides={[
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
                title: "Alumni Records",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
                title: "Membership",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
                title: "Reunions",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
                title: "Scholarships",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
                title: "Give to UVCE",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139435/Screenshot_2024-09-23_234428_cl3fxl.jpg",
                title: "Programmes",
              },
            ]}
          />
        </div>
      </section>

      <section className="library-section-2 alumini-section-3">
        <h3>Alumini Blogs</h3>
        <div className="alumini-sec-3">
          <div className="alumini-image first-img">
            <h3>Future of Energy - Dr Prahlada Rama Rao</h3>

            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg"
              alt="image2"
            />
          </div>

          <div className="alumini-image second-img">
            <h3>Blockchain and its applications</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728188614/vangoghmuseum-s0051V1962-800_gskvns.jpg"
              alt="image2"
            />
          </div>

          <div className="alumini-image third-img">
            <h3>Advances in Aerospace Engineering - Gopalkrishna</h3>
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
              alt="image1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumini;
