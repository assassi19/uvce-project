import React from "react";
import Hero from "./hero";
import "./home.css";

const Home = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "U V C E",
          subtitle: "University of Visvesvaraya College of Engineering",
        }}
      />
      <section>
        <div className="home_main">
          <div className="left_part">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728125228/vangoghmuseum-s0020V1962-800_z0099q.jpg"
              alt="image1"
              className="home-section-imageclass"
            />
          </div>
          <div className="right_part">
            <p>
              The University of Visvesvaraya College of Engineering (UVCE) is a
              premier institution of engineering in Bangalore. UVCE has been
              granted the status of State Eminence by the UVCE Act 2021 which
              was passed by the state legislature of Karnataka. UVCE was founded
              in the year 1917 by the Dewan of Mysore Sir.M Visvesvaraya K.C.I.E
              during the reign of Shri Krishnaraja Wodeyar IV, the Maharaja of
              Mysore. UVCE is the first college of engineering to be established
              in Karnataka and we are the fifth oldest college of engineering in
              India.
            </p>
            <p>
              UVCE has been a prosperity engine for the nation by providing
              high-quality education to young students from all walks of life at
              a minimal cost. Over the past 106 years, we have made immense
              contributions to engineering sciences and our alumni have made
              substantial progress for the welfare of the society throughout the
              world.
            </p>

            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1728099310/Screenshot_2024-09-27_131916_r276nx.png"
              alt="image2"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="home_main"></div>
      </section>
      {/* <section className="fourthsection">
        <h3>Highlights</h3>
        <div className="home_main borders">
          <Slider2
            slides={[
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123608/vangoghmuseum-s0195V1962-800_cgu0zn.jpg",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
              },
            ]}
          />
        </div>
      </section> */}
    </>
  );
};

export default Home;
