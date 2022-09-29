import React from "react";
import { Link } from "react-router-dom";
const TopRetailBannerCard = (props) => {
  return (
    // <div className="col-md-4 col-lg-3 col-xl-3">
      <div className="banner-card">
        <div className="offer">
          <p>{props.offer}</p>
        </div>
        <div className="secondary-wrapper">
          <div className="brand-wrapper">
          <Link to="/"><img src={props.images} alt="" /></Link>
          </div>
          <div className="earn-discount">
            <button className="earn-now">{props.earn}</button>
            <div className="discount-wrapper">
              <p className="discount">{props.profit}</p>
            </div>
          </div>
          <div className="app">
            <img src="../icons/whatsapp.png" alt="" />
            <button className="share-now">Share Now</button>
          </div>
          <button className="copy-link"> Copy Link</button>
        </div>
      {/* </div> */}
      </div>
  );
};

export default TopRetailBannerCard;
