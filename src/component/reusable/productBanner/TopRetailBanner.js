import React, { useState, useEffect } from "react";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopRetailBannerCard from "./TopRetailBannerCard";
const ProductBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(" http://localhost:3000/TopRetails")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="tooltips">
        <h5>Top Retailers</h5>
        <button>
          View All <span> {`>`} </span>
        </button>
      </div>
      <div className="common_banner">
        <div className="container-fluid" >
          <div className="row">
            <Slider {...settings}>
              {data &&
                data?.map((data, index) => {
                  return (
                      <TopRetailBannerCard
                        key={data.id}
                        offer={data.event}
                        images={data.images}
                        earn={data.earn}
                        profit={data.profit}
                      />
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProductBanner;
