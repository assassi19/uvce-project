import React from "react";
import Hero from "../components/hero";

const Blog = () => {
  return (
    <>
      <Hero
        imageURL={
          "https://res.cloudinary.com/duozomapm/image/upload/v1728042782/vangoghmuseum-s0106V1962-800_xl7try.jpg"
        }
        data={{
          title: "Events Blog",
        }}
      />

      <section>Blogs</section>
    </>
  );
};

export default Blog;
