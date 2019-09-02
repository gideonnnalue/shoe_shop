import React from "react";
import image1 from "../../assets/images/promoimg1.png";
import image2 from "../../assets/images/promoimg2.png";

const FirstImagePromo = () => {
  return (
    <section className="section-image-promo1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={image1}
              alt="promoimage"
              className="image-promo1__image"
            />
          </div>
          <div className="col-md-6">
            <img
              src={image2}
              alt="promoimage"
              className="image-promo1__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImagePromo;
