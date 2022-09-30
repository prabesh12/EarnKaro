import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Axios from "axios";
const TopSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/TopBanner")
      .then((res) => {
        setData(res.data);
        console.log("i am fetched data", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 1000,

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
    <div className="banner_wrap">
      <Slider {...settings}>
        {data &&
          data?.map((data) => {
            return (
                <div className="banner_img"  key={data.id}>
                  <Link to="/" className="banner-card-content-link">
                    <img src={data.images} alt=""  />
                  </Link>
                </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default TopSlider;
