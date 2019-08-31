import React from "react";
import Slider from "react-slick";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

import testImg from "../../assets/images/slider5.png";
import testImg2 from "../../assets/images/slider12.jpg";

import CarouselItem from "../utils/CarouselItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slickSlider__custom slickSlider__custom--next"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div class="arrow">
        <div class="arrow-top"></div>
        <div class="arrow-bottom"></div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slickSlider__custom slickSlider__custom--prev"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div class="arrow  right-arrow">
        <div class="arrow-top"></div>
        <div class="arrow-bottom"></div>
      </div>
    </div>
  );
}

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const items = [
  {
    image: testImg,
    heading1: "GET UP TO 60% OFF",
    heading2: "GREAT DEAL",
    button: "SHOP NOW"
  },
  {
    image: testImg2,
    heading1: "GET UP TO 60% OFF",
    heading2: "GREAT DEAL",
    button: "SHOP NOW"
  }
];

const renderCarouselItems = () =>
  items.map((item, i) => (
    <CarouselItem
      key={i}
      image={item.image}
      heading1={item.heading1}
      heading2={item.heading2}
      button={item.button}
    />
  ));

const Carousel = props => {
  return (
    <section className="carousel-section">
      <Slider {...settings}>
        {console.log(props)}
        {renderCarouselItems()}
      </Slider>
    </section>
  );
};

export default Carousel;
