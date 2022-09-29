import React from "react";

const ProductCard = (props) => {
  return (
    <>
  <div className="col-md-4 col-lg-3 col-xl-3 col-sm-6">
        <div className="product-card">
          <img src={props.images} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
