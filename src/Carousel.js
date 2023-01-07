import React from "react";
import Slider from "react-slick";

function Carousel() {
  const images = require.context("./assets/carousel", true, /.jpg$/);
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
        {images.keys().map((img, index) => (
          <div key={index}>
            <img
              className="carousel-card"
              alt={`img-${index}`}
              src={require(`./assets/carousel/${img.replace("./", "")}`)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
