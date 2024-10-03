import React from "react";
import Hero from "./hero";
import "./home.css";
import Slider from "./slider";

const Home = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://lh3.googleusercontent.com/hPfa4-uwISfn3jcVRr8_aqMuzL1alynxMiHSEDf8dUY9wxNcpT3R_2L4tiTZ98hMLPno9-fcPYYsXtaX8Fh1KRg=w16383"
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
              src="https://lh3.googleusercontent.com/RRvifd5RU_eZjYi9TLvIWl24zzs6s-Mn-kxDpbcOsepFzQrGaDWBF3OmIWuYPQVKeNCEpQaS1jzMuTkMtfzDIuNBK-qcjYE7vfhmiei8LbG_QMsVbq2mUkpt7-l7NqaAAA=w1280"
              alt="image1"
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
              src="https://lh4.googleusercontent.com/bEaBMxTlQzz05GlElqI_PzJ-XYJ7QF6D8QS7tTsSkwH3buxZcHRrAAJDRkleUxIda-qesVH8nsaD1J-_r2NOck9sCT70iZgslkzsL0PGQneliWSA-Lq3O88bIwPprlGURg=w1280"
              alt="image2"
            />
          </div>
        </div>
      </section>
      <section className="thirdsection">
        <h3>Announcements / seminars / workshops</h3>
        <div className="home_main">
          <Slider
            dataURLS={[
              "https://lh6.googleusercontent.com/B1Z9D7IA29-jfcjbpkuTLIaYG9uD2bgMhUQwmLG9qEy-mQ4QZFI2_0JYM36J6MDeV1og54eXsj1vytYNFv44biE=w16383",
              "https://lh5.googleusercontent.com/LHOiETb5tx8JNaKUL-Nsreoq_JgBU4l12xHk4rPHZm3kC53efgPCXf-vM2xv189tU-SPyXb0mLSSLzzf6ZV_nvY=w16383",
              "https://lh5.googleusercontent.com/24LHOR4l4vAdNOySFJVEZq8kBEMV6sby3guVvtUmNHKsX68ucZ-H-D8IrLoCiqy41NHcCUXWO5gWeHCAaZbpq7E=w16383",
            ]}
          />

          <Slider
            dataURLS={[
              "https://lh3.googleusercontent.com/9Y7SnnHWM0sWWir3tjNYv_osRcOy9qlcA7eQoAHA0yyhnJ8ZlUZrFEUach_3b6kmwqelEPNg7DbPXKv6gcBsOeQ=w16383",
              "https://lh4.googleusercontent.com/0gShb4Jit3AK9TPupFJSpMcz39No37IMfXnAgtiTkHA0qmyOtf5IBlxxu9sXifYC0PPcrzlXEAZJETro5SY6SWA=w16383",
              "https://lh4.googleusercontent.com/1BsdCcSxvCPzy5GLKkbPjIO0Miq8CoeU2Q7nCvZGJ_y4KyXhVhyuOYAIiZIL4-BCF_VPUCx9EcuEaydTK09jzq0=w16383&quot",
            ]}
          />
        </div>
      </section>
      <section className="fourthsection">
        <h3>Highlights</h3>
        <div className="home_main borders">
          <Slider
            dataURLS={[
              "https://lh4.googleusercontent.com/AAhdpx3AwAk0NE99cee709m4OqqyaYgYE1qEZyf1b6K_cLH3B0-lF3De87cY1NDRwT0l5JkjyfHl2vmtiyrLqdA=w16383",
              "https://lh4.googleusercontent.com/RPpWcfa0usfprCGSYs9UD9hQ0PcWliW_wpBUF4Yf-YGmOQrxXTGslwagigz1NPlRLFGHsjLn05qEUVaasSRdJxU=w16383",
              "https://lh3.googleusercontent.com/MCp6y-9WeGpqY6aIOLMNNrs79bOt5a_3T4dxcj2MUI0Jm3jpjECJqkgPceRk7bhKq7N2973jnhs6b-7jfPZx0rE=w16383",
              "https://lh3.googleusercontent.com/-WALBSswKyyMxkpVEhqMXzcDCJqiLNw3CHW198EuqcpbHXMbutCsNdKUv4GgSvIm1nwFdG7c-qHEBRDXOrWqGco=w16383",
              "https://lh6.googleusercontent.com/onL298EQzz-y12GnbPjHzGYwD8jIlYHoyYlFMA_2DCLMAG1O9egFzjKNY7dcn7MN_Tlwzvavf9R8lhh680P-lZY=w16383",
              "https://lh5.googleusercontent.com/SK74PCwMv42zkrCFLLUX6qQv0YC5UgSR1fTVerBINMDq_GNCFi4WGtCCh5o_Hd1s_WqP-Vg15bECTAG7abM5hIg=w16383",
              "https://lh4.googleusercontent.com/jfN1sS5-SIvP92NZnMxClfg648mB5O79hj6ijtAg-HoMWxibn8RDl03-HMYJGrLamAHnT_XkWuz3MPm0iQqT1HM=w16383",
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
