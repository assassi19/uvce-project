import React from "react";
import "./people.css";
import Hero from "../components/hero";

const People = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh3.googleusercontent.com/hPfa4-uwISfn3jcVRr8_aqMuzL1alynxMiHSEDf8dUY9wxNcpT3R_2L4tiTZ98hMLPno9-fcPYYsXtaX8Fh1KRg=w16383"
        }
        data={{
          title: "People",
          subtitle: "",
        }}
      />
      <section>
        <div className="people_main">
          <div className="left_item">
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>B Muthuraman</h3>
            <h4>Chairman, Governing Council</h4>
          </div>
          <div className="right_item">
            <img
              src="https://lh5.googleusercontent.com/jR7l3Ylwe-zg1eiU7spLY46o45jOXle8sFb0VctjBdqQUDc59mSfaG2qsxoe6v9yeYl7FnsxA-3WClaJUQXZjV3Te0o03gyHTWibV-eRntZd_7qdsYf1oyPAsJjnsAC7JA=w1280"
              alt=""
            />
            <h3>Dr Subhashish Tripathy</h3>
            <h4>Director</h4>
          </div>
        </div>
      </section>
      <section className="last-section">
        <h3>Staff</h3>
        <div className="people_main">
          <div className="left_item">
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>B Muthuraman</h3>
          </div>
          <div className="left_item">
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>B Muthuraman</h3>
          </div>
          <div className="right_item">
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>B Muthuraman</h3>
          </div>
          <div className="right_item">
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>B Muthuraman</h3>
          </div>
        </div>
      </section>
      <section class="banner">
        <div class="slider" style={{ "--quantity": 10 }}>
          <div class="item" style={{ "--position": 1 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Cedric Diggory</h3>
            <h4>Registrar</h4>
          </div>
          <div class="item" style={{ "--position": 2 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Dr B M Rajprakash</h3>
            <h4>Dean of Engineering</h4>
          </div>
          <div class="item" style={{ "--position": 3 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Horace Slughorn</h3>
            <h4>Finance Officer</h4>
          </div>

          <div class="item" style={{ "--position": 4 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Severus Snape</h3>
            <h4>Finance Officer</h4>
          </div>
          <div class="item" style={{ "--position": 5 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Dr B P Harish</h3>
            <h4>Controller of Examinations</h4>
          </div>
          <div class="item" style={{ "--position": 6 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Prof H S Veena</h3>
            <h4>Dy Controller of Examinations</h4>
          </div>
          <div class="item" style={{ "--position": 7 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Prof H S Veena</h3>
            <h4>Dy Controller of Examinations</h4>
          </div>
          <div class="item" style={{ "--position": 8 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Prof H S Veena</h3>
            <h4>Dy Controller of Examinations</h4>
          </div>
          <div class="item" style={{ "--position": 9 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Prof H S Veena</h3>
            <h4>Dy Controller of Examinations</h4>
          </div>
          <div class="item" style={{ "--position": 10 }}>
            <img
              src="https://lh4.googleusercontent.com/czZMjzm0fQnxTlbSwIAWm-zk4DnwaC4qM2Tv1MzSgAhMyCkeg-QKV3rDC4y2b4TxB69WUGTrUjTX69_OXKZ-g5Amh4Or-pjkj0ff91AJ1BgAEgqQxq6vvtwTcwSZNJV1mA=w1280"
              alt=""
            />
            <h3>Prof H S Veena</h3>
            <h4>Dy Controller of Examinations</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
