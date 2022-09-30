import React, { useState, useEffect } from "react";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerCard from "./bannerCard/BannerCard";
const Banner = ({title, api, flash}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3000/${api}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [api]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 6000,

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
        <h5>{title}</h5>
        <button>
          View All <span> {`>`} </span>{" "}
        </button>
      </div>
      <div className="common_banner">
        <div className="container-fluid">
          <div className="row">
            <Slider {...settings}>
             
           {data && data?.map((item)=>{
           return <BannerCard {...item} flash = {flash} key={item.id}/>
           })}
             
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
