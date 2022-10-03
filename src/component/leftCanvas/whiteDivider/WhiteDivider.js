import React from "react";
import { Link } from "react-router-dom";
const WhiteDivider = () => {
  return (
    <div className="white-divider">
      <div className="container">
        <div className="divider">
          <div className="total-profit-wrapper">
            <Link className="profit-link" to="/">
              Your Total Profit <span>₹0.00</span>
            </Link>
          </div>

          <div className="how-to-earn-more">
            <button>
              Learn How To Earn More <span>&#8594;</span>{" "}
            </button>
          </div>
          <div className="amazon-add">
            <Link className="eligibility" to="/">
              Check Eligilibility <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDivider;
