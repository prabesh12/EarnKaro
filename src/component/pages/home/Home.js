import { React } from "react";
import WhiteDivider from "../../leftCanvas/whiteDivider/WhiteDivider";
import Banner from "../../reusable/Banner";
import Footer from "../../reusable/Footer";
import Header from "../../reusable/Header";
import ProductBanner from "../../reusable/productBanner/TopRetailBanner";
import Scroll from "../../scrolltotop/ScrollToTop";
import SecondaryMenu from "../../secondarymenu/SecondaryMenu";
import TopSlider from "../../topslider/TopSlider";

const data = [
  { title: "FLASH DEALS", api: "flashdeal", flash: true },
  { title: "Most Shared Deals", api: "mostshared" },

  { title: "AJIO - HIGHEST CLICKED DEALS", api: "highestclicked" },
  { title: "NEW ON EARNKARO", api: "newonearnkaro" },
];
const Home = () => {
  return (
    <div className="home" id="home">
      <Header />
      <WhiteDivider />
      <TopSlider />
      <SecondaryMenu />
      <ProductBanner />
      {data.map((data) => {
        return (
          <Banner
            title={data.title}
            api={data.api}
            flash={data?.flash ? true : false}
          />
        );
      })}
       <Scroll />
      <Footer />
    </div>
  );
};

export default Home;
