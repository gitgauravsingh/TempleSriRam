import React from "react";
import Style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Style.footerdata}>
      <div className={Style.wrapper}>
        <div className={Style.mainfoot}>
          <div className={Style.logodata}>
            <img
              src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/ftr-logo.png"
              alt=""
            />
            <h4>Powered by Satyug©</h4>
            <h4>Satyug Life Foundation Satyug Labs Pvt Ltd</h4>
          </div>
          <div className={Style.ankerdata}>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Satyug</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div className={Style.icondata}>
            <div className={Style.dataicon}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className={Style.maindata}>
              <select>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Marathi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
