import "./index.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="header">
          <div className="container">
            <div className="headertop">
              <div className="divleft">
                <div className="divnumber">
                  <span className="bir">+12312-3-1209</span>{" "}
                  <span className="iki">SUPPORT@COLORLIB.COM</span>{" "}
                </div>
              </div>
              <div className="divright">
                <Link className="login" to={""}>Login</Link>
              </div>
            </div>

            <div className="headerbottom">
              <div className="headerbottomleft">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
                  alt=""
                />
              </div>
            
                <nav>
                  <ul>
                    <li>
                      <Link>HOME</Link>
                    </li>

                    <li>
                      <Link>CATEGORY</Link>
                    </li>
                    <li>
                      <Link>MEN</Link>
                    </li>

                    <li>
                      <Link>WOMEN</Link>
                    </li>
                    <li>
                      <Link>LATEST</Link>
                    </li>
                    <li>
                      <Link>PAGES</Link>
                    </li>
                  </ul>
                </nav>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
