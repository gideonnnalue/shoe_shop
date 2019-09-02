import React from "react";
import shipping_van_icon from "../../assets/images/shipping-van-icon-1.svg";
import coin_icon from "../../assets/images/coin-icon.svg";
import time from "../../assets/images/24-7-icon.svg";

const Services = () => {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row align-items-center service__row">
          <div className="col-md-4">
            <div className="service__details">
              <div className="service__icon">
                <img src={shipping_van_icon} alt="" />
              </div>
              <div className="service__description">
                <p className="service__description--header">
                  FREE SHIPPING AND RETURN
                </p>
                <p className="service__description--detail">
                  Free shipping on all orders over $99.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service__details">
              <div className="service__icon">
                <img src={coin_icon} alt="" />
              </div>
              <div className="service__description">
                <p className="service__description--header">
                  MONEY BACK GUARANTEE
                </p>
                <p className="service__description--detail">
                  100% money back guarantee
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service__details">
              <div className="service__icon">
                <img src={time} alt="" />
              </div>
              <div className="service__description">
                <p className="service__description--header">
                  MONEY BACK GUARANTEE
                </p>
                <p className="service__description--detail">
                  100% money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
