import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="footertop">
              <nav>
                <ul className="ul1">
                  ABOUT US
                  <li>
                    <p className="footp">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi reiciendis eos dolorum nesciunt dicta nihil
                    </p>{" "}
                  </li>
                </ul>

                <ul className="ul1">
                  Newsletter
                  <li>
                    <h1>Stay update with our latest</h1>
                    <input type="text" placeholder="Enter E-mail" />
                    <FaArrowRight className="iconinput" />
                  </li>
                </ul>
                <ul className="ul1">
                  Instragram Feed
                  <li>
                    <div className="rowssssss">
                      <div className="row1">
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i4.jpg"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="row2">
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i5.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i6.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i7.jpg"
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <img
                            src="https://preview.colorlib.com/theme/shop/img/i8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="ul1">
                  Follow Us
                  <li>
                    <h1>Let us be social</h1>
                    <div className="icons">
                      <FaFacebookF />
                      <FaTwitterSquare />
                      <FaXbox />
                      <FaWhatsapp />

                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="footerbottom">
                <h1>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
