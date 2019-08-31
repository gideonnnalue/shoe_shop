import React from "react";
import PropTypes from "prop-types";

const CarouselItem = props => {
  return (
    <div>
      <div
        className="carousel__items"
        style={{
          backgroundImage: `url(${props.image})`
        }}
      >
        <div className="carousel__stuffs container">
          <h3 className="carousel__head--1">
            GET UP TO <span>60%</span> OFF
          </h3>
          <h1 className="carousel__head--2">GREAT DEALS</h1>
          <div>
            <a href="#" className="carousel__call-to-action">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  button: PropTypes.string
};

export default CarouselItem;
