import React from "react";
import { Link } from "react-router-dom";
const BottomNav = () => {
  return (
      <div className="dn fix_menu">
    <div className="container">
        <ul className="fl fw ac ">
          <li id="Link_Home" className="active">
            <Link className="link" to="/">
              <i className="la"></i>
              <span>Home</span>
            </Link>
          </li>
          <li id="Link_All_Stores">
            <Link className="link" to="/">
              <span>Our Partners</span>
            </Link>
          </li>
          <li id="Link_Creat_Link">
            <Link className="link" to="/">
              <span>Make Links</span>
            </Link>
          </li>
          <li id="Link_Shared_Activities">
            <Link className="link" to="/">
              <span>My Activity</span>
            </Link>
          </li>
          <li id="Link_Profile_Menu" className="m_profile">
            <Link className="link" to="/">
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
