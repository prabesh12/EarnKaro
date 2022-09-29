import React from "react";
import { Link } from "react-router-dom";
const WhiteDivider = () => {
  return (
    <div className="white-divider">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="total-profit-wrapper">
            <Link className="profit-link" to='/'> Your Total Profit <span>₹0.00</span></Link>
            </div>
          </div>

          <div className="col-md-5 col-lg-5 col-xl-5">
            <div className="how-to-earn-more">
                <button>Learn How To Earn More <span>&#8594;</span> </button>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="amazon-add">
            <Link className="eligibility" to='/'>Check Eligilibility <span>&#8594;</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDivider;
