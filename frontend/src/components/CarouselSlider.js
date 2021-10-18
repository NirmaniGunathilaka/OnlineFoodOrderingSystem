import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const styles = {
  img: {
    width: "100%",
    height: 520,
  },
};

export default function CarouselSlider() {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop="true"
      showThumbs={false}
    >
      <div>
        <img src="assets/f1.jpg" style={styles.img} />
      </div>
      <div>
        <img src="assets/f3.jpg" style={styles.img} />
      </div>
      <div>
        <img src="assets/f2.jpg" style={styles.img} />
      </div>
    </Carousel>
  );
}