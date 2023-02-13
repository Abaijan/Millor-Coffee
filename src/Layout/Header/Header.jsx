import React from "react";
import '../Header/Header.scss'
import millerLogo from "../../assets/Images/image 25.png"
import searchlogo from "../../assets/Images/Vector.svg"
import basketlogo from "../../assets/Images/Vector (1).svg"
import userlogo from "../../assets/Images/Vector (2).svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-logo">
            <img className="mainLogo" src={millerLogo} alt="" />
          </div>
          <div className="header-menu">
            <ul>
              <li>Каталог товаров</li>
              <li>Блог</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="header-icons">
            <img className="head-icon" src={searchlogo} alt="" />
            <img className="head-icon" src={basketlogo} alt="" />
            <img className="head-icon" src={userlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;