import React from "react";
import Hero from "./hero";
import "./home.css";
import Slider from "./slider";
import Slider3 from "./slider3";
import CustomCalender from "../subpages/calender";

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
        <div className="home-section">
          <div className="home-carousel-section">
            <h3>Announcements</h3>
            <Slider
              dataURLS={[
                "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
              ]}
            />
          </div>
          <div className="home-carousel-section">
            <h3>workshops / seminars</h3>
            <Slider
              dataURLS={[
                "https://res.cloudinary.com/duozomapm/image/upload/v1728188542/vangoghmuseum-s0104V1962-800_klzfxe.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728188556/vangoghmuseum-s0038V1962-800_bu4vsc.jpg",
                "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="home-last-section">
        <h3>Highlights</h3>
        <Slider3
          slides={[
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
              title: "",
              name: "",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123552/vangoghmuseum-d0420V1962-800_pdckmr.jpg",
              title: "",
              name: "",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg",
              title: "",
              name: "",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
              title: "",
              name: "",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
              title: "",
              name: "",
            },

            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123608/vangoghmuseum-s0195V1962-800_cgu0zn.jpg",
              title: "",
              name: "",
            },
            {
              url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
              title: "",
              name: "",
            },
          ]}
        />
      </section>

      <section className="calender-section">
        <h3>Events</h3>
        <CustomCalender />
      </section>

      <section className="map-section">
        <div className="map-1">
          <address>K R Circle Campus</address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.937581784621!2d77.58457707484142!3d12.975844087339901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672fafd4f1b%3A0x100af20618f6f9fa!2sKR%20Circle%2C%20Ambedkar%20Veedhi%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1729150633358!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-2">
          <address>Jnanabharati Campus</address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.435147175562!2d77.50205397484083!3d12.94398378736885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f245cc4325d%3A0x6e5eaf3655eef1b6!2sJnanabharati%20Campus%20Bengaluru%20University!5e0!3m2!1sen!2sin!4v1729151044942!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
