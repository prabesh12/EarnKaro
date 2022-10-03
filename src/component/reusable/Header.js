import React, { useContext, useState } from "react";
import Canvas from "../leftCanvas/Canvas";
import { Link } from "react-router-dom";
import GlobalSearchContext from "../../context/GlobalContext";
const Header = () => {
  const { searchData, setSearchData } = useContext(GlobalSearchContext);
  const [search, setSerach] = useState();

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <>
      <header>
        <div className="container-fluid header">
          <Canvas />
          <div className="logo-wrapper">
            <Link to="/">
              <img className="logo" src="./images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="search">
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search for the partner or deals"
            />
            <div className="search-icon-wrapper">
              <img src="../icons/search.png" alt="" />
            </div>
          </div>
          <div className="profit common">
            <img className="currency-icon" src="./icons/rs.png" alt="" />
            <p className="profit-rate">Profit Rates</p>
          </div>
          <div className="link common">
            <img className="link-icon" src="./icons/link.png" alt="" />
            <p className="make-links">Make Links</p>
          </div>
          <div className="profile common">
            <img src="./icons/profile.png" alt="" />
            <label htmlFor="cars">My Profile</label>
            <select name="cars" id="cars">
              <option value="How earn karo works">How earn karo works ?</option>
              <option value="Hear From Our Top Earner">
                Hear From Our Top Earner
              </option>
              <option value="Make Profit Links">Make Profit Links</option>
              <option value="Partners and Profit Rates">
                Partners and Profit Rates
              </option>
              <option value="My Earnings">My Earnings</option>
              <option value="My Activities">My Activities</option>
              <option value="Request Payment">Request Payment</option>
              <option value="Payment History">Payment History</option>
              <option value="Profit Didn't Track">Profit Didn't Track ?</option>
              <option value="Refer & Earn">Refer & Earn</option>
              <option value="Account Settings">Account Settings</option>
              <option value="Choose Language">Choose Language</option>
              <option value="Get Help">Get Help</option>
              <option value="Email Us">Email Us</option>
              <option value="Rate Us">Rate Us</option>
              <option value="Privacy Policy">Privacy Policy</option>
              <option value="Logout">Logout</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
