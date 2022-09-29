import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
              <div className="footer_d">
                <h3 className="hd_3">Navigate</h3>
                <ul className="innerPanel">
                  <li>
                    <Link id="link" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link id="link" to="/faq">
                      FAQs
                    </Link>
                  </li>{" "}
                  <li>
                    <Link id="link" to="/profitshala">
                      Get Help
                    </Link>
                  </li>
                  <li>
                    <Link id="link" to="https://earnkaro.com/blog/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link id="link" to="/terms-conditions">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link id="link" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
              <div className="footer_d">
                <div className="footer_followus">
                  <h3 className="hd_3" id="lblFollowUs">
                    Follow Us
                  </h3>

                  <ul className="innerPanel">
                    <li>
                      <Link
                        id="link"
                        to="https://telegram.me/realearnkaro"
                        rel="nofollow"
                        target="_blank"
                      >
                        Telegram
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="link"
                        to="https://www.facebook.com/groups/1571950632955104/"
                        rel="nofollow"
                        target="_blank"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="link"
                        to="https://twitter.com/Earn_Karo"
                        rel="nofollow"
                        target="_blank"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="link"
                        to="https://instagram.com/earnkaroofficial"
                        rel="nofollow"
                        target="_blank"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12">
              <div className="footer_d">
                <div className="fl fw global_app">
                  <h3 classNameName="hd_3">Download App</h3>
                  <Link to="https://play.google.com/store/apps/details?id=com.earnkaro&amp;referrer=r%3D1962062%26refname%3DEarnKaro%26utm_source%3Ddesktop_earnkaro_footer">
                    <img
                      alt="Get it on Google Play"
                      src="../images/googleplay.png"
                      width="127"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy_right "> <p id="lblFooterCopyRight">(©) Copyright 2022 EarnKaro. All Rights Reserved.</p> </div>
    </footer>
  );
};

export default Footer;
