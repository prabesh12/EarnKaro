import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Axios from "axios";

const buttons = [
  { name: "Super Sellers", api: "superseller" },
  { name: "Accessories", api: "accessories" },
  { name: "Electronics", api: "electronics" },
  { name: "Personal Care", api: "personelcare" },
  { name: "Men's Fashion", api: "menfashion" },
  { name: "Men's Footwear", api: "mensfootwear" },
  { name: "Women's Fashion", api: "womenfashion" },
  { name: "Women's Footwear", api: "womenfootwear" },
  { name: "Grocery & Essentials", api: "grocery" },
  { name: "Beauty", api: "beauty" },
  { name: "Home & Kitchen", api: "home&kitchen" },
  { name: "Baby products", api: "babyproduct" },
  { name: "Bgs & Luggage", api: "bags&luggage" },
];
const SecondaryMenu = () => {
  const [item, setItem] = useState("superseller");
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3000/${item}`)
      .then((res) => {
        setData(res.data);
        console.log("i am fetched data", res.data);
      })
      .catch((err) => console.log(err));
  }, [item]);
  console.log(item);
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-items">
          {buttons.map((btn) => (
            <button
              className={`${btn.api === item && "active"}`}
              onClick={() => setItem(btn.api)}
            >
              {btn.name}
            </button>
          ))}
        </div>
        <div className="container-fluid">
          {
            <div className="row">
              {data &&
                data?.map((data, index) => {
                  return <ProductCard images={data.images} />;
                })}
            </div>
          }
          ;
        </div>
      </div>
    </>
  );
};

export default SecondaryMenu;
