import Hero from "../components/hero";
import Slider from "../components/slider";
import Slider3 from "../components/slider3";
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

          <div>Google form</div>
        </div>
      </section>

      <section className="library-section-2">
        <h3>Library Resources</h3>
        <div className="library-main">
          <Slider3
            slides={[
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728133868/vangoghmuseum-s0050V1962-800_1_sfbgt0.jpg",
                title: "Inflibnet",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
                title: "Old Question Papers",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728140989/vangoghmuseum-s0109V1962-800_yhdl4y.jpg",
                title: "E-Newspapers",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141036/vangoghmuseum-s0031V1962-800_oladul.jpg",
                title: "E-Journals",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728141010/vangoghmuseum-s0144V1962-800_bcicci.jpg",
                title: "Publications",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139435/Screenshot_2024-09-23_234428_cl3fxl.jpg",
                title: "E-Books",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728139460/Roses_-_The_Metropolitan_Museum_of_Art_xltmy4.jpg",
                title: "Library Subscriptions",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728185750/vangoghmuseum-s0025V1962-800_yptwqa.jpg",
                title: "Plagiarism Tool",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728125218/vangoghmuseum-s0202V1962-800_gccwd1.jpg",
                title: "Memberships",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
                title: "Reprography",
              },
            ]}
          />
        </div>
      </section>

      <section className="library-section-3">
        <h3>Library Team</h3>
        <div className="library-main-2">
          <img
            src="https://res.cloudinary.com/duozomapm/image/upload/v1728099382/vangoghmuseum-s0093V1962-800_rkhwip.jpg"
            alt=""
          />

          <h3>Sandhyarani K</h3>
        </div>
      </section>

      <section className="library-section-3">
        <h3>Librarian</h3>
        <div className="library-main">
          <Slider3
            slides={[
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728188136/vangoghmuseum-s0022V1962-800_tvrlfm.jpg",
                title: "W",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728104256/vangoghmuseum-s0016V1962-800_bhvmdm.jpg",
                title: "X",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099339/vangoghmuseum-s0097V1962v-800_qlcqlc.jpg",
                title: "Y",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099387/vangoghmuseum-s0065V1962-800_xjut4d.jpg",
                title: "Z",
              },
              {
                url: "https://res.cloudinary.com/duozomapm/image/upload/v1728099404/vangoghmuseum-s0060V1962v-800_slam8p.jpg",
                title: "A",
              },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="library-main-3">
          <Slider
            dataURLS={[
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188542/vangoghmuseum-s0104V1962-800_klzfxe.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188614/vangoghmuseum-s0051V1962-800_gskvns.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188556/vangoghmuseum-s0038V1962-800_bu4vsc.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123578/vangoghmuseum-s0047V1962-800_gnefn4.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123585/vangoghmuseum-s0032V1962-800_sffk94.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728188596/vangoghmuseum-s0028V1962-800_vpp4u0.jpg",
              "https://res.cloudinary.com/duozomapm/image/upload/v1728123631/vangoghmuseum-s0055V1962-800_oqy5hq.jpg",
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Library;
