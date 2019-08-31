import React from "react";
import Style from "./CardStyle.js";

function Card({ classes, link, title, description, dataAos }) {
  return (
    <section className={classes.container} data-aos={dataAos}>
      <img src={link} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Buy Now</a>
      </div>
    </section>
  );
}

export default Style(Card);
