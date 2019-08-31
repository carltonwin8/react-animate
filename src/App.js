import React from "react";

import Style from "./AppStyle.js";

import Card from "./Card.js";
import art from "./art.json";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 200
});
function App({ classes }) {
  return (
    <>
      <header className={classes.mainHeader}>
        <h1>
          <span>Acrylic Painting</span> Gallery
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, totam?
        </p>
      </header>

      <main className={classes.cards}>
        {art.map((arc, idx) => (
          <Card key={idx} {...arc} />
        ))}
      </main>
    </>
  );
}

export default Style(App);
