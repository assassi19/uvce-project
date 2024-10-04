import React from "react";
import "./people.css";
import Hero from "../components/hero";
import Slider2 from "../components/slider2";

const People = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "People",
          subtitle: "",
        }}
      />
      <section className="people-first-section">
        <div className="first-section">
          <img
            src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
            alt=""
            className="imageclass"
          />

          <div className="text_content">
            <h3>B Muthuraman</h3>
            <h4>Chairman, Governing Council</h4>
          </div>
        </div>

        <div className="first-section">
          <img
            src="https://lh5.googleusercontent.com/jR7l3Ylwe-zg1eiU7spLY46o45jOXle8sFb0VctjBdqQUDc59mSfaG2qsxoe6v9yeYl7FnsxA-3WClaJUQXZjV3Te0o03gyHTWibV-eRntZd_7qdsYf1oyPAsJjnsAC7JA=w1280"
            alt=""
            className="imageclass"
          />
          <div className="text_content">
            <h3>Dr Subhashish Tripathy</h3>
            <h4>Director</h4>
          </div>
        </div>
      </section>

      <section className="last-section">
        <Slider2
          slides={[
            "https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280",
            "https://lh4.googleusercontent.com/EACI6SaJJGtokx2cnaaxEdvf9TBUW_iwxqvTWi5s7v3o6QAes-nXXll-aPFUNoYcJj-J4U5R2L-XB-hYR217LPNMFzc8EY82QshCUgX_i6QquFpRJKz-zMazPQT7rIwU=w1280",
            "https://lh5.googleusercontent.com/UbHdgtZ1KmtloviYtJZWM_1Ie-_nO0JpNzEW3QrX4LELQ5xPNZEqPueLnfoXmNDKGND9CoMw7VkHRPMLoLNwe0DjZFjq_1wXcqTd17_4FjanhI3NLY0LV57ZrPRCdNC_lA=w1280",
            "https://lh4.googleusercontent.com/Ll9C1FH25DfH6oxWgNOEo7lJocQV1TVlKdiDqiPTD_XNOVlyuM4RsiVQUAwY3Hngyb7ihukGPpU7Dke4TZkmDKX6s0ROM2Lgl8xSTcq3URoOjuf0z8U6MkViS7UtIh2C4g=w1280",
            "https://lh4.googleusercontent.com/Ll9C1FH25DfH6oxWgNOEo7lJocQV1TVlKdiDqiPTD_XNOVlyuM4RsiVQUAwY3Hngyb7ihukGPpU7Dke4TZkmDKX6s0ROM2Lgl8xSTcq3URoOjuf0z8U6MkViS7UtIh2C4g=w1280",
          ]}
        />
      </section>
    </>
  );
};

export default People;
