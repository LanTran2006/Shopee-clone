import React from 'react';
import { useDispatch } from "react-redux";

function NavBar(props) {
 
    return (
        <div className="nav-bar">
        <nav>
          <a href="">Seller Center</a>
          <a href="">Start Selling</a>
          <a className="download" href="">Download
          <div>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/c5812b4d859712d8c8b94a9de654619a.png" alt="" />
            <div className="download-app">
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt="" />
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt="" />
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="" />
            </div>
          </div>
          </a>
          <a href="">
            Follow us on <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </nav>
        <div className="nav-right">
          <a className="notify" href="">
            <i className="fa-regular fa-bell"></i>Notification
            <div className="notify-ribbon-container">
              <div className="ribbon">
                <div className="image">
                  <img src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png' alt="" />
                  <p>login to view notifications</p>
                </div>
                <div className="buttons">
                    <button>Sign up</button>
                    <button>Sign in</button>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <i className="fa-regular fa-question"></i>Help
          </a>
          <a className="language" href="">
            <i className="fa-solid fa-globe"></i>EngLish
            <i className="fa-solid fa-angle-down"></i>
            <div className="language-ribbon-container">
              <div className="ribbon">
                <p>Tieng viet</p>
                <p>English</p>
              </div>
            </div>
          </a>

          <a className="auth sign-up" href="">
            Sign up
          </a>
          <a className="auth login" href="">
            Login
          </a>
        </div>
      </div>
    );
}

export default NavBar;