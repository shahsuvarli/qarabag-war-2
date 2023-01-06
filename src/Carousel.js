import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const arr = new Array(6).fill(1);
    const settings = {
      customPaging: function (i) {
        return (
          <img
            style={{
              width: 30,
              height: 30,
              borderRadius: 14,
              objectFit: "cover",
              background: "#fff",
            }}
            src={require(`./assets/carousel/img${i + 1}.jpg`)}
            alt="img"
          />
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ maxWidth: "100%" }} className="carousel-container">
        <Slider {...settings}>
          {arr.reverse().map((img, index) => (
            <div key={index}>
              <img
                className="carousel-card"
                alt={`img-${index}`}
                src={require(`./assets/carousel/img${index + 1}.jpg`)}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
