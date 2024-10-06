import Hero from "../components/hero";
import Slider3 from "../components/slider3";
import "./notifications.css";

import React from "react";

const Notifications = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728123644/vangoghmuseum-s0105V1962-800_wwerrm.jpg"
        }
        data={{
          title: "Tenders",
          subtitle: "",
        }}
      />

      <section className="library-section-2 career-section">
        <h3>Tenders</h3>
        <div className="library-main">
          <Slider3
            slides={[
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
                title: "Call for Quotation of ERP",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
                title: "Call for Quotation for disposal of newspapers",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
                title:
                  "Call for Supply of Tally Prime Multiuser Software for accounting purposes in Finance Branch of UVCE",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Notifications;
