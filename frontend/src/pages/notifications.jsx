import Hero from "../components/hero";
import "./notifications.css";

import React from "react";

const Notifications = () => {
  return (
    <>
      <Hero
        imageURL={"../../public/images/careers.jpg"}
        data={{
          title: "Notifications",
          subtitle: "",
        }}
      />
    </>
  );
};

export default Notifications;
